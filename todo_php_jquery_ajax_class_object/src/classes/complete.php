<?php
    namespace App;
    class Complete{
        /**
         * function to change the status of todo from todo to completed
         *
         * @param [type] $id
         * @return void
         */
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
    
        /**
         * function to change the status of completed from todo to todo
         *
         * @param [type] $id
         * @return void
         */
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
    
    }
?>