import drinksMenuImage from "../public/img/drinksMenu.jpg";
import foodMenuImage from "../public/img/foodMenu.jpg";
import dessertMenuImage from "../public/img/dessertMenu.jpg";

export default function Menu() {
    const content = document.getElementById("content");

    // container for the three menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // block for drinks
    const drinksBlock = document.createElement("div");
    drinksBlock.classList.add("menu-block");
    // add attributes to drinks
    const drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Drinks";
    const drinksImage = document.createElement("img");
    drinksImage.src = drinksMenuImage;
    drinksImage.alt = "Image of drinks menu"
    const drinksList = document.createElement('ul');
    drinksList.innerHTML = `
        <li>Coffee - $2.99</li>
        <li>Tea - $1.99</li>
        <li>Wine - $5.99</li>
    `;

    drinksBlock.appendChild(drinksHeading);
    drinksBlock.appendChild(drinksImage);
    drinksBlock.appendChild(drinksList);

    // block for food
    const foodBlock = document.createElement('div');
    foodBlock.classList.add('menu-block');
    const foodHeading = document.createElement('h2');
    foodHeading.textContent = 'Food';
    const foodImage = document.createElement('img');
    foodImage.src = foodMenuImage;
    foodImage.alt = 'Food';
    const foodList = document.createElement('ul');
    foodList.innerHTML = `
        <li>Pizza - $9.99</li>
        <li>Burger - $6.99</li>
        <li>Pasta - $8.99</li>
    `;

    foodBlock.appendChild(foodHeading);
    foodBlock.appendChild(foodImage);
    foodBlock.appendChild(foodList);

    // block for dessert
    const dessertBlock = document.createElement('div');
    dessertBlock.classList.add('menu-block');

    const dessertHeading = document.createElement('h2');
    dessertHeading.textContent = 'Dessert';

    const dessertImage = document.createElement('img');
    dessertImage.src = dessertMenuImage;
    dessertImage.alt = 'Dessert';

    const dessertList = document.createElement('ul');
    dessertList.innerHTML = `
        <li>Ice Cream - $3.99</li>
        <li>Cake - $4.99</li>
        <li>Pie - $3.99</li>
    `;

    dessertBlock.appendChild(dessertHeading);
    dessertBlock.appendChild(dessertImage);
    dessertBlock.appendChild(dessertList);
    

    // Append all blocks to menu container
    menuContainer.appendChild(drinksBlock);
    menuContainer.appendChild(foodBlock);
    menuContainer.appendChild(dessertBlock);

    // Append the menu container to the content div
    content.appendChild(menuContainer);
} 