<?php
    namespace App;
	session_start();
	require_once 'classes/products_class.php';
    require_once 'classes/display.php';
    require_once 'classes/addToCart.php';
    isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
    //print_r($_SESSION['cart']);
    if(isset($_REQUEST['action'])){
        $action=$_REQUEST['action'];
        $prId=$_REQUEST['prId'];
        //print_r($prId);
        $removeId=$_REQUEST['removeId'];
        $updateId=$_REQUEST['updateId'];
        $newQty=$_REQUEST['newQty'];
        $adCart=new adToCart();
        switch($action){
            case "add":
                $adCart->addProductTosession($prId);
                break;
            case "remove":
                if(isset($removeId)){$adCart->remove($removeId);};
                break;
            case "update":
                if(isset($updateId)){$adCart->updateCart($updateId,$newQty);};
                break;
                case "total":
                    $adCart->totalValueincart();
                    break;
        }
    }
    
?>