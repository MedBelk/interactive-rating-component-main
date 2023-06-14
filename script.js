var items = document.getElementsByTagName('a');
Array.from(items).forEach(clickFunction);

function clickFunction(item) {
  item.addEventListener("click", myFunction);
}

function myFunction(event) {
  event.preventDefault();

  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = ""; // Reset background color for all items
  }

  this.style.backgroundColor = "rgb(146, 152, 166)"; // Set background color for the clicked item
}
