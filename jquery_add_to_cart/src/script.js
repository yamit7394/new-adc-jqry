$(document).ready(function () {
  var products = [
    { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
    { id: 102, name: "Football", image: "football.png", price: 120 },
    { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
    { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
    { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
  ];
  var cart = [];
  var subtotal = 0;
  
  $.fn.addProductCard = function (parent_div, product) {
    let id = product.id;
    let name = product.name;
    let img = product.image;
    let price = product.price;
    parent_div.append("<div id='product-" + id + "' class='product'></div>");
    product_div = $("#product-" + id);
    product_div.append("<img src='images/" + img + "'>");
    product_div.append("<h3 class='title'><a href='#'>" + name + "</a></h3>");
    product_div.append("<span>Price: $" + price + "</span>");
    product_div.append(
      "<a class='add-to-cart' href='#' data-id='" + id + "'>Add To Cart</a>"
    );
  };
  
  $.fn.loadCart = function () {
    var Wrapperdiv = $("#main");

   
    Wrapperdiv.append(
      "<input type='button' value='Delete Cart' id='deleteCart'>"
    );
    Wrapperdiv.append(
      '<div id="product_list"><table id="product-table"></table></div>'
    );
    let table = $("#product-table");
    table.append(
      "<tr>" +
        "<th>Product</th>" +
        "<th>Product Name</th>" +
        "<th>Product Price</th>" +
        "<th>Quantity</th>" +
        "<th>Action</th>" +
        "</tr>"
    );
  };
  
  $.fn.updateCart = function () {
    subtotal = 0;
    let table = $("#product-table");
    table.children("tr:not(:first)").remove();
    for (let i = 0; i < cart.length; i++) {
      var current_product = cart[i];
      var index = $.fn.findProductIndex(cart[i].id);
      subtotal += products[index].price * current_product.quantity;

      table.append(
        "<tr class='cart'><td>" +
          "<img class='height' src='images/" +
          products[index].image +
          "'>" +
         +
          "</td>" +
          "<td>" +
          products[index].name +
          "</td> " +
          "<td>" +
          products[index].price * current_product.quantity +
          "</td>" +
          "<td>" +
          current_product.quantity +
          "</td>" +
          "<td id='actionTd' data-id='" +
          current_product.id +
          "'><a href='#' data-value='increase' id='increaseQuantity'>+</a>" +
          "<input class='manual-update-quantity' value=" +
          current_product.quantity +
          ">" +
          "<a href='#' data-value='decrease' id='decreaseQuantity'>-</a>" +
          "<input type='button' value='UPDATE' id='update'>" +
          "</td></tr>"
      );
    }
    

    $("#subtotal")
      .empty()
      .append("<p id='subtotal'>Your subtotal is $" + subtotal + "</p>");
  };

  
  $.fn.loadBasicHtml = function () {
    var main_div = $("#main");
    main_div.append("<div id='products'></div>");
    let product_div = $("#products");
    
    for (let i = 0; i < products.length; i++) {
      product_div.append($.fn.addProductCard(product_div, products[i]));
    }

    
    $.fn.loadCart();
    main_div.append("<div id='subtotal'></div>");
  };
  
  $.fn.findProductIndex = function (product_id) {
    for (var i = 0; i < products.length; i++) {
      if (product_id == products[i].id) {
        return i;
      }
    }
    return -1;
  };
  
  $("body").on("click", ".add-to-cart", function () {
    let pid = $(this).data("id");
    let bool = true;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id == pid) {
        cart[i].quantity += 1;
        bool = false;
        break;
      }
    }
    if (bool) {
      cart.push({ id: pid, quantity: 1 });
    }
    $.fn.updateCart();
  });
  
  $("body").on("click", "#increaseQuantity ,#decreaseQuantity", function () {
    let action = $(this).data("value");
    let pid = $(this).parent().data("id");
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id == pid) {
        break;
      }
    }

    if (action == "increase") {
      cart[i].quantity += 1;
    } else {
      cart[i].quantity -= 1;

      if (cart[i].quantity < 1) {
        cart.splice(i, 1);
      }
    }

    $.fn.updateCart();
  });
  
  $("body").on("click", "#deleteCart", function () {
    console.log("clicked delete");
    cart = [];
    subtotal = 0;
    $.fn.updateCart();
  });
  var update;
  $("body").on("keyup", ".manual-update-quantity", function () {
    update= $(".manual-update-quantity").val();
  });
 $("body").on("click", "#update", function () {
    var new_quantity = $(this).parent().find(">:nth-child(2)").val();
   console.log($(this).parent().find(">:nth-child(2)").val());
  
    let pid = $(this).parent().data("id");
    console.log(pid ,'  ,',new_quantity);
    for (var i = 0; i < cart.length; i++) {
      if (pid == cart[i].id) {
        console.log("updating =", cart[i]);
        if (new_quantity == 0) {
          cart.splice(i, 1);
          console.log('deleted product',cart);
        } else {
          cart[i].quantity = new_quantity;
          console.log('updated:',cart);
        }
        
        $.fn.updateCart();
      }
    }
  });
  $.fn.loadBasicHtml();
  //end script
});