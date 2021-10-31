var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}

DisplayAllNone()
document.getElementById('home').style.display = 'block'

function Show(id, text) {
	DisplayAllNone()
	document.getElementById(id).style.display = 'block'
	document.getElementById('text-header').innerHTML = text
}

function DisplayAllNone() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('reportproject').style.display = 'none'
	document.getElementById('reportworker').style.display = 'none'
}