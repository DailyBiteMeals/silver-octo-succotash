import StandardChiken from "../../assets/Meals/StandardChikenMeal.png";

// Categories imports
import PrivilegeCategory from "../../assets/Home-products/Privilege-meal.png";
import DailySnacksCategory from "../../assets/Home-products/on-demand-snacks.png";
import HealthySnacks from "../../assets/Home-products/fruit-bowl-dry-fruits.png";
import CateringCategory from "../../assets/Home-products/catering-service.png";

import PrivillegeVegMeal from "../../assets/Meals/PrivilegeVegMeal.jpg";
import PrivillegeNonVegMeal from "../../assets/Meals/PrivilegeChikenMeal.jpg";
import PrivilegeEggMeal from "../../assets/Meals/PrivilegeEggMeal.jpg";
import StandardVegMeal from "../../assets/Meals/StanadrdVegMeal.jpg";
import StandardNonVegMeal from "../../assets/Meals/StandardChikenMeal.jpg";
import StandardEggMeal from "../../assets/Meals/StandardEggMeal.jpg";

export const initialProducts = [
  {
    id: 1,
    title: "Privilege Veg Meal",
    includes:
      "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad + Sweet + Curd + Papad/ Pickle/New Addon",
    description:
      "Experience a variety of gravy dishes, dry dishes and rice every single day. Designed to provide all required nutritional values. It includes nine items - Dal, Rice, Roti, Dry Subji, Gravy Subji, Salad, Curd, Sweet, and either Pickle or Papad, giving you the perfect veg meal experience.",
    image: PrivillegeVegMeal,
    images: [PrivillegeVegMeal, StandardChiken],
    category: "Daily Meals",
  },
  {
    id: 2,
    title: "Privilege Chicken Meal",
    includes:
      "Rice + Dal + 2 Roti + Chicken Curry + Dry Sabji + Salad + Sweet + Curd + Papad/ Pickle/New Addon",
    description:
      "Experience a variety of chicken dishes including Chicken Curry, Chicken Hydrabadi, Butter Chicken, Kadai Chicken and more.  It includes nine items - Dal, Rice, Roti, Dry Subji, Chicken Dish, Salad, Curd, Sweet, and either Pickle or Papad, giving you the perfect chicken meal experience.",
    image: PrivillegeNonVegMeal,
    images: [PrivillegeNonVegMeal, StandardChiken],
    category: "Daily Meals",
  },
  {
    id: 3,
    title: "Privilege Egg Meal",
    includes:
      "Rice + Dal + 2 Roti + Egg Curry + Dry Sabji + Salad Sweet + Curd + Papad/ Pickle/New Addon",
    description:
      "Experience a variety of egg dishes including Egg Curry, Egg Bhurji, Mughlai Egg, Kolhapuri Anda Curry, Egg Omlet and more. It includes nine items - Dal, Rice, Roti, Dry Subji, Egg Dish, Salad, Curd, Sweet, and either Pickle or Papad, giving you the perfect egg meal experience.",
    image: PrivilegeEggMeal,
    images: [PrivilegeEggMeal, StandardChiken],
    category: "Daily Meals",
  },
  {
    id: 4,
    title: "Standard Veg Meal",
    includes: "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad",
    description:
      "Experience a variety of gravy dishes, dry dishes and rice every single day. It includes six items - Dal, Rice, Roti, Dry Subji, Gravy Subji, and Salad, giving you a satisfying veg meal experience.",
    image: StandardVegMeal,
    images: [StandardVegMeal, StandardChiken],
    category: "Daily Meals",
  },
  {
    id: 5,
    title: "Standard Chicken Meal",
    includes: "Rice + Dal + 2 Roti + Chicken Curry + Dry Sabji + Salad",
    description:
      "Experience a variety of chicken dishes including Chicken Curry, Chicken Hyderabadi, Mughlai Chicken, Butter Chicken, Kadai Chicken and more. It includes six items - Dal, Rice, Roti, Dry Subji, Chicken Dish, and Salad, giving you a satisfying chicken meal experience.",
    image: StandardNonVegMeal,
    images: [StandardNonVegMeal, StandardChiken],
    category: "Daily Meals",
  },
  {
    id: 6,
    title: "Standard Egg Meal",
    includes: "Rice + Dal + 2 Roti + Egg Curry + Dry Sabji + Salad",
    description:
      "Experience a variety of egg dishes including Egg Curry, Egg Bhurji, Mughlai Egg, Kolhapuri Anda Curry, Egg Omlet and more. It includes six items - Dal, Rice, Roti, Dry Subji, Egg Dish, and Salad, giving you a satisfying egg meal experience.Experience a variety of egg dishes including Egg Curry, Egg Bhurji, Mughlai Egg, Kolhapuri Anda Curry, Egg Omlet and more. It includes six items - Dal, Rice, Roti, Dry Subji, Egg Dish, and Salad, giving you a satisfying egg meal experience.",
    image: StandardEggMeal,
    images: [StandardEggMeal, StandardChiken],
    category: "Daily Meals",
  },
  {
    id: 7,
    title: "Burger",
    includes: "includes",
    description:
      "Our burger is the perfect combinations of veg or non-veg patties, tomatoes, onion, other veggies, mayoneise, cheese and our secret special sauces, all nestled within a soft and toasted bun.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 8,
    title: "Samosa",
    includes: "includes",
    description:
      "Taste the perfect crunch of our golden samosas, filled with a spiced mixture of potatoes, peas, and desi spices, stuffed in wheat dough mixed with jeera.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 9,
    title: "Sandwich",
    includes: "includes",
    description:
      "Uplift your snack time with our sandwiches, filled with fresh ingredients like tomatoes, onion, other veggies, veg or nonveg creamy spreads, mayo and other secret ingredients, all between slices of soft roasted bread.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 10,
    title: "Kachori",
    includes: "includes",
    description:
      "Taste the crispy kachoris with the perfect filling of moong dal, mixture of traditional spices, peas, chillies, courinder. Served with red and green chutney, and fried salted chilli.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 11,
    title: "Egg Puff",
    includes: "includes",
    description:
      "Experience the perfection of our egg puffs, baked to golden brown and filled with a heavenly mix of eggs, onions, and traditional spices. Served with tomato sauce.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 12,
    title: "Veg Puff",
    includes: "includes",
    description:
      "Taste the crispy layers of our veg puffs, made from perfect combination of fresh vegetables, traditional spices and more. Served with tomato sauce.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 13,
    title: "Chips",
    includes: "includes",
    description:
      "Explore the variety of popato and banana chips from classic salted, chilli onion, to salt and pepper. On-demand flavours can be served.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 14,
    title: "Cookies",
    includes: "includes",
    description:
      "Explore the variety of cookies in both packaged and packaged stock, which includes chocolate cookies, dry fruits cookies, peanut butter cookies, salted and namkeen cookies and more.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 15,
    title: "Sponge Cakes",
    includes: "includes",
    description:
      "Providing variety of cakes includes Banan cake, Chocolate Cake, Mix Fruit Cake, Swiss Roll and many more. On-demand cake flavours variety can be served.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },
  {
    id: 16,
    title: "Hot Chips and Namkeen",
    includes: "includes",
    description:
      "We have variety of items in hot chips and namkeen segment. It includes different varieties in Cookies, Banana and Potato Chips, Bhakarwadi, Mixtures, Nippat, Murakku, and other namkeens. On-demand namkeen variety can be provided.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Daily Snacks",
  },

  {
    id: 17,
    title: "Standard Fruit Bowl",
    includes: "includes",
    description:
      "It's our most popular and healthy snack option, providing a perfect dose of Natural Sweetness, Fibre, Vitamins, and immune-boosting Antioxidants Overflowing with seasonal fruits like Apple, Orange, Banana, Grape, Pineapple, Papaya, Watermelon and Mango.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Healthy Snacks",
  },
  {
    id: 18,
    title: "Premium Fruit Bowl",
    includes: "includes",
    description:
      "It's our perfect healthy snack option, providing a perfect dose of Natural Sweetness, Fibre, Vitamins, and immune-boosting Antioxidants Overflowing with premium fruits like Kiwi, Strawberry, Sapota, Pomegranate, Apple, Orange, Banana, Grape, Pineapple, Dry Fruits and Honey",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Healthy Snacks",
  },
  {
    id: 19,
    title: "Dry Fruits Pouch",
    includes: "includes",
    description:
      "It is the most premium product in our category, containing Almonds, Cashews, Raisins, BlackBerries, Dry Kiwi, Dry Dates, Walnuts, Pistachios and more in a pouch.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Healthy Snacks",
  },
  {
    id: 20,
    title: "Corporate Events Catering",
    includes: "includes",
    description:
      "Uplift your event's catering experience with customizable and on-demand food cuisines. We have a variety of options ranging in starters, bread, rice, curries, dessert, drinks, papad and much more. From board meetings, festival feasts, and team outings, to grand conferences, our catering solutions are the perfect fit to match the unique preferences of your events.",
    image: StandardChiken,
    images: [StandardChiken, StandardChiken],
    category: "Corporate Events Catering",
  },

  // Add more products here...
];

export const categoriesWithDescription = [
  {
    name: "Daily Meals",
    description:
      "Privilege Meals stands out as the top choice from our corporate customers, offering the ultimate in preference and suitability. It remains the most popular selection in our range, giving a perfect Indian meal experience. It includes nine items - Dal, Rice, Roti, Dry Subji, Gravy Subji, Salad, Curd, Sweet, and either Pickle or Papad, ensuring a truly satisfying dining experience for employees.",
    color: "#F22252",
    imageUrl: PrivilegeCategory,
  },
  {
    name: "Daily Snacks",
    description:
      "Standard Meals are the most preferred choice for those seeking a budget-friendly yet immensely satisfying and healthy lunch experience. These meals offer a variety of options, and give the experience of a unique box every single day.  Each standard meal includes six items: Dal, Rice, Roti, Dry Subji, Gravy Subji, and Salad, delivering the perfect meal experience to your employees.",
    color: "#BF6541",
    imageUrl: DailySnacksCategory,
  },
  {
    name: "Healthy Snacks",
    description:
      "We offer a diverse range of snack options, like burgers, samosa cookies, chips, and more. We keep a special eye on making it healthy and tasty. Best suitable for corporate events and daily evening snack times.",
    color: "#86ED59",
    imageUrl: HealthySnacks,
  },
  {
    name: "Corporate Events Catering",
    description:
      "Uplift your event's catering experience with customizable and on-demand food cuisines. We have a variety of options ranging in starters, bread, rice, curries, dessert, drinks, papad and much more. From board meetings, festival feasts, and team outings, to grand conferences, our catering solutions are the perfect fit to match the unique preferences of your events.",
    color: "#F2A322",
    imageUrl: CateringCategory,
  },

  // Add more categories with descriptions here...
];
