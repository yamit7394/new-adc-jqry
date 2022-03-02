<?php
    namespace App;
    class ToDo{
        /**
         * function to add in todo list
         * 
         * @param integer $id 
         * @param string $task
         * @param integer $status
         * @return void
         */
        function addInTodo(int $id,string $task,int $status){
            $todoList = isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
            $taskWitdId=array('id'=>$id,'task'=>$task,'status'=>$status);
            array_push($todoList,$taskWitdId);
            $_SESSION['todoList']=$todoList;
            print_r(json_encode(array('data'=>$_SESSION['todoList'])));
        }
    
        /**
         * function to delete task from todo list
         *
         * @param [type] $taskId
         * @return void
         */
        function delete($taskId){
            foreach($_SESSION['todoList'] as $key => $value){
                if($taskId == $value['id']){
                    array_splice($_SESSION['todoList'],$key,1);
                    break;
                }
            }
            echo(json_encode(array('data'=>$_SESSION['todoList'])));
        }
        
        /**
         * function to edit todo list
         *
         * @param [type] $taskId
         * @return void
         */
        function edit($taskId){
            $todoList = isset($_SESSION['todoList']) ? $_SESSION['todoList'] : array();
            foreach($todoList as $key => $value){
                if($taskId == $value['id']){
                    echo json_encode(array($value));
                }
            }
        }
    
        /**
         * function to update todo list
         *
         * @param [type] $upId
         * @param [type] $upTask
         * @return void
         */
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
    }
?>