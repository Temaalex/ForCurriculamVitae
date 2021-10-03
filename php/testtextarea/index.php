<?php
echo 'ex13 lesson 2'.'<br>';
if (isset($_POST['myform']))
	{	
		// Вариант 1 (блокирует любые теги кроме <br>, а так же дает доступ писать только цифры рядом со знаком "<")
		$text=$_POST['text']??false;
		$error='Оставайтесь на месте скоро к вам подойдет сотрудник первого отдела';
		$reg='#[<.>][^<br>][^\d<\d]#';
		$text=preg_replace($reg, $error, $text);
		// Вариант 2 (блокирует все теги кроме <br>, к сожалению так же не допускает написание знака "<")
		//$text=strip_tags($text, '<br>');
	}
?>
<form action="index.php" method="post"name="myform">
	<p><textarea name="text"></textarea></p><br>
	<?=$text?><br>
	<input name="myform" type="submit" value="отправить">
</form> 