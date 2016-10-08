<?

include('./connect.php');

if (isset($_POST['submitlogin']))
	{
	if(!$_POST['email'] | !$_POST['pass'])
		{
echo'

<div class="loginwindow">Login failed<br> try again<br><form ID="user" method="post" action="login.php">
		<input type="text" name="email" placeholder="Site Admin " > <br>
		<input type="password" placeholder="Enter Password" name="pass"> <br>
		<input type="submit" name="submitlogin" value="Login">
	</form></div>';
}
	
	else{
	$emailinput = addslashes($_POST['email']);
	$_POST['pass'] = stripslashes($_POST['pass']);
	$info['password'] = stripslashes($info['password']);
	$pass = $_POST['pass'];
	$count=0;
	$check = "SELECT * FROM admin WHERE email = '$emailinput'";
foreach($dbh->query( $check ) as $info){ 
$count++;
		if (md5($pass)!= $info['password'])
			{
echo'

<div class="loginwindow">Login failed<br> try again<br><form ID="user" method="post" action="login.php">
		<input type="text" name="email" placeholder="Site Admin" > <br>
		<input type="password" placeholder="Enter Password" name="pass"> <br>
		<input type="submit" name="submitlogin" value="Login">
	</form></div>';

			}
			
		else{// if login is ok then we add a cookie
			$_POST['email'] = stripslashes($_POST['email']);
			$hour = time() + 100000;
			setcookie(ID_myapp, $_POST['email'], $hour, "/");
			setcookie(Key_myapp, md5($_POST['pass']), $hour, "/");

			//header("Location: ./index.php");
	echo'You Are Logged In. <a href="index.php">Continue</a>';
		
		
			}

		}


if($count==0){

echo'

<div class="loginwindow">Login failed<br> try again<form ID="user" method="post" action="login.php">
		<input type="text" name="email" placeholder="Site Admin" > <br>
		<input type="password" placeholder="Enter Password" name="pass"> <br>
		<input type="submit" name="submitlogin" value="Login">
	</form></div>';
		}
	}
}



$logout=$_GET['logout'];
if($logout=='now'){
$past = time() - 100; 
//this makes the time in the past to destroy the cookie 
setcookie(ID_myapp, gone, $past, "/"); 
setcookie(Key_myapp, gone, $past, "/");
echo'Logout Successful';
 }

if (!isset($_POST['submitlogin']))	{	echo'

<div class="loginwindow"><form ID="user" method="post" action="login.php">
		<input type="text" name="email" placeholder="Site Admin" > <br>
		<input type="password" placeholder="Enter Password" name="pass"> <br>
		<input type="submit" name="submitlogin" value="Login">
	</form></div>';}





echo $count;
echo'<style>
.loginwindow{ margin:auto; width: 94%; max-width: 300px; border: solid 1px #555; text-align: center; padding-top : 20px }
.loginwindow input{margin-top:20px;}
</style>';
?>



