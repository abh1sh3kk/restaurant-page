function createFooter() {
	let footer = document.createElement("footer");
	footer.textContent = `Copyright © ${new Date().getFullYear()} Abhishek`;
	return footer;
}
export default createFooter;
