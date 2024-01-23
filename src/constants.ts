export const twitter = "@casa_realmexicanarestaurant";

export const defaultMeta = {
  title: "Casa Real Mexican Restaurant",
  description: "Authentic Mexican food in the heart of the North Shore",
  image: "/images/og-image.jpg",
  ogImagePath: "./og.png",
};

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/CasaRealMexicanRestaurant",
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

export const popularDishes = [
  {
    title: "Fajitas",
    href: "/menu#fajitas",
    img: {
      src: "/fajitas.webp",
      alt: "fajitas on a sizzling plate",
    },
  },
  {
    title: "Mojitos",
    href: "/menu#mojitos",
    img: {
      src: "/mojito.webp",
      alt: "mojito in a glass",
    },
  },
  {
    title: "Enchiladas",
    href: "/menu#enchiladas",
    img: {
      src: "/enchiladas.webp",
      alt: "two enchiladas in a plate",
    },
  },
];

export const menu = [
  {
    label: "Appetizers",
    id: "appetizers",
    items: [
      {
        name: "Guacamole dip",
        price: 550,
      },
      {
        name: "Cheese dip",
        price: 550,
      },
      {
        name: "Bean dip",
        price: 599,
      },
      {
        name: "Queso fundido",
        description: "Melted cheese with chorizo (Mexican sausage)",
        price: 825,
      },
      {
        name: "Fiesta fries",
        description:
          "A bed of french fries with bacon and cheese sauce. Topped with your choice of protein and drizzled with sour cream and our homemade chipotle sauce",
        price: {
          chicken: 1299,
          steak: 1399,
        },
      },
      {
        name: "Quesadilla casa real",
        description:
          "Steak, chicken, chorizo (Mexican sausage), or vegetarian, topped with cheese in a grilled flour tortilla. Served with lettuce, pico de gallo, and sour cream",
        price: {
          chicken: 1275,
          steak: 1425,
          pastor: 1425,
          shrimp: 1525,
        },
      },
      {
        name: "Appetizer casa real",
        description:
          "Samples of taquitos, tostadas, jalapeño poppers, and cheese quesadilla on a bed of lettuce. Served with sour cream and tomatoes",
        price: 1325,
      },
      {
        name: "Jalapeño poppers",
        description:
          "Six jalapeño stuffed with cheddar cheese. Served on a bed of lettuce with sour cream and tomatoes on top",
        price: 875,
      },
      {
        name: "Wings",
        description:
          "Ten wings tossed in your sauce of choice: plain, BBQ, buffalo, or mango habanero. Served with celery, blue cheese or ranch dressing",
        price: 1499,
      },
      {
        name: "Street corn",
        description:
          "Grilled sweet corn on the cob. Topped with our homemade chipotle sauce, mayo, parmesan cheese, and tajin",
        price: 899,
      },
    ],
  },
  {
    label: "Salads",
    id: "salads",
    items: [
      {
        name: "Casa real salad",
        description:
          "Grilled chicken, steak, or shrimp, served on a bed of lettuce with tomatoes, shredded cheese, and slices of avocado",
        price: {
          chicken: 1175,
          steak: 1299,
          shrimp: 1499,
        },
      },
      {
        name: "Casa real bowl",
        description:
          "Burrito bowl loaded with your choice of protein, black beans, rice, lettuce, sour cream, fresh jalapeños, pico de gallo and schredded cheese",
        price: {
          chicken: 1250,
          ground_beef: 1250,
          grilled_chicken: 1450,
          steak: 1600,
          pastor: 1600,
          shrimp: 1725,
        },
      },
      {
        name: "Chipotle bowl",
        description:
          "Burrito bowl loaded with protein of your preference, with black beans, rice, lettuce, pico de gallo, and shredded cheese",
        price: {
          grilled_chicken: 1450,
          steak: 1600,
          pastor: 1600,
          shrimp: 1725,
        },
      },
    ],
  },
  {
    label: "Nachos",
    id: "nachos",
    items: [
      {
        name: "Nachos supremos",
        description:
          "Toasted corn tortilla chips, covered with a delicious blend of melted cheese, beef, chicken, and beans. Covered with lettuce, tomatoes, and sour cream",
        price: 1450,
      },
      {
        name: "Nachos",
        price: {
          cheese: 850,
          beans: 850,
          grilled_chicken: 1275,
          shrimp: 1550,
          chicken: 975,
          ground_beef: 975,
          steak: 1225,
        },
      },
    ],
  },
  {
    label: "House Specialties",
    id: "house-specialties",
    items: [
      {
        name: "Dinner special",
        description:
          "Cannot decide? This dinner has a little of everything. One chalupa with cream salad, one chile relleno, one beef taco, one enchilada, and one ground beef burrito served with rice and beans",
        price: 1925,
      },
      {
        name: "Taquitos mexicanos",
        description:
          "Four fried flautas: two shredded beef and two chicken served with lettuce, sour cream and rice",
        price: 1225,
      },
      {
        name: "Taco salad",
        description:
          "A crispy flour shell tortilla filled with ground beef or chicken, beans, lettuce, tomatoes, cheese, and sour cream",
        price: 1175,
      },
      {
        name: "Taco salad fajita",
        description:
          "A crispy fried flour shell tortilla served with grilled chicken or steak, onions, bell peppers, tomatoes and beans. Topped with lettuce, cheese, sliced tomatoes and sour cream",
        price: {
          chicken: 1275,
          steak: 1350,
          shrimp: 1499,
        },
      },
      {
        name: "Chimichangas",
        description:
          "Two chimichangas: one chicken and one beef tips, topped with cheese sauce and mild red ranchero sauce, Served with lettuce, sour cream, beans and rice",
        price: 1299,
      },
      {
        name: "Carnitas",
        description:
          "Fried pork chunks served with rice, beans, lettuce, sour cream, tomatoes, cheese and three flour tortillas",
        price: 1599,
      },
      {
        name: "Nachos fajitas",
        description:
          "Nacho chips covered in a blend of melted cheese, grilled chicken or steak, bell peppers, onions, and tomatoes. Topped with lettuce, sour cream and pico de gallo",
        price: {
          chicken: 1299,
          steak: 1450,
          shrimp: 1699,
        },
      },
      {
        name: "Molcajete",
        description:
          "Steak, chicken, and shrimp grilled with bell peppers, onions, tomatoes, and pineapple. Topped with Monterrey Jack cheese and special read sauce, on a sizzling hot authentic Mexican molcajete. Served with rice, beans, sour cream, lettuce, pico de gallo, and three corn or flour tortillas",
        price: 2125,
      },
      {
        name: "Lalo's special",
        description:
          "Grilled chicken breat with grilled onions, pineapple, bacon, and cheese sauce. Served with a side of rice, lettuce, sour cream, shredded cheese, tomato, and three flour tortillas",
        price: 1650,
      },
    ],
  },
  {
    label: "Quesadillas",
    id: "quesadillas",
    items: [
      {
        name: "Quesadillas mexicanas",
        description:
          "Two flour tortillas grilled and stuffed cheese, one with shredded beef and beans, and one with chicken and refried beans served with lettuce, cheese, sour cream and tomatoes",
        price: 1250,
      },
      {
        name: "Quesadillas de fajita",
        price: {
          chicken: 1450,
          steak: 1575,
          pastor: 1575,
          shrimp: 1650,
        },
      },
      {
        name: "La gringa",
        price: 1625,
      },
      {
        name: "Quesadilla Popeye's",
        price: 1575,
      },
      {
        name: "Quesabirrias",
        price: 1599,
      },
      {
        name: "Quesadilla la chicken tips",
        price: 1325,
      },
    ],
  },
  {
    label: "Enchiladas",
    id: "enchiladas",
    items: [
      {
        name: "Enchiladas supremas",
        price: 1425,
      },
      {
        name: "Enchiladas rancheras",
        price: 1425,
      },
      {
        name: "Enchiladas popeye's",
        price: 1425,
      },
      {
        name: "Enchiladas acapulco",
        price: 1599,
      },
      {
        name: "Yolanda's",
        price: 1399,
      },
    ],
  },
  {
    label: "Tacos",
    id: "tacos",
    items: [
      {
        name: "Avocado tacos",
        price: 1275,
      },
      {
        name: "Carne asada tacos",
        price: 1425,
      },
      {
        name: "Carnitas tacos",
        price: 1425,
      },
      {
        name: "Fish tacos",
        price: 1575,
      },
      {
        name: "Tacos al pastor",
        price: 1475,
      },
      {
        name: "Tacos supremos",
        price: 1225,
      },
      {
        name: "Tacos de birria",
        price: 1499,
      },
    ],
  },
  {
    label: "Burritos",
    id: "burritos",
    items: [
      {
        name: "Burritos mexicanos",
        price: 1325,
      },
      {
        name: "Burritos típicos",
        price: 1250,
      },
      {
        name: "Burritos típicos",
        price: 1250,
      },
      {
        name: "Burrito chipotle",
        price: {
          veggies: 1525,
          chicken: 1499,
          steak: 1650,
          pastor: 1650,
          shrimp: 1750,
        },
      },
      {
        name: "Burrito california",
        price: {
          veggies: 1525,
          chicken: 1499,
          steak: 1650,
          pastor: 1650,
          shrimp: 1750,
        },
      },
      {
        name: "Burrito casa real",
        price: {
          veggies: 1525,
          chicken: 1499,
          steak: 1650,
          pastor: 1650,
          shrimp: 1750,
        },
      },
      {
        name: "Burrito popeye's",
        price: 1325,
      },
      {
        name: "Skillet burrito",
        price: {
          chicken: 1525,
          steak: 1725,
          pastor: 1725,
          carnitas: 1725,
        },
      },
    ],
  },
  {
    label: "Steak",
    id: "steak",
    items: [
      {
        name: "Carne asada",
        price: 1699,
      },
      {
        name: "Steak a la mexicana",
        price: 1799,
      },
      {
        name: "Steak casa real",
        price: 2050,
      },
      {
        name: "Steak oaxaca",
        price: 1899,
      },
      {
        name: "Steak maya",
        price: 1850,
      },
    ],
  },
  {
    label: "Chicken",
    id: "chicken",
    items: [
      {
        name: "El tapatío",
        price: 1599,
      },
      {
        name: "Pollo loco",
        price: 1499,
      },
      {
        name: "Pollo encremado",
        price: 1575,
      },
      {
        name: "Pollo maya",
        price: 1599,
      },
      {
        name: "Ángel",
        price: 1299,
      },
    ],
  },
  {
    label: "Fajitas",
    id: "fajitas",
    items: [
      {
        name: "Fajitas",
        price: {
          chicken: 1650,
          steak: 1750,
          mix: 1825,
          texana: 1950,
          special: 1999,
          hawaiana: 1699,
          shrimp: 1999,
          pork: 1925,
          del_mar: 2099,
          veggies: 1499,
        },
      },
    ],
  },
  {
    label: "Seafood",
    id: "seafood",
    items: [
      {
        name: "Coctel de camarón",
        price: 1800,
      },
      {
        name: "Veracruz plate",
        price: 1825,
      },
      {
        name: "Lago especial",
        price: 1850,
      },
      {
        name: "Camarón yucatán",
        price: 1825,
      },
      {
        name: "Rice with chicken or shrimp",
        price: {
          chicken: 1225,
          shrimp: 1725,
        },
      },
      {
        name: "Brochetas",
        price: 1999,
      },
      {
        name: "Al pastor brochetas",
        price: 1899,
      },
    ],
  },
  {
    label: "Lunch Specials",
    id: "lunch-specials",
    items: [
      {
        name: "Speed gonzales",
        price: 850,
      },
      {
        name: "Lunch chimichanga",
        price: {
          beef: 975,
          chicken: 975,
          shrimp: 1199,
        },
      },
      {
        name: "Burrito mexicano",
        price: 850,
      },
      {
        name: "Huevos rancheros",
        price: 899,
      },
      {
        name: "Huevos con chorizo",
        price: 925,
      },
      {
        name: "El rancho",
        price: 1050,
      },
      {
        name: "Burrito especial",
        price: 799,
      },
      {
        name: "Burrito especial",
        price: 799,
      },
      {
        name: "Burrito and enchilada",
        price: 899,
      },
      {
        name: "Burrito verde",
        price: 950,
      },
      {
        name: "Quesadilla especial",
        price: 850,
      },
      {
        name: "El burrito alteño",
        price: 850,
      },
      {
        name: "Fajita lunch special",
        price: {
          chicken: 999,
          steak: 1175,
          pork: 1175,
          shrimp: 1275,
        },
      },
      {
        name: "Fajita lunch special",
        price: {
          chicken: 1025,
          steak: 1150,
          shrimp: 1350,
        },
      },
      {
        name: "Flautas",
        price: 925,
      },
    ],
  },
  {
    label: "Desserts",
    id: "desserts",
    items: [
      {
        name: "Combo casa real",
        price: 1299,
      },
      {
        name: "Fried ice cream",
        price: 825,
      },
      {
        name: "Fried cheesecake",
        price: 799,
      },
      {
        name: "Churros",
        price: 675,
      },
      {
        name: "Sopapilla",
        price: 599,
      },
      {
        name: "Flan",
        price: 599,
      },
    ],
  },
  {
    label: "Kids Menu",
    id: "kids-menu",
    items: [
      {
        name: "Macaroni and cheese",
        price: 850,
      },
      {
        name: "Chicken tenders",
        price: 850,
      },
      {
        name: "Cheeseburger",
        price: 850,
      },
      {
        name: "Enchilada",
        price: 850,
      },
      {
        name: "Taco",
        price: 850,
      },
      {
        name: "Burrito",
        price: 850,
      },
    ],
  },
];
