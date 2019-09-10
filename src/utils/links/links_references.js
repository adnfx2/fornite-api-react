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
const STRING = "string";

export const contacts = [
  {
    id: "email",
    type: STRING,
    label: "Email",
    content: "fx.adrian@gmail.com",
    faIcon: faEnvelope
  },
  {
    id: "phoneNumber",
    type: STRING,
    label: "Phone number",
    content: "+58-412-7665245",
    faIcon: faPhone
  },
  {
    id: "linkedIn",
    type: URL,
    endpoint: "https://www.linkedin.com/in/adrian-pirela-67106978",
    placeholder: "LinkedIn",
    faIcon: faLinkedin,
    external: true
  }
];

export const menu = [
  { id: "home", type: URL, endpoint: "/home", placeholder: "Home" },
  { id: "store", type: URL, endpoint: "/store", placeholder: "Store" },
  {
    id: "dashboard",
    type: URL,
    endpoint: "/dashboard",
    placeholder: "Dashboard"
  }
];

export const fortnite = [
  {
    id: "fortniteMain",
    type: URL,
    endpoint: "https://www.epicgames.com/fortnite",
    placeholder: "Fortnite",
    faIcon: faExternalLinkAlt,
    external: true
  },
  {
    id: "fortniteDownload",
    type: URL,
    endpoint: "https://www.epicgames.com/fortnite/en-US/download",
    placeholder: "Get fortnite now!",
    faIcon: faExternalLinkAlt,
    external: true
  },
  {
    id: "facebook",
    type: URL,
    endpoint: "https://www.facebook.com/FortniteGame/",
    placeholder: "Facebook",
    faIcon: faFacebook,
    external: true
  },
  {
    id: "twitter",
    type: URL,
    endpoint: "https://twitter.com/FortniteGame",
    placeholder: "Twitter",
    faIcon: faTwitter,
    external: true
  },
  {
    id: "twitch",
    type: URL,
    endpoint: "https://www.twitch.tv/fortnitegame",
    placeholder: "Twitch",
    faIcon: faTwitch,
    external: true
  }
];

export const copyrights = [
  {
    id: "id-freepik",
    name: "freepik",
    type: URL,
    endpoint: "https://www.flaticon.com/authors/freepik",
    placeholder: "Freepik",
    external: true
  },
  {
    id: "id-flaticon",
    name: "flaticon",
    type: URL,
    endpoint: "https://www.flaticon.com/",
    placeholder: { image: flaticon_svg },
    external: true
  },
  {
    id: "id-fa",
    name: "Font Awesome",
    type: URL,
    endpoint: "https://fontawesome.com",
    placeholder: { fa: faFontAwesomeFlag },
    external: true
  },
  {
    id: "id-adnfx2",
    name: "adnfx2",
    type: URL,
    endpoint: "https://adnfx2.github.io/adn-react-portfolio/",
    placeholder: "@adnfx2",
    external: true
  }
];
