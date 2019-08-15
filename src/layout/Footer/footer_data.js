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

export const contact_data = [
  {
    type: "string",
    label: "Email",
    content: "fx.adrian@gmail.com",
    faIcon: faEnvelope
  },
  {
    type: "string",
    label: "Phone number",
    content: "+58-412-7665245",
    faIcon: faPhone
  },
  {
    type: "url",
    label: "LinkedIn",
    content: "www.google.com",
    faIcon: faLinkedin,
    external: true
  }
];

export const menu_links = [
  { type: "url", label: "Home", content: "#" },
  { type: "url", label: "Items", content: "#" },
  { type: "url", label: "Blog", content: "#" }
];

export const fornite_references = [
  {
    type: "url",
    label: "Fortnite",
    content: "https://www.epicgames.com/fortnite",
    faIcon: faExternalLinkAlt,
    external: true
  },
  {
    type: "url",
    label: "Get fortnite now!",
    content: "https://www.epicgames.com/fortnite/en-US/download",
    faIcon: faExternalLinkAlt,
    external: "true"
  },
  {
    type: "url",
    label: "Facebook",
    content: "https://www.facebook.com/FortniteGame/",
    faIcon: faFacebook,
    external: "true"
  },
  {
    type: "url",
    label: "Twitter",
    content: "https://twitter.com/FortniteGame",
    faIcon: faTwitter,
    external: "true"
  },
  {
    type: "url",
    label: "Twitch",
    content: "https://www.twitch.tv/fortnitegame",
    faIcon: faTwitch,
    external: "true"
  }
];
