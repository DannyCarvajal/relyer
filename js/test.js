let startTest = document.getElementsByClassName("button__startest")[0];
startTest.addEventListener("click", () => {
	if (logged === false) {
		printMessage("#FFE1DE", "#F47174", `Login to do test`, "error");
	} else {
		window.location.href = "./testquestions.html";
	}
});
