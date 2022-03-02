<?php 
    session_start();
    include_once('config.php');
?>
<html>
    <head>
        <title>TODO List</title>
        <link href="style.css" type="text/css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <p>
                <form method="" action="">
                    <input id="new_task" type="text" name="task" value="">
                    <button type="submit" id="updateBtn" value="">Update</button>
                    <button type="submit" id="addBtn" name="action" value="add">Add</button>
                </form>
            </p>
    
            <div id="taskss">
                <h3>Todo</h3>
                <ul id="incomplete-tasks">
                    
                </ul>
        
                <h3>Completed</h3>
                <ul id="completed-tasks">
                </ul>
                </div>
            </div>
    
        <script src="script.js"></script>
    </body>
</html>