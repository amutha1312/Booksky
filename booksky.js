var container = document.querySelector(".container")
var bookName = document.querySelector(".bookName")
var authorName = document.querySelector(".authorName")
var description = document.querySelector(".description")
var bookinput = document.querySelector(".bookinput")
var authorinput = document.querySelector(".authorinput")
var descriptioninput = document.querySelector(".descriptioninput")
var backgroundWindow = document.querySelector(".backgroundWindow")
var popup = document.querySelector(".popup")
function addData() {
    backgroundWindow.style.display = "block";
    popup.style.display = "block";
}
function addInfo() {
    var div = document.createElement("div")
    div.setAttribute("class", "bookContainer")
    div.innerHTML = `<h2 class="bookName">${bookinput.value}</h2>
            <h4 class="authorName">${authorinput.value}</h4>
            <p  class="description">${descriptioninput.value}</p>
            <button class="deleteBtn" onclick="deleteBook(event)">Delete</button>`
    container.append(div)
}

function cancel() {
    backgroundWindow.style.display = "none";
    popup.style.display = "none";
}
var deleteBtn = document.querySelector(".deleteBtn")

function deleteBook(event) {
    event.target.parentElement.remove()
}
