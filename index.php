<?php
    $doodles = array();

    $files = scandir('uploads/');

    foreach($files as $img) {
        echo '<img src="'.$img.'" alt="">';
    }
?>