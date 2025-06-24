// Homework 2 - Build E-commerce platform (use callback and promises separately)
<!DOCTYPE html>
<html>
<head>
  <title>E-commerce with Callback</title>
</head>
<body>
  <h2>️ E-commerce Using Callback</h2>
  <div id="output"></div>  <!-- Div to show result on screen -->

  <script>
    const output = document.getElementById("output"); // Getting the output div

    let balance = 15000; // Initial user balance
    let cart = []; // Cart to store added products

    // Sample product object
    const product = { name: "Phone", price: 10000 };

    // Function: addToCart
    // Purpose: Adds product to cart and then calls a callback function
    function addToCart(product, callback) {
      cart.push(product); // Adding product to cart array
      output.innerHTML += ` Added ${product.name} - ₹${product.price}<br>`; // Show added product
      callback(); // Call the next function after adding
    }

    // Function: buyProduct
    // Purpose: Calculates total and checks balance
    function buyProduct() {
      const total = cart.reduce((sum, item) => sum + item.price, 0); // Calculate total price of items in cart

      if (balance >= total) {
        balance -= total; // Deduct total from balance
        output.innerHTML += `purchase Successful!<br>`; // Show success message
        output.innerHTML += `Remaining Balance: ₹${balance}<br>`; // Show remaining balance
      } else {
        output.innerHTML += `Not enough balance.<br>`; // Show error
      }
    }

    // Start flow: Add product then buy (callback used here)
    addToCart(product, buyProduct);
  </script>
</body>
</html>



----------------------------------------------------------------------------------------------------------------------------
  // E-commerce using Promise

  
  <!DOCTYPE html>
<html>
<head>
  <title>E-commerce with Promise</title>
</head>
<body>
  <h2> E-commerce Using Promise</h2>
  <div id="result"></div> <!-- Div to show output -->

  <script>
    const result = document.getElementById("result"); // Getting result div

    let balance = 20000; // Initial balance
    let cart = []; // Cart to hold selected product

    // Sample product
    const product = { name: "Watch", price: 3000 };

    // Function: addToCart
    // Returns a Promise
    function addToCart(product) {
      return new Promise((resolve) => {
        cart.push(product); // Add to cart
        result.innerHTML += ` Added ${product.name} - ₹${product.price}<br>`; // Show added item
        resolve(); // Move to next step
      });
    }

    // Function: buyProduct
    // Returns a Promise that resolves if purchase is successful, rejects if not
    function buyProduct() {
      return new Promise((resolve, reject) => {
        const total = cart.reduce((sum, item) => sum + item.price, 0); // Calculate total

        if (balance >= total) {
          balance -= total; // Deduct from balance
          resolve(`purchased successfully! Remaining ₹${balance}`); // Resolve with message
        } else {
          reject("Not enough balance."); // Reject with error
        }
      });
    }

    // Flow: Add product → Buy product
    addToCart(product)
      .then(() => buyProduct()) // After adding, try to buy
      .then(msg => result.innerHTML += msg + "<br>") // Show success message
      .catch(err => result.innerHTML += err + "<br>"); // Show error if not enough balance
  </script>
</body>
</html>


  
