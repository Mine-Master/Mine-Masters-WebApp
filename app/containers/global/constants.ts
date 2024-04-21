import TelegramIcon from "@/app/assets/Telegram.svg";
import InstagramIcon from "@/app/assets/Instagram.svg";
import DiscordIcon from "@/app/assets/Discord.svg";
import YouTubeIcon from "@/app/assets/Youtube.svg";
import XIcon from "@/app/assets/X.svg";
import { SOCCIAL_LINKS } from "@/app/constants";

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

export const MOBILE_MENU_ITEMS = [
  {
    title: "Game Mechanism",
    href: "/#GameMechanism",
  },
  {
    title: "Marketplace",
    href: "/Marketplace",
  },
  {
    title: "Communities",
    href: "/Communities",
  },
  {
    title: "Events",
    href: "/Events",
  },
  {
    title: "FAQ",
    href: "/FAQ",
  },
  {
    title: "Terms of Use",
    href: "/Terms of Use",
  },
  {
    title: "Privacy Policy",
    href: "/Privacy Policy",
  },
];

export const FOOTER_MENU_ITEMS = [
  {
    title: "Game Mechanism",
    href: "/",
  },
  {
    title: "Marketplace",
    href: "/Marketplace",
  },
  {
    title: "Events",
    href: "/Events",
  },
  {
    title: "FAQ",
    href: "/FAQ",
  },
  {
    title: "Terms of Use",
    href: "/Terms of Use",
  },
  {
    title: "Privacy Policy",
    href: "/Privacy Policy",
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
