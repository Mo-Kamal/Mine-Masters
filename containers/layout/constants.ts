import TelegramIcon from "@/assets/layout/Telegram.svg";
import InstagramIcon from "@/assets/layout/Instagram.svg";
import DiscordIcon from "@/assets/layout/Discord.svg";
import YouTubeIcon from "@/assets/layout/Youtube.svg";
import XIcon from "@/assets/layout/X.svg";
import { SOCCIAL_LINKS } from "@/constants";

export const NAVBAR_ITEMS = [
  {
    title: "Game Mechanism",
    href: "/#GameMechanism",
  },
  {
    title: "Marketplace",
    href: "/#Marketplace",
  },
  {
    title: "Communities",
    href: "/#Footer",
  },
  {
    title: "Events",
    href: "/#Events",
  },
  {
    title: "FAQ",
    href: "/#FAQ",
  },
];

export const COMMINUTIES_ITEMS = [
  {
    title: "Instagram",
    icon: InstagramIcon,
    url: SOCCIAL_LINKS.INSTAGRAM,
  },
  {
    title: "Telegram",
    icon: TelegramIcon,
    url: SOCCIAL_LINKS.TELEGRAM,
  },
  {
    title: "Discord",
    icon: DiscordIcon,
    url: SOCCIAL_LINKS.DISCORD,
  },
  {
    title: "YouTube",
    icon: YouTubeIcon,
    url: SOCCIAL_LINKS.YOUTUBE,
  },
  {
    title: "X",
    icon: XIcon,
    url: SOCCIAL_LINKS.X,
  },
];

export const COMPANY_NAME_CHARACTERS_FIRST_PART = [
  { char: "M" },
  { char: "I", color: "var(--Pastal-Blue)" },
  { char: "N" },
  { char: "E", color: "var(--Orange)" },
];

export const COMPANY_NAME_CHARACTERS = [
  ...COMPANY_NAME_CHARACTERS_FIRST_PART,
  // Spacer, Work as &nbsp;
  { char: "\u00A0" },
  { char: "MASTERS" },
];
