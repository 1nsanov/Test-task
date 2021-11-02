var dropdown = document.getElementsByClassName("dropdown-btn");
var dropdownContainer = document.getElementsByClassName("dropdown-container")
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var nextDropdownContent = this.nextElementSibling;
		if (nextDropdownContent.style.display === "block") {
			nextDropdownContent.style.display = "none";
		} else {
			for (i = 0; i < dropdownContainer.length; i++) {
				if (dropdownContainer[i].style.display === "block") {
					dropdownContainer[i].style.display = "none"
					dropdown[i].classList.remove("active")
				}
			}
			nextDropdownContent.style.display = "block";
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


document.getElementById('nav-btn').addEventListener('click', function () {
	if (document.getElementById('sidenav').style.display === 'block') {
		document.getElementById('sidenav').style.display = 'none'
		document.getElementById('leftAside').style.display = 'none'
		console.log(0)
	}
	else {
		document.getElementById('sidenav').style.display = 'block'
		document.getElementById('leftAside').style.display = 'block'
		console.log(1)
	}
})
