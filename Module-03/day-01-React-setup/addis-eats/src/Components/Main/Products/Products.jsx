import React from 'react'
import './Products.css'
import Dish from './Dish/Dish';

const menu = [
  {
    id: 1,
    name: "Doro Wat",
    category: "Main",
    price: 240,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common dishes in Ethiopia with all the important ingridients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 2,
    name: "Shiro",
    category: "Vegetarian",
    price: 120,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common vegetarian dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 3,
    name: "Kitfo",
    category: "Main",
    price: 320,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common main dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 4,
    name: "Tibs",
    category: "Main",
    price: 280,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common main dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 5,
    name: "Injera Firfir",
    category: "Breakfast",
    price: 100,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common breakfast dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 6,
    name: "Beyaynetu",
    category: "Vegetarian",
    price: 150,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common vegetarian dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 7,
    name: "Misir Wat",
    category: "Vegetarian",
    price: 110,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common vegetarian dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 8,
    name: "Gomen",
    category: "Vegetarian",
    price: 90,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common vegetarian dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 9,
    name: "Atkilt Wot",
    category: "Vegetarian",
    price: 100,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common vegetarian dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 10,
    name: "Derek Tibs",
    category: "Main",
    price: 310,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common main dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 11,
    name: "Key Wat",
    category: "Main",
    price: 220,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common main dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 12,
    name: "Alicha Wat",
    category: "Main",
    price: 210,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common main dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 13,
    name: "Bozena Shiro",
    category: "Main",
    price: 180,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common main dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 14,
    name: "Ayibe",
    category: "Side",
    price: 70,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common side dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 15,
    name: "Kocho",
    category: "Side",
    price: 60,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common side dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
  {
    id: 16,
    name: "Enkulal Firfir",
    category: "Breakfast",
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    price: 110,
    description:
      "This dish is one of the most common side dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 17,
    name: "Fuul",
    category: "Breakfast",
    price: 90,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common breakfast dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 18,
    name: "Genfo",
    category: "Breakfast",
    price: 130,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common breakfast dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 19,
    name: "Chechebsa",
    category: "Breakfast",
    price: 120,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common breakfast dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: true,
  },
  {
    id: 20,
    name: "Kik Alicha",
    category: "Vegetarian",
    price: 100,
    img: "/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png",
    description:
      "This dish is one of the most common vegetarian dishes in Ethiopia with all the important ingredients. Enjoy your meal!",
    spicy: false,
  },
];


function Products() {
    return (
      <>
        <div className="products">
          {menu.map((dish) => 
            <Dish name={dish.name} price={dish.price}  img={dish.img}/>
          )}
          
        </div>
      </>
    );
}

export default Products