var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

$(document).ready(function(){
    function display(){
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                            <th>Hide</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                            <td><a>Hide</a></td>\
                        </tr>';
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    }
    display();
    $("#searchText").keyup(function(){
        var searchTex=$("#searchText").val();
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                            <th>Hide</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            if(products[i].id == searchTex || products[i].name == searchTex){
                tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                            <td><a>Hide</a></td>\
                        </tr>';
            }
            
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    });
    var filterByBrand;
    var filterByOs;
    $("#filterByBrand").change(function(){
        filterByBrand=$("#filterByBrand").val();
        filter(filterByBrand);
    });
    $("#filterByOs").change(function(){
        filterByOs=$("#filterByOs").val();
        filter(filterByOs);
    });
    
    function filter(filterVar){
        var productTable='<table id="prTable">\
                        <tr>\
                            <th>ID</th>\
                            <th>Name</th>\
                            <th>Brand</th>\
                            <th>Os</th>\
                            <th>Hide</th>\
                        </tr>';
        var tableRows="";
        for(var i=0;i<products.length;i++){
            if(products[i].brand == filterVar || products[i].os == filterVar){
                tableRows +='<tr>\
                            <td>'+products[i].id+'</td>\
                            <td>'+products[i].name+'</td>\
                            <td>'+products[i].brand+'</td>\
                            <td>'+products[i].os+'</td>\
                            <td><a>Hide</a></td>\
                        </tr>';
            }
            
        }
        tableRows += '</table>';
        productTable += tableRows;
        $("#wrapper").html(productTable);
    }

});