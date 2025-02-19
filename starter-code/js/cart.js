/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var table = document.getElementById('cart');
  var tableRows = table.getElementsByTagName('tr');
  var rowCount = tableRows.length;

  for (var x=rowCount-1; x>0; x--) {
    table.removeChild(tableRows[x]);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var table = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    var tr = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    var deleteLinkEl = document.createElement('td');
    var a = document.createElement('a');
    a.textContent = 'X';
    a.href = '#';
    deleteLinkEl.appendChild(a);

    var quantityEl = document.createElement('td');
    quantityEl.textContent = cart.items[i].quantity;

    var itemEl = document.createElement('td');
    itemEl.textContent = cart.items[0].product;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(deleteLinkEl);
    tr.appendChild(quantityEl);
    tr.appendChild(itemEl);

    table.appendChild(tr);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var selectedItem = event.target;
  var id = selectedItem.id;
  cart.removeItem(id);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  // TODO: Re-draw the cart table
  clearCart();
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
