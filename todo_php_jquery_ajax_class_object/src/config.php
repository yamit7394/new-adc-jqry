<?php 
    namespace App;
    isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
    require_once("classes/todo.php");
    require_once("classes/complete.php");
    session_start();
    
    if(isset($_REQUEST['action'])){
        $action=$_REQUEST['action'];
        $id=isset($_REQUEST['id'])?$_REQUEST['id']:0;
        $task=isset($_REQUEST['task'])?$_REQUEST['task']:'';
        $status=isset($_REQUEST['status'])?$_REQUEST['status']:0;
        $delId=isset($_REQUEST['delId'])?$_REQUEST['delId']:0;
        $editId=isset($_REQUEST['editId'])?$_REQUEST['editId']:0;
        $compId=isset($_REQUEST['compId'])?$_REQUEST['compId']:0;
        $redoId=isset($_REQUEST['redoId'])?$_REQUEST['redoId']:0;
        $upId=isset($_REQUEST['upId'])?$_REQUEST['upId']:0;
        $upTask=isset($_REQUEST['upTask'])?$_REQUEST['upTask']:'';
        $comp=new Complete();
        $todo=new ToDo();
        /**
          * function calling using switch
          * based on the action
        */
        switch($action){
            case "add":
                $todo->addInTodo($id,$task,$status);
                break;
            case "delete":
                if(isset($delId)){$todo->delete($delId);};
                break;
            case "edit":
                if(isset($editId)){$todo->edit($editId);};
                break;
            case "update":
                if(isset($upId)){$todo->update($upId,$upTask);};
                break;
            case "complete":
                if(isset($compId)){$comp->completed($compId);};
                break;
            case "redo":
                if(isset($redoId)){$comp->redo($redoId);};
                break;
        }
    }

?>