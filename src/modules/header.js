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
export default createHeader;
