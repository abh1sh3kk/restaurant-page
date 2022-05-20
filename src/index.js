import createFooter from "./modules/footer";
import createHomepageContent from "./modules/homepage.js";
import createContactContent from "./modules/contact.js";
import createMenuContent from "./modules/menu.js";

import "./components/style.scss";
import "./components/contact.scss";
import "./components/menu.scss";
import "./components/homepage.scss";

let content = document.getElementById("content");
console.log("%cHi darling!!", "color: #ffffff; font-size: 2rem;");

function loadWebsite(mainPage = "Home") {
  // clear page
  content.innerHTML = "";

  content.append(createHeader());

  switch (mainPage) {
    case "Home":
      content.append(createHomepageContent());
      break;
    case "Menu":
      content.append(createMenuContent());
      break;
    case "Contact":
      content.append(createContactContent());
      break;
  }
  content.append(createFooter());
}
function createHeader() {
  let header = document.createElement("header");

  let h1__title = document.createElement("h1");
  h1__title.classList.add("title");

  let ul__nav_link = document.createElement("ul");
  ul__nav_link.classList.add("ul__nav");

  header.appendChild(h1__title);
  header.appendChild(ul__nav_link);

  // CREATE

  let li__home = document.createElement("li");
  let li__menu = document.createElement("li");
  let li__contact = document.createElement("li");

  // TEXTCONTENT

  h1__title.textContent = "Mozzafiato";
  li__home.textContent = "Home";
  li__menu.textContent = "Menu";
  li__contact.textContent = "Contact";

  // APPEND

  ul__nav_link.appendChild(li__home);
  ul__nav_link.appendChild(li__menu);
  ul__nav_link.appendChild(li__contact);

  li__home.addEventListener("click", () => {
    loadWebsite("Home");
  });

  li__contact.addEventListener("click", () => {
    loadWebsite("Contact");
  });

  li__menu.addEventListener("click", () => {
    loadWebsite("Menu");
  });

  return header;
}

loadWebsite();
