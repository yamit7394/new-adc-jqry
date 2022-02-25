$(document).ready(function (){
    products=[]
    $("#add_product").click(function(){
        var proSku=$("#product_sku").val();
        var proName=$("#product_name").val();
        var proPrice=$("#product_price").val();
        var proQuantity=$("#product_quantity").val();
        var proJson = {
                sku:proSku,
                name: proName,
                price: proPrice,
                quantity:proQuantity
            };
        
       if(!checkProduct(proJson.sku)){
            products.push(proJson);
            $("#notification .success").css("display","block");
            $("#notification .error").css("display","none");
        }else{
            $("#notification .error").css("display","block");
            $("#notification .success").css("display","none");
        }
       display();
    });
    
    $("#notification .success .close").click(function(){
        $("#notification .success").css("display","none");
    });
    $("#notification .error .close").click(function(){
        $("#notification .error").css("display","none");
    });
    function checkProduct(proSku) {
        for (var i = 0; i < products.length; i++) {
            if (proSku == products[i].sku) {
                return true;
            }
        }
        return false;
    }

    function validate(proJson){
        console.log(typeof(proJson.sku))
        if(typeof(proJson.sku)!='number'){
            $("#product_sku").css("border","1px  #FF5733 solid");
        }else{
            $("#product_sku").css("border","1px  #7ED47E solid");
        }
    }

});
function display() {
    var tBody="";
    for (var i = 0; i< products.length; i++) {
        tBody+=' <tr>\
                    <td>'+products[i].sku+'</td>\
                    <td>'+products[i].name+'</td>\
                    <td>'+products[i].price+'</td>\
                    <td>'+products[i].quantity+'</td>\
                    <td><a href="#" onclick="editTable('+products[i].sku+')">Edit</a>\
                    <a href="#" style=`margin-left:8px;` onclick="deletTable('+products[i].sku+')">Delete</a></td>\
                </tr>';
  }
  $("#tableBody").html(tBody);
}
//edit table function
function editTable(proSku){
    for(var i=0;i<products.length;i++){
        if(proSku==products[i].sku){
            $("#product_sku").val(products[i].sku);
            $("#product_name").val(products[i].name);
            $("#product_price").val(products[i].price);
            $("#product_quantity").val(products[i].quantity);
            break;
        }
    }
    $("#add_product").css("display","none");
    $("#update_product").css("display","block");
}
function deletTable(proSku){
    console.log(proSku)
    for(var i=0;i<products.length;i++){
        if(proSku==products[i].sku){
            if(confirm("Are you sure you want to delete?")){
                products.splice(i,1);  
                break;
            }
        }
    }
    display();
}


$("#update_product").click(function updateProduct(){
    var proSku=$("#product_sku").val();
    var proName=$("#product_name").val();
    var proPrice=$("#product_price").val();
    var proQuantity=$("#product_quantity").val();
    for(var i=0;i<products.length;i++){
        if(proSku==products[i].sku){
            products[i].name=proName;  
            products[i].quantity=proQuantity;   
            products[i].price=proPrice;  
        }
    }
    display();
});