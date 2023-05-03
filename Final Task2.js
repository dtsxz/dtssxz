// Define global variables
var productCount = 0;
var shippingFee = 4.99;
var taxRate = 0.1;

// Define helper functions
function calculateSubtotal() {
  return productCount * 15.97; // Assuming each basketball product costs $15.97
}

function calculateTax(subtotal) {
  return subtotal * taxRate;
}

function calculateTotal() {
  var subtotal = calculateSubtotal();
  var tax = calculateTax(subtotal);
  var total = subtotal + shippingFee + tax;

  // Update the summary table with calculated values
  document.getElementById("items_summary").textContent = productCount;
  document.getElementById("shipping_summary").textContent = "$" + shippingFee.toFixed(2);
  document.getElementById("totalbefore_tax").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("est_tax").textContent = "$" + tax.toFixed(2);
  document.getElementById("total_order").textContent = "$" + total.toFixed(2);
}

function increment() {
  productCount++;
  document.getElementById("production").value = productCount;
}

function decrement() {
  if (productCount > 0) {
    productCount--;
    document.getElementById("production").value = productCount;
  }
}

// Attach event listeners
document.getElementById("production").addEventListener("input", function(event) {
  productCount = parseInt(event.target.value);
});

document.getElementById("fee").addEventListener("input", function(event) {
  shippingFee = parseFloat(event.target.value);
});

document.getElementById("calculate_btn").addEventListener("click", calculateTotal);
document.getElementById("increment_btn").addEventListener("click", increment);
document.getElementById("decrement_btn").addEventListener("click", decrement);