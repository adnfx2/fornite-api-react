import {
  faTwitch,
  faFacebook,
  faTwitter,
  faLinkedin,
  faFontAwesomeFlag
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import flaticon_svg from "../../assets/images/flaticon.svg";

const URL = "URL";

const addKeysFieldToObject = o => {
  if (typeof o !== "object") {
    throw new Error(`addKeysFieldToObject requires an object as argument`);
  }
  const keys = Object.keys(o);
  return { ...o, keys };
};

const contacts = {
  email: {
    type: "string",
    label: "Email",
    content: "fx.adrian@gmail.com",
    faIcon: faEnvelope
  },
  phoneNumber: {
    type: "string",
    label: "Phone number",
    content: "+58-412-7665245",
    faIcon: faPhone
  },
  linkedIn: {
    type: URL,
    endpoint: "https://www.linkedin.com/in/adrian-pirela-67106978",
    placeholder: "LinkedIn",
    faIcon: faLinkedin,
    external: true
  }
};
export const contactsReferences = addKeysFieldToObject(contacts);

const menu = {
  home: { type: URL, endpoint: "#home", placeholder: "Home" },
  items: { type: URL, endpoint: "#items", placeholder: "Items" },
  blog: { type: URL, endpoint: "#blog", placeholder: "Blog" }
};
export const menuReferences = addKeysFieldToObject(menu);

const fortnite = {
  home: {
    type: URL,
    endpoint: "https://www.epicgames.com/fortnite",
    placeholder: "Fortnite",
    faIcon: faExternalLinkAlt,
    external: true
  },
  download: {
    type: URL,
    endpoint: "https://www.epicgames.com/fortnite/en-US/download",
    placeholder: "Get fortnite now!",
    faIcon: faExternalLinkAlt,
    external: true
  },
  fb: {
    type: URL,
    endpoint: "https://www.facebook.com/FortniteGame/",
    placeholder: "Facebook",
    faIcon: faFacebook,
    external: true
  },
  twitter: {
    type: URL,
    endpoint: "https://twitter.com/FortniteGame",
    placeholder: "Twitter",
    faIcon: faTwitter,
    external: true
  },
  twitch: {
    type: URL,
    endpoint: "https://www.twitch.tv/fortnitegame",
    placeholder: "Twitch",
    faIcon: faTwitch,
    external: true
  }
};
export const fortniteReferences = addKeysFieldToObject(fortnite);

const copyrights = {
  Freepik: {
    type: URL,
    endpoint: "https://www.flaticon.com/authors/freepik",
    placeholder: "Freepik",
    external: true
  },
  Flaticon: {
    type: URL,
    endpoint: "https://www.flaticon.com/",
    placeholder: { image: flaticon_svg },
    external: true
  },

  FontAwesome: {
    type: URL,
    endpoint: "https://fontawesome.com",
    placeholder: { fa: faFontAwesomeFlag },
    external: true
  },
  Adnfx2: {
    type: URL,
    endpoint: "https://adnfx2.github.io/adn-react-portfolio/",
    placeholder: "@adnfx2",
    external: true
  }
};
export const copyrightsReferences = addKeysFieldToObject(copyrights);
