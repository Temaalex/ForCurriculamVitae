<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'mysite');
    
    $mysqli = @new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if ($mysqli->connect_errno) exit('Ошибка соединения с БД');
    $mysqli->set_charset('utf8');
    
    if (isset($_POST['reg'])) {
        $name = $mysqli->real_escape_string(htmlspecialchars($_POST['name']));
        $email = $mysqli->real_escape_string(htmlspecialchars($_POST['email']));
        $password = $mysqli->real_escape_string(htmlspecialchars($_POST['password']));
        $ip_reg = ip2long($_SERVER['REMOTE_ADDR']);
        $query = "INSERT INTO `sumrak_users` (`name`, `email`, `password`, `ip_reg`, `date_reg`) VALUES ('$name', '$email', MD5('$password'), '$ip_reg', UNIX_TIMESTAMP())";
        $result = $mysqli->query($query);
    }
    
   $mysqli->close();
?>
<?php if (isset($result)) { ?>
    <?php if ($result) { ?>
        <p>Регистрация прошла успешно!</p>
    <?php } else { ?>
        <p>Ошибка при регистрации!</p>
    <?php } ?>
<?php } ?>
<form name='reg' action='index.php' method='post'>
    <p>
        Имя: <input type='text' name='name' />
    </p>
    <p>
        E-mail: <input type='text' name='email' />
    </p>
    <p>
        Пароль: <input type='password' name='password' />
    </p>
    <p>
        <input type='submit' name='reg' value='Зарегистрироваться' />
    </p>
</form>