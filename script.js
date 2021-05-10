const menu = [{
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 14.99,
    img: "./images/item-1.jpeg",
    desc: `Buttermilk pankcakes with any topping of your choice `,
}, {
    id: 2,
    title: "Belgian Waffles",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-2.jpeg",
    desc: `Belgian waffles with any topping of your choice `,
}, {
    id: 3,
    title: "Chicken Alfredo",
    category: "dinner",
    price: 24.99,
    img: "./images/item-3.jpeg",
    desc: `Chicken Alfredo made with our signature creamy alfredo sauce.`,
}, {
    id: 4,
    title: "Breakfast Platter",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Our breakfast platter consists of sausages, toast, tomatoes, eggs and potatoes `,
}, {
    id: 5,
    title: "Fish and Chips",
    category: "lunch",
    price: 12.99,
    img: "./images/item-5.jpeg",
    desc: `Cod fish dipped in our country style batter and a side of seasoned fries `,
}, {
    id: 6,
    title: "Steak and Shrimp",
    category: "dinner",
    price: 32.99,
    img: "./images/item-6.jpeg",
    desc: `Both the steak and shrimp are stauteed in our signature garlic and butter sauce`,
}, {
    id: 7,
    title: "Lobster Risotto",
    category: "dinner",
    price: 32.99,
    img: "./images/item-7.jpeg",
    desc: `Fresly caught Maine lobster is used to make our popular dish. `,
}, {
    id: 8,
    title: "Philly Cheeseteak Sandwich",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Can choose which cheese you want `,
}, {
    id: 9,
    title: "Orange Creamsicle Smoothie",
    category: "beverages",
    price: 7.99,
    img: "./images/item-9.jpeg",
    desc: `dairy free is optional`,
}, {
    id: 10,
    title: "Shirley Temple",
    category: "beverages",
    price: 4.99,
    img: "./images/item-10.jpeg",
    desc: `Sprite or 7up mixed with cherry or strawberry syrup topped with a maraschino cherry`,
}, {
    id: 11,
    title: "Sweet Tea",
    category: "beverages",
    price: 5.49,
    img: "./images/item-11.jpeg",
    desc: `Can have unsweetened also`,
}, {
    id: 12,
    title: "Beef Sliders",
    category: "lunch",
    price: 7.99,
    img: "./images/item-12.jpeg",
    desc: `Beef and french onion sliders`,
}, ];

const sectionCenter = document.querySelector('.section-center'); //parent
const btnContainer = document.querySelector('.btn-container');



//loading items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    const categories = menu.reduce((values, item) => {
        // console.log(values)
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    // console.log(categories);
    const categoryBtns = categories.map((category) => {
            return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
        })
        .join('');
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    //filtering items
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            // console.log(e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const menuCategories = menu.filter((menuItem) => {
                // console.log(menuItem.category)
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategories);
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategories);
            }
        });
    });
});


let displayMenuItems = (menuItems) => {
    //item = each menu item
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
    </div>
</article>`;
    })
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
    // console.log(displayMenu);
}