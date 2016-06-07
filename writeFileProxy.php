<?php

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$newData = $request->newData;
    @$fileName = $request->fileName;
    echo $fileName;
    


?>