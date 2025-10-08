// Updates Copyright Footer
//Connects footer to code
const year = document.querySelector(
	'#current-year'
);
//Pulls new year to update footer
year.innerHTML = new Date().getFullYear();
