<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="doodstyles.css">
    <title>Doodles</title>
</head>
<body>
    <section class="container">
    <h1><?php
        $files = scandir('uploads/');
    
        foreach($files as $img) {
            echo '<img src="uploads/'.$img.'" alt="">';
        }
    ?></h1>
    </section>
</body>
</html>