<?php 
    session_start();
   
    if(isset($_REQUEST['action'])){
        $action=$_REQUEST['action'];
        $delId=$_REQUEST['delId'];
        $editId=$_REQUEST['editId'];
        $compId=$_REQUEST['compId'];
        $redoId=$_REQUEST['redoId'];
        $upId=$_REQUEST['upId'];
        $upTask=$_REQUEST['upTask'];

        switch($action){
            case "add":
                addInTodo();
                break;
            case "delete":
                if(isset($delId)){delete($delId);};
                break;
            case "edit":
                if(isset($editId)){edit($editId);};
                break;
            case "update":
                if(isset($upId)){update($upId,$upTask);};
                break;
            case "complete":
                if(isset($compId)){completed($compId);};
                break;
            case "redo":
                if(isset($redoId)){redo($redoId);};
                break;
        }
    }

    function addInTodo(){
        $todoList = isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
        $id=$_POST['id'];
        $task=$_POST['task'];
        $status=$_POST['status'];
        $taskWitdId=array('id'=>$id,'task'=>$task,'status'=>$status);
        array_push($todoList,$taskWitdId);
        $_SESSION['todoList']=$todoList;
        echo(json_encode(array('data'=>$_SESSION['todoList'])));
    }


    function delete($taskId){
        foreach($_SESSION['todoList'] as $key => $value){
            if($taskId == $value['id']){
                array_splice($_SESSION['todoList'],$key,1);
                break;
            }
        }
        echo(json_encode(array('data'=>$_SESSION['todoList'])));
    }
    

    function edit($taskId){
        $todoList = isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
        foreach($todoList as $key => $value){
            if($taskId == $value['id']){
                echo json_encode(array($value));
            }
        }
    }


    function update($upId,$upTask){
        foreach($_SESSION['todoList'] as $key => $value){
            if($upId == $value['id']){
                $_SESSION['todoList'][$key]['task']=$upTask;
                $_SESSION['todoList'][$key]['status']=0;
                break;
            }
        }
        echo(json_encode(array('data'=>$_SESSION['todoList'])));
    }


    function completed($id){
        $todoList = isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
        foreach($todoList as $key => $value){
            if($id == $value['id']){
                $todoList[$key]['status']=1;
                $_SESSION['todoList']=$todoList;
                break;
            }
        }
        echo(json_encode(array('data'=>$_SESSION['todoList'])));
    }


    function redo($id){
        $todoList = isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
        foreach($todoList as $key => $value){
            if($id == $value['id']){
                $todoList[$key]['status']=0;
                $_SESSION['todoList']=$todoList;
                break;
            }
        }
        echo(json_encode(array('data'=>$_SESSION['todoList'])));
    }

?>