function createCard(){
	let card = document.createElement("div");
	card.classList.add("card");
	
	let pizza = document.createElement("div");
	pizza.classList.add("pizza");
	card.appendChild(pizza);
	
	let pizza_image = document.createElement("img");
	pizza_image.src = "https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png";
	pizza_image.alt = "Pizza";
	pizza.appendChild(pizza_image);
	
	let pizza_title = document.createElement("div");
	pizza_title.classList.add("pizza-title");	
	pizza_title.textContent = "Salsiccia";
	card.appendChild(pizza_title);
	
	let pizza_text = document.createElement("div");
	pizza_text.classList.add("pizza-text");
	pizza_text.textContent = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
	card.appendChild(pizza_text);

	return card;

}

function createMenuContent() {
	let main = document.createElement("main");
	
	let menu__container = document.createElement("div");
	menu__container.classList.add("menu-container");
	main.appendChild(menu__container);
	
	for(let i=1; i <= 8; i++) {
		menu__container.appendChild(createCard());
	}

	return main;
}

export default createMenuContent;
	// let main__container = document.createElement("div");
	// main.appendChild(main__container);
	
	// let container__p_upper = document.createElement("p");
	// let container__image = document.createElement("img");
	// let container__p_lower = document.createElement("p");
	
	// main__container.appendChild(container__p_upper);
	// main__container.appendChild(container__image);
	// main__container.appendChild(container__p_lower);
	
	
	// container__p_upper.textContent = `This is a menu page`;
	// // container__image.src = "../src/niceeee.jpg";
	// container__p_lower.textContent = "Order online or visit us!";
	
	// container__image.height = 500;