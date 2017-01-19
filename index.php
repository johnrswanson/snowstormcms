<html>

<head>
	<title>localhost</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="380" content="width=device-width, user-scalable=no"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui" />
	<link rel="stylesheet" href="./css/jqueryui.css">
	<link rel="stylesheet" href="./css/font-awesome.css">
	<link rel="stylesheet" href="./style.css">
	<link rel="stylesheet" href="./css/spectrum.css">
</head>


<body>


	<script src="./js/jquery.js" type="text/javascript"></script>
<script src="./js/jquery.ba-hashchange.js" type="text/javascript"></script>
	
	<script src="./script_viewer.js" type="text/javascript"></script>

<script src="./js/spectrum.js" type="text/javascript"></script>
	

<?

include('./connect.php');
if (isset($_COOKIE['ID_myapp'])){ 
	$email = $_COOKIE['ID_myapp']; 
	$pass = $_COOKIE['Key_myapp'];
	$query ="SELECT * FROM admin WHERE email = '$email' ";
	foreach($dbh->query( $query ) as $info){ 		$userID=$info['ID'];
		$name=$info['shortname'];
		if($pass!=$info['password']){
				header("Location:./index.php");
				exit;
			}
			
			else {
			$admin='true'; 
			$loggedin='true'; 



echo'<a id=""editnow" href="#" onclick="showButtons(); return false;">Edit Page</a><a href="login.php?logout=now">Logout</a>';?>
<a href="javascript:(function()%7B%20var%20fb%20=%20document.createElement('script');%20fb.type%20=%20'text/javascript';%20fb.src%20=%20'https://getfirebug.com/firebug-lite.js%23startOpened';%20document.getElementsByTagName('body')%5B0%5D.appendChild(fb);%20%7D)();">Open Firebug</a>
<?
			}		
		}	
	}


else{
	$go = addslashes($_GET['go']);
//$go='admin';
	if($go == 'admin'){
	echo'	<div ID="adminlogin">
			<a class="adminlogin" href="login.php" onclick =""> Login<i class"fa fa-star"></i></a>
			</div>';?>
<a href="javascript:(function()%7B%20var%20fb%20=%20document.createElement('script');%20fb.type%20=%20'text/javascript';%20fb.src%20=%20'https://getfirebug.com/firebug-lite.js%23startOpened';%20document.getElementsByTagName('body')%5B0%5D.appendChild(fb);%20%7D)();">Open Firebug</a>
<?

		}
}

	if($admin=='true'){
?>
	<script src="./script_editor.js"type="text/javascript" ></script>
<style>.admin{display:block;}</style>
<?
}
?>

	<div ID="page">
	</div>

<script type="text/javascript">

$(function(){
window.hello();


	var url="data.php?q=pages";
	var x='1';
	$.getJSON(url,function(json){
		$.each(json.data,function(i,ldat){
			if( x=='1'){ x='2'; 
				mydefaultpage = ''+ldat.ID+'';
			window.showpages(''+mydefaultpage+'');

		
			}	
		});	
	});
});

	</script>

<script>

$(function(){
$(window).hashchange(function(){

    var hash = location.hash;
  if(hash==''){
	var url="data.php?q=pages";
	var x='1';
	$.getJSON(url,function(json){
		$.each(json.data,function(i,ldat){
			if( x=='1'){ x='2'; 
				mydefaultpage = ''+ldat.ID+'';
				
		
				window.showelements(''+ mydefaultpage +'');


			}	
		});	
	});
}
	     
  if(hash!='' ){ document.title = '' + ( hash.replace( /^#/, '' ) || 'welcome' ) + '';
	 var url="./data.php?q=pages&s=title&x="+document.title;
		$.getJSON(url,function(json){
			$.each(json.data,function(i,dat){
				
				  window.showelements(''+dat.ID+'');
		 //window.showButtons('+dat.ID+');
				 window.showEdit('+dat.ID+');
  			});
  		});
  }
  
     
	});
$(window).hashchange();
});


  

</script>

</body>
</html>


