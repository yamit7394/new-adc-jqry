$(document).ready(function(){
    $("#addBtn").click(function(e){
        e.preventDefault();
        $.ajax({
            url:"config.php",
            type:"POST",
            data:{
                "id":parseInt(Math.random()*10000),
                "task":$("#new_task").val(),
                "action":"add",
                "status":0,
            },
            datatype:"JSON",
        }).done(function(data){
            displayTodo(data);
        });
    });
});
$("#taskss").on('click','#delete',function(e){
    e.preventDefault();
    var id=$('#delete').val();
    $.ajax({
        url:"config.php",
        type:"GET",
        data:{
            'delId':id,
            'action':'delete',
        },
        datatype:"JSON",
    }).done(function(data){
        displayTodo(data);
    });
});
var editId;
$("#taskss").on('click','#edit',function(e){
    e.preventDefault();
    editId=$(this).val();
    $.ajax({
        url:"config.php",
        type:"GET",
        data:{
            'editId':editId,
            'action':'edit',
        },
        datatype:"JSON",
    }).done(function(data){
        data=$.parseJSON(data);
        console.log(data);
        $("#new_task").val(data[0].task);
        $("#updateBtn").css("display","block");
        $("#addBtn").css("display","none");
    });
});

$("#updateBtn").click(function(e){
    e.preventDefault();
    $.ajax({
        url:"config.php",
        type:"POST",
        data:{
            'upId':editId,
            'action':'update',
            'upTask':$("#new_task").val(),
        },
        datatype:"JSON",
    }).done(function(data){
        console.log(data);
        displayTodo(data);
        $("#updateBtn").css("display","none");
        $("#addBtn").css("display","block");
    });
});


function completed(id){
    $.ajax({
        url:"config.php",
        type:"POST",
        data:{
            'compId':id,
            'action':'complete',
        },
    }).done(function(data){
        displayTodo(data);
    });
}

function redo(id){
    $.ajax({
        url:"config.php",
        type:"POST",
        data:{
            'redoId':id,
            'action':'redo',
        },
    }).done(function(data){
        displayTodo(data);
    });
}

function displayTodo(data){
    data=$.parseJSON(data);
    console.log(data.data)
    var unComplete='';
    var complete='';
    //console.log(data.data.length)
    for(var i=0;i<data.data.length;i++){
        //console.log(data.data[i].id)
        if(data.data[i].status=='0'){
            unComplete+='<form method="POST" action="">\
                             <li>\
                                <input type="checkbox" name="completeTask" value="'+data.data[i].id+'" onchange="completed('+data.data[i].id+')">\
                                <label>'+data.data[i].task+'</label>\
                                <button id="edit" name="action" value="'+data.data[i].id+'">Edit</button>\
                                <button type="submit" id="delete" value="'+data.data[i].id+'" >Delete</button>\
                            </li>\
                    </form>';
        }else{
            complete+='<form method="" action="">\
                            <li>\
                                <input type="checkbox" name="completeTask" value="'+data.data[i].id+'" onchange="redo('+data.data[i].id+')" checked>\
                                <label>'+data.data[i].task+'</label>\
                                <button id="edit" name="action" value="'+data.data[i].id+'">Edit</button>\
                                <button type="submit" id="delete" value="'+data.data[i].id+'" >Delete</button>\
                            </li>\
                    </form>';
        }
    }
    $("#incomplete-tasks").html(unComplete);
    $("#completed-tasks").html(complete);
}


