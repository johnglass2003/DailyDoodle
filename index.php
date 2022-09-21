<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="doodstyles.css">
    <title>Doodles</title>
</head>
<body>
    <h1><?php
        $doodles = array();
    
        $files = scandir('uploads/');
    
        foreach($files as $img) {
            echo '<img src="'.$img.'" alt="">';
        }
    ?></h1>
    <section class="container">
        
    </section>
    <script src="./index.js"></script>
</body>
</html>