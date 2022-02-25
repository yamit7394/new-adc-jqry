var products = [];
document.getElementById("addProduct").onclick=function addToCart() {
  var proId = document.getElementById("productId").value;
  var proName = document.getElementById("productName").value;
  var proPrice = document.getElementById("productPrice").value;
  var proJson = {
    id: proId,
    name: proName,
    price: proPrice,
  };
  if (proId != "" && proName != "" && proPrice != "") {
    if(!checkProduct(proJson.sku)){
        products.push(proJson);
    }else{
        alert("Product "+proJson.id+" Already exist");
    }
    display();
  }
}
//to check if products already exist in the product array
function checkProduct(proId) {
    for (var i = 0; i < products.length; i++) {
        if (proId == products[i].id) {
            return true;
        }
    }
    return false;
}

//to display the products 
function display() {
    var tBody="";
  for (var i = 0; i< products.length; i++) {
     tBody+=' <tr>\
                <td>'+products[i].id+'</td>\
                <td>'+products[i].name+'</td>\
                <td>'+products[i].price+'</td>\
                <td><a href="#" onclick="editTable('+products[i].id+')">Edit</a></td>\
            </tr>';
  }
  document.getElementById("productBody").innerHTML=tBody
  document.getElementById("productTable").style.display = "block";
}

//edit table function
function editTable(proId){
    for(var i=0;i<products.length;i++){
        if(proId==products[i].id){
            document.getElementById("productId").value=products[i].id;
            document.getElementById("productName").value=products[i].name;
            document.getElementById("productPrice").value=products[i].price;
            break;
        }
    }
    document.getElementById("addProduct").style.display="none";
    document.getElementById("updateProduct").style.display="block";
}
document.getElementById("updateProduct").onclick=function updateProduct(){
    
    var proId=document.getElementById("productId").value;
    var proName=document.getElementById("productName").value;
    var proPrice=document.getElementById("productPrice").value;
    for(var i=0;i<products.length;i++){
        if(proId==products[i].id){
            products[i].name=proName;     
            products[i].price=proPrice;  
        }
    }
    display();
}