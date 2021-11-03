
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
	}
	else {
		document.getElementById('sidenav').style.display = 'block'
		document.getElementById('leftAside').style.display = 'block'
	}
})

ChangeDisplayView();
window.addEventListener('resize', ChangeDisplayView);
function ChangeDisplayView() {
	if (document.querySelector('#sidenav').style.display === 'none') {
		document.querySelector('#sidenav').style.display = 'block'
		document.querySelector('#leftAside').style.display = 'block'
	}
}


faker.locale = 'ru';
var listData = []
ListFillArray(15, listData)
CreateElementOption(listData)

function ListFillArray(length, array) {
	for (var i = 0; i < length; i++) {
		array.push({ userId: i + 1, employeeName: faker.name.findName(), projectName: "Проект " + i, timeMinutes: SetRandomNumber(60, 360) })
	}
}
function SetRandomNumber(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
function CreateElementOption(listData) {
	for (var i = 0; i < listData.length; i++) {
		var opt = document.createElement('option')
		opt.innerHTML = listData[i].employeeName
		document.getElementById('names-employees').appendChild(opt)
	}
}

function SendReport() {
	document.getElementById('box-table').innerHTML = '' 
	var employeeName = document.getElementById('names-employees').value
	document.getElementById('head-name').innerHTML = employeeName
	var totalTime = 0
	for (var i = 0; i < listData.length; i++) {
		if (listData[i].employeeName === employeeName) {

			var boxLine = document.createElement('div')
			boxLine.setAttribute('class', 'line-table-worker')

			var blockWorker = document.createElement('div')
			blockWorker.setAttribute('class', 'name-worker')
			blockWorker.innerHTML = listData[i].projectName

			var blockTime = document.createElement('div')
			blockTime.setAttribute('class', 'time-wasted')
			blockTime.innerHTML = listData[i].timeMinutes

			boxLine.appendChild(blockWorker)
			boxLine.appendChild(blockTime)
			document.getElementById('box-table').appendChild(boxLine)
			totalTime += listData[i].timeMinutes
		}
	}
	document.getElementById('total-time').innerHTML = totalTime
}

