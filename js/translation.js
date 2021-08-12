let englishButton = document.getElementsByClassName("english");
let spanishButton = document.getElementsByClassName("spanish");
let currentLanguage;
let htmlFileName = window.location.pathname;
let currentPage = htmlFileName.split("/").pop();

// REMEMBER LANGUAGE CHANGING PAGE
if (localStorage.getItem("language")) {
	currentLanguage = localStorage.getItem("language");
	console.log(currentLanguage);
}

englishButton.forEach(element => {
	element.addEventListener("click", () => {
		localStorage.setItem("language", "es");
		console.log(currentPage);
	});
});
