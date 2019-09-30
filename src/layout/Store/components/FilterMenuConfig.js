import { firstLetterCaps } from "../../../utils/textUtils";

export const nameRadioGroup = {
  groupTitle: "Name",
  groupName: "byName",
  options: [{ label: "Default" }, { label: "A-Z" }, { label: "Z-A" }]
};

export const getRarities = rarities => {
  const _rarities = rarities
    ? [
        "All",
        ...Object.keys(rarities).map(rarity =>
          firstLetterCaps(rarities[rarity].name)
        )
      ]
    : null;
  return {
    title: "Rarity",
    options: _rarities
  };
};
