import { schema } from "normalizr";

// Utilities
const groupingMergeStrategy = () => (entityA, entityB) => ({
  ...entityA,
  ...entityB,
  ownersId: [...entityA.ownersId, ...entityB.ownersId]
});

const addIdToProp = (property, ownerId) => {
  if (typeof property !== "string") {
    throw new Error("property must be an string");
  }
  return {
    id: `_${property}`,
    name: property,
    ownersId: [ownerId]
  };
};

// Items Schema
const rarity = new schema.Entity(
  "itemsByRarity",
  {},
  { mergeStrategy: groupingMergeStrategy() }
);

const type = new schema.Entity(
  "itemsByType",
  {},
  {
    mergeStrategy: groupingMergeStrategy()
  }
);

const item = new schema.Entity(
  "itemsById",
  { type, rarity },
  {
    idAttribute: "itemId",
    processStrategy: ({ itemId, item, ...rest }) => ({
      ...item,
      ...rest,
      itemId,
      rarity: addIdToProp(item.rarity, itemId),
      type: addIdToProp(item.type, itemId)
    })
  }
);

const itemsSchema = [item];

// Weapons schema
const weaponRarity = new schema.Entity(
  "weaponsByRarity",
  {},
  {
    mergeStrategy: groupingMergeStrategy()
  }
);

const weapon = new schema.Entity(
  "weaponsById",
  { rarity: weaponRarity },
  {
    idAttribute: "identifier",
    processStrategy: ({ identifier, rarity, ...rest }) => ({
      ...rest,
      rarity: addIdToProp(rarity, identifier),
      id: identifier
    })
  }
);

const weaponsSchema = new schema.Array(weapon);

// Schemas bundle
export const schemas = {

  commonLocation: ["data", "data"],
  item,
  itemsSchema,
  weapon,
  weaponsSchema,
  weaponsLocation: ["data", "data", "entries"]
};

/* Notes:
"someDataLocation" convention stores an array with strings representing the fields
 of an object where the data required is located in a JSON response, from parent to
 child.

  Example:

  jsonResponse: {
    data: {
      data: [...what you want here!],

      ...other properties
    }
  }

  The path to obtain what you want should be stored like this:

  const myDataLocation = ["data", "data"]
  */
