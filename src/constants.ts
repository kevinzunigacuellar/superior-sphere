import type { CollectionKey } from "astro:content";

export const defaultMeta = {
  title: "Casa Real Mexican Restaurant",
  description:
    "Savor the best Mexican food in Colchester, Vermont! From flavorful tacos to fresh guacamole, enjoy an unforgettable culinary experience at our renowned restaurant",
  ogImagePath: "og.webp",
};

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Casa-real-Mexican-restaurant-61550264528835/",
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/store/casa-real-colchester-27477852/",
  },
];

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
];

export const categories: {
  title: string;
  slug: CollectionKey;
}[] = [
  {
    title: "Appetizers",
    slug: "appetizers",
  },
  {
    title: "Burritos",
    slug: "burritos",
  },
  {
    title: "Chicken",
    slug: "chicken",
  },
  {
    title: "Desserts",
    slug: "desserts",
  },
  {
    title: "Enchiladas",
    slug: "enchiladas",
  },
  {
    title: "Fajitas",
    slug: "fajitas",
  },
  {
    title: "House Specialties",
    slug: "house-specialties",
  },
  {
    title: "Kids Menu",
    slug: "kids-menu",
  },
  {
    title: "Lunch Specials",
    slug: "lunch-specials",
  },
  {
    title: "Nachos",
    slug: "nachos",
  },
  {
    title: "Quesadillas",
    slug: "quesadillas",
  },
  {
    title: "Salads",
    slug: "salads",
  },
  {
    title: "Seafood",
    slug: "seafood",
  },
  {
    title: "Steak",
    slug: "steaks",
  },
  {
    title: "Tacos",
    slug: "tacos",
  },
];
