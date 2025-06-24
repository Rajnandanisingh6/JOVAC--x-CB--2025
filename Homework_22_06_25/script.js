// homework 1 --> Build business logic, object of data=20(use map,filter,and reduce)
<!DOCTYPE html>
<html>
<head>
  <title>Homework 1: Map, Filter, Reduce</title>
</head>
<body>

  <h1> Build business logic(Using map, filter, reduce)</h1>
  <p><strong>Initial Balance:</strong> ₹50,000</p>
  <div id="output"></div>

  <script>
    // 20 products
    const products = [
      { name: "Laptop", price: 40000, inStock: true },
      { name: "Phone", price: 25000, inStock: false },
      { name: "Mouse", price: 800, inStock: true },
      { name: "Keyboard", price: 1500, inStock: true },
      { name: "Shoes", price: 2000, inStock: false },
      { name: "Bag", price: 1000, inStock: true },
      { name: "T-shirt", price: 500, inStock: true },
      { name: "Watch", price: 3000, inStock: false },
      { name: "Socks", price: 150, inStock: true },
      { name: "Bottle", price: 400, inStock: true },
      { name: "Notebook", price: 100, inStock: true },
      { name: "Pen", price: 50, inStock: true },
      { name: "Table", price: 5000, inStock: false },
      { name: "Chair", price: 3000, inStock: true },
      { name: "Lamp", price: 1200, inStock: true },
      { name: "Fan", price: 2200, inStock: false },
      { name: "Book", price: 300, inStock: true },
      { name: "Towel", price: 250, inStock: true },
      { name: "Charger", price: 700, inStock: true },
      { name: "Glasses", price: 1200, inStock: true }
    ];

    //  Using map to add 10% discount to each product
    const discountedProducts = products.map(function(product) {
      return {
        name: product.name,
        originalPrice: product.price,
        discountedPrice: product.price - (product.price * 0.1),
        inStock: product.inStock
      };
    });

    //  Using filter to get only products that are in stock
    const availableProducts = discountedProducts.filter(function(product) {
      return product.inStock === true;
    });

    // Use reduce to calculate total cost of in-stock discounted products
    const totalCost = availableProducts.reduce(function(total, product) {
      return total + product.discountedPrice;
    }, 0);

    // Results show on the screen
    let result = "<h2> Products You Can Buy (In Stock)</h2><ul>";
  // this line show each product name and price in list
    availableProducts.forEach(function(product) {
      result += "<li>" + product.name + " - ₹" + product.discountedPrice.toFixed(2) + "</li>";
    });
    result += "</ul>";
  // this lines show total cost given below

    result += "<p><strong>Total Cost:</strong> ₹" + totalCost.toFixed(2) + "</p>";
 // this line show remaining balance after purchase from Rs- 50000
    result += "<p><strong>Remaining Balance:</strong> ₹" + (50000 - totalCost).toFixed(2) + "</p>";

// this line show all result inside the output 
/* HTML me us element ko dhudna hai  jiska id ‘output’ hai,
   usme result ka data daal diya hai usme JS me banaya hai.
*/
    document.getElementById("output").innerHTML = result;
  </script>

</body>
</html>
