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
  localStorage.setItem('rate', this.innerHTML)
}
window.addEventListener("load", function() {
  localStorage.removeItem("rate");
});
document.getElementById('rating').innerHTML = `You selected ${localStorage.getItem("rate")} out of 5`
// function toAnother() {
//   window.location.href = "rate.html";
// }

function toAnother() {
  if (localStorage.getItem("rate")) {
    window.location.href = "rate.html";
  } else {
    alert("Please select a rating before submitting.");
  }
}
