<?php
	namespace App;
	/**
	 * including the required files
	 */
	require_once 'configure.php';
	require_once 'classes/products_class.php';
	require_once 'classes/display.php';
	require_once 'vendor/autoload.php';
	/**
	 * creating products that is to be displaye on the web page
	 */
	$product1= new Products_(101,"Basket Ball","basketball.png",150);
	$product2= new Products_(102,"Football","football.png",120);
	$product3= new Products_(103,"Soccer","soccer.png",110);
	$product4= new Products_(104,"Table Tennis","table-tennis.png",130);
	$product5= new Products_(105,"Tennis","tennis.png",100);

	/**
	 * adding product to the product array
	 */
	$pro = new dynamicListing();
	$pro->adToProductArray($product1);
	$pro->adToProductArray($product2);
	$pro->adToProductArray($product3);
	$pro->adToProductArray($product4);
	$pro->adToProductArray($product5);

?>

<!DOCTYPE html>
<html>
<head>
	<title>
		Products
	</title>
	<link href="style.css" type="text/css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</head>
<body>
	<?php require'header.php'; ?>
	<div id="main">
		<div id="products">
			<?php 
				/**
				 * calling display function to display the products
				 */
				$pro->display();
			?>
		</div>
		<div id="product-table">
			
		</div>
		<div id="total">
			
		</div>
		<div id="clearCart">
			
		</div>
	</div>
	<?php require'footer.php'; ?>

	<script src="script.js"></script>
</body>
</html>