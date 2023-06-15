var items = document.getElementsByTagName('a');
Array.from(items).forEach(clickFunction);

function clickFunction(item) {
  item.addEventListener("click", myFunction);
  clickFunction()=true
}


function myFunction(event) {
  event.preventDefault();

  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = ""; // Reset background color for all items
  }

  this.style.backgroundColor = "rgb(146, 152, 166)"; // Set background color for the clicked item
  localStorage.setItem('rate', this.innerHTML)
}


document.getElementById('rating').innerHTML =`You selected ${localStorage.getItem("rate")} out of 5`;
localStorage.getItem("rate")=true


function toAnother() {
  if (localStorage.getItem("rate")) {
    window.location.href = "rate.html";
  } else {
    alert("Please select a rating before submitting.");}}