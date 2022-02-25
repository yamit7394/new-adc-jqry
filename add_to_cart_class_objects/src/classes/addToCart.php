<?php
    namespace App;
    session_start();
    isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
    class adToCart{
        /**
         * function to add product in the cart
         *  accept product id that will be passed on the click of button add to cart
         * @param [type] $prId
         * return response as list of products in the cart
         * @return void
         */
        function addProductTosession($prId){
            $casrtSession=isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
            foreach($_SESSION['product'] as $value){
                if($prId == $value['id'] && !$this->checkProductInSession($prId)){
                    $value['quantity']=1;
                    array_push($casrtSession,$value);
                    $_SESSION['cart']=$casrtSession;
                    break;
                }
            }
            echo json_encode(array('data'=>$_SESSION['cart']));
        }
        
        /**
         * function to check if product already exist in the cart
         *  return as true if exist and false if don't
         * @param [type] $prId
         * @return void
         */
        function checkProductInSession($prId){
            $casrtSession=isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
            foreach($casrtSession as $key => $value){
                if($prId==$value['id']){
                    return true;
                    break;
                }
            }
            return false;
        }

        /**
         * function to remove product from the cart
         * accept product id that is to be removed from the cart
         * @param [type] $removeId
         * @return void
         */
        function remove($removeId){
            foreach($_SESSION['cart'] as $key => $value){
                if($removeId == $value['id']){
                    array_splice($_SESSION['cart'],$key,1);
                    break;
                }
            }
            echo json_encode(array('data'=>$_SESSION['cart']));
        }

        /**
         * function to calculate the total value of product in the cart
         *
         * @return void
         */
        function totalValueincart(){
            $total = 0;
            foreach($_SESSION['cart'] as $key=> $value){
                $total += $value['price'] * $value['quantity'];
            }
            echo $total;
        }

        /**
         * function to update quantity of the products
         * accept id of the product and the quantity
         * @param [type] $updateId
         * @param [type] $qty
         * @return void
         */
        function updateCart($updateId,$qty){
            $casrtSession=isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
            foreach($casrtSession as $key => $value){
                if($updateId == $value['id']){
                    $casrtSession[$key]['quantity']=$qty;
                    $_SESSION['cart']=$casrtSession;
                    break;
                }
            }
            echo json_encode(array('data'=>$_SESSION['cart']));
        }
    }
?>