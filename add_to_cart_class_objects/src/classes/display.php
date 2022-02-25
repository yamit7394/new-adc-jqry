<?php
    namespace App;
    isset($_SESSION['product']) ? $_SESSION['product'] : array();
    class dynamicListing{
        /**
         * array of products that will be displayed on the page
         *created a session named product
         * @var array
         */
        public $prod=array();
        public function adToProductArray(Products_ $product){
            array_push($this->prod,(array)$product);
            $_SESSION['product']=$this->prod;
        }
        /**
         * to display the product on the page
         *
         * @return void
         */
        function display(){
            foreach($this->prod as $key => $val) {
                    echo'<div id="'.$val['id'].'" class="product">
                            <img src="images/'.$val['image'].'">
                            <h3 class="title">'.$val['name'].'</h3>
                            <span>Price: '.$val['price'].'</span>
                            <input type="hidden" name="quantity" value="1">
                            <button class="add-to-cart" id="addToCart" value="'.$val['id'].'">Add To Cart</button>
                </div>';
                
            }
        }
    }
?>