var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.setAttribute("class", "open")
	li.setAttribute("onclick", "strikeTrough(this)");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("BUTTON");
	btn.setAttribute("onclick", "return this.parentNode.remove()");
	btn.innerHTML = "X";
  	li.appendChild(btn);
}


function strikeTrough(div) {
  var className = div.getAttribute("class");
  if(className=="open") {
    div.className = "open done";
  }
  else{
    div.className = "open";
  }
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);