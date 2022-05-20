function createHomepageContent() {
	let main = document.createElement("main");
	
	let main__container = document.createElement("div");
	main__container.classList.add("container");
	main.appendChild(main__container);
	
	let container__p_upper = document.createElement("p");
	container__p_upper.innerHTML = `Best Pizza in your country <br>
	Made with passion since 1908`;
	container__p_upper.classList.add("upper");
	main__container.appendChild(container__p_upper);

	
	
	let container__image_container = document.createElement("div");
	container__image_container.classList.add("image-container");
	main__container.appendChild(container__image_container);
	
	
	let container__image = document.createElement("img");
	container__image.src = "https://images.unsplash.com/photo-1583394293214-28ded15ee548?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780";
	container__image.alt = "Image of a chef";
	container__image_container.appendChild(container__image);
	
	
	let container__p_lower = document.createElement("p");
	container__p_lower.textContent = "Order online or visit us!";
	container__p_lower.classList.add("lower");
	main__container.appendChild(container__p_lower);

  
  return main;
}
export default createHomepageContent;