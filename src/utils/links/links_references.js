import {
  faTwitch,
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import {
  faExternalLinkAlt,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const addKeysFieldToObject = o => {
  if (typeof o !== "object") {
    return console.warn("error");
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
    type: "url",
    endpoint: "www.google.com",
    placeholder: "LinkedIn",
    faIcon: faLinkedin,
    external: true
  }
};
export const contactsReferences = addKeysFieldToObject(contacts);

const menu = {
  home: { type: "url", endpoint: "#home", placeholder: "Home" },
  items: { type: "url", endpoint: "#items", placeholder: "Items" },
  blog: { type: "url", endpoint: "#blog", placeholder: "Blog" }
};
export const menuReferences = addKeysFieldToObject(menu_links);

const fortnite = {
  home: {
    type: "url",
    endpoint: "https://www.epicgames.com/fortnite",
    placeholder: "Fortnite",
    faIcon: faExternalLinkAlt,
    external: true
  },
  download: {
    type: "url",
    endpoint: "https://www.epicgames.com/fortnite/en-US/download",
    placeholder: "Get fortnite now!",
    faIcon: faExternalLinkAlt,
    external: true
  },
  fb: {
    type: "url",
    endpoint: "https://www.facebook.com/FortniteGame/",
    placeholder: "Facebook",
    faIcon: faFacebook,
    external: true
  },
  twitter: {
    type: "url",
    endpoint: "https://twitter.com/FortniteGame",
    placeholder: "Twitter",
    faIcon: faTwitter,
    external: true
  },
  twitch: {
    type: "url",
    endpoint: "https://www.twitch.tv/fortnitegame",
    placeholder: "Twitch",
    faIcon: faTwitch,
    external: true
  }
};
export const fortniteReferences = addKeysFieldToObject(fornite);
