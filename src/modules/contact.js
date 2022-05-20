function createContactContent(){
	let main = document.createElement("main");
	
	let contact__container = document.createElement("div");
	contact__container.classList.add("contact-container");
	main.appendChild(contact__container);
	
	let phone_number = document.createElement("div");
	phone_number.classList.add("phone-number");
	phone_number.innerHTML = '<i class="fa-solid fa-phone"></i>123 456 789';
	contact__container.appendChild(phone_number);
	
	let address = document.createElement("div");
	address.classList.add("address");
	address.innerHTML = '<i class="fa-solid fa-house-chimney"></i>Hollywood Boulevard 42, Los Angeles, USA';
	contact__container.appendChild(address);
	
	let address_image_container = document.createElement("div");
	address_image_container.classList.add("address-image-container");
	contact__container.appendChild(address_image_container);
	
	let address_image = document.createElement("img");
	address_image.src = "https://michalosman.github.io/restaurant-page/images/restaurant-location.png"
	address_image.alt = "Address";
	address_image_container.appendChild(address_image);

	return main;
}
export default createContactContent;
// function createContactContent(){
// 	let main = document.createElement("main");
	
// 	let contact__container = document.createElement("div");
// 	main.appendChild(contact__container);
	
// 	let container__p_upper = document.createElement("p");
// 	let container__image = document.createElement("img");
// 	let container__p_lower = document.createElement("p");
	
// 	contact__container.appendChild(container__p_upper);
// 	contact__container.appendChild(container__image);
// 	contact__container.appendChild(container__p_lower);
	
// 	container__p_upper.textContent = `This is a contact page`;
// 	// container__image.src = "../src/niceeee.jpg";
// 	container__p_lower.textContent = "Order online or visit us!";
	
// 	container__image.height = 500;

// 	return main;
// }
// export default createContactContent;