var todoTask=[];
document.getElementById("addBtn").onclick=function addTodo(){
    var newTask=document.getElementById("new-task").value;
    var taskJson={
                    task:newTask,
                    id:parseInt(Math.random()*100000),
                    status:0,
                };
    todoTask.push(taskJson);
    displayTodo();
    displayCompleted();
}


function displayTodo(){
    var tasks='';
    for(var i=0;i<todoTask.length;i++){
        if(todoTask[i].status==0){
            tasks += '<li><input type="checkbox" onchange="completed('+todoTask[i].id+');">\
                        <label>'+todoTask[i].task+'</label>\
                        <button class="edit" onclick="editList('+todoTask[i].id+');">Edit</button>\
                        <button class="delete" onclick="deleteList('+todoTask[i].id+');">Delete</button>\
                    </li>';
        }
    }
    document.getElementById("incomplete-tasks").innerHTML=tasks;
}


function completed(completeId){
    for(var i=0;i<todoTask.length;i++){
        if(todoTask[i].id==completeId){
            todoTask[i].status=1;
            break;
        }
    }
    displayTodo();
    displayCompleted();
}

function addAgain(completeId){
    for(var i=0;i<todoTask.length;i++){
        if(todoTask[i].id==completeId){
            todoTask[i].status=0;
            break;
        }
    }
    displayTodo();
    displayCompleted();
}


function displayCompleted(){
    var tasks='';
    for(var i=0;i<todoTask.length;i++){
        console.log("running")
        if(todoTask[i].status==1){
            tasks += '<li><input type="checkbox" checked onchange="addAgain('+todoTask[i].id+');">\
                        <label>'+todoTask[i].task+'</label>\
                        <button class="edit" onclick="editList('+todoTask[i].id+');">Edit</button>\
                        <button class="delete" onclick="deleteList('+todoTask[i].id+');">Delete</button>\
                    </li>';
        }
    }
    document.getElementById("completed-tasks").innerHTML=tasks;
}

var updateId;
function editList(editId){
    for(var i=0;i<todoTask.length;i++){
        if(todoTask[i].id==editId){
            document.getElementById("new-task").value=todoTask[i].task;
            updateId=editId;
            break;
        }
    }
    document.getElementById("updateBtn").style.display="block";
    document.getElementById("addBtn").style.display="none";
}

function deleteList(dId){
    for(var i=0;i<todoTask.length;i++){
        if(todoTask[i].id==dId){
            todoTask.splice(i,1);
            break;
        }
    }
    displayTodo();
    displayCompleted();
    document.getElementById("addBtn").style.display="block";
    document.getElementById("updateBtn").style.display="none";
}


document.getElementById("updateBtn").onclick=function update(){
    var newTask=document.getElementById("new-task").value;
    for(var i=0;i<todoTask.length;i++){
        if(todoTask[i].id==updateId){
            todoTask[i].task=newTask;
            todoTask[i].status=0;
            break;
        }
    }
    displayTodo();
    displayCompleted();
    document.getElementById("addBtn").style.display="block";
    document.getElementById("updateBtn").style.display="none";
}

