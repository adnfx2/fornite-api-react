import { firstLetterCaps } from "../../utils/textUtils";

export const alphabeticOrderOptions = ["Default", "A-Z", "Z-A"];

export const getOptions = options => {
  const _options = options
    ? [
        "All",
        ...Object.keys(options).map(option =>
          firstLetterCaps(options[option].name)
        )
      ]
    : [];
  return _options;
};
