<?
include('connect.php');

$action= addslashes($_GET['action']);
$deleteID= addslashes($_GET['deleteID']);

$a= addslashes($_POST['a']);
$q= addslashes($_POST['q']);
$x= addslashes($_POST['x']);
$title=addslashes($_POST['title']);
$pageID=addslashes($_POST['pageID']);
$mytext = str_replace("\r",'<br>',$_POST['mytext']);
$elementID=addslashes($_POST['elementID']);
$container=addslashes($_POST['container']);

$photo=addslashes($_FILES[file][name]);
$type=addslashes($_POST['type']);
$height= addslashes($_POST['height']);
$width= addslashes($_POST['width']);
$padding= addslashes($_POST['padding']);
$background= addslashes($_POST['background']);
$color= addslashes($_POST['color']);
$fontfamily= addslashes($_POST['fontfamily']);
$fontweight= addslashes($_POST['fontweight']);
$fontsize= addslashes($_POST['fontsize']);
$lineheight= addslashes($_POST['lineheight']);
$letterspacing= addslashes($_POST['letterspacing']);
$layer= addslashes($_POST['layer']);
$opacity= addslashes($_POST['opacity']);
$top= addslashes($_POST['top']);
$left= addslashes($_POST['left']);

$radius= addslashes($_POST['radius']);

echo $a;

if ($a=='delete'){
	if ($q!=''){
if($x!=''){
$query="DELETE from ".$q." where ID = ".$x." "; 
$dbh->query( $query );
	echo '- Action completed : '.$x.'deleted from '.$q.'';
	}
	}
}


if($a=='newpage'){
echo'<br>Add new page<br>';
$statement= $dbh->prepare("INSERT into pages (title, pageorder, published)  values (:title, 1000, 'y')"); 

$statement->bindParam(':title', $title);

	$statement->execute();
	

echo '<br>Action completed : Page Added';

}

if($a=='savePage'){


$query = "UPDATE pages SET title='".$title."' WHERE ID =".$x."";
	$dbh->query( $query );

$query = "UPDATE pages SET background='".$background."' WHERE ID =".$x."";
	$dbh->query( $query );

echo '<br>Action completed : Page #".$x." Edited';

}

//if($a=='reorderPage'){

//reorder navigation links	
$myaction = $_POST['myaction']; 
echo $myaction.' <br>';
$updatepage = $_POST['pageArray'];
if ($myaction == "updatePageOrder"){
	$pageCounter = 1;
	foreach ($updatepage as $value) {
		//mysq$updatenow=mysql_query("UPDATE pages SET pageorder = '$pageCounter' WHERE ID = '$value'")or die(mysql_error('Page order was not updated in DB'));
$query = "UPDATE pages SET pageorder='".$pageCounter."' WHERE ID =".$value."";
	$dbh->query( $query );
		$pageCounter = $pageCounter + 1;	
	}
	echo '<pre>';
	print_r($updateRecordsArray);
	echo '</pre>';
	echo 'Page Order Saved';
}

//}


if($a=='newelement'){
echo'<br>Add new element<br>';
$statement= $dbh->prepare("INSERT into elements (mytext, pageID, type, photo, height, width, padding, background, color, fontfamily, fontsize, fontweight, lineheight, letterspacing, layer, opacity, radius, top, left, container)  values (:mytext, :pageID, :type, :photo, :height, :width, :padding, :background, :color, :fontfamily, :fontsize, :fontweight, :lineheight, :letterspacing, :layer, :opacity, :radius, :top, :left, :container)"); 

$statement->bindParam(':mytext', $mytext);
$statement->bindParam(':pageID', $pageID);
$statement->bindParam(':type', $type);
$statement->bindParam(':photo', $photo);
$statement->bindParam(':height', $height);
$statement->bindParam(':width', $width);
$statement->bindParam(':padding', $padding);
$statement->bindParam(':background', $background);
$statement->bindParam(':color', $color);
$statement->bindParam(':fontfamily', $fontfamily);
$statement->bindParam(':fontsize', $fontsize);
$statement->bindParam(':fontweight', $fontweight);
$statement->bindParam(':lineheight', $lineheight);
$statement->bindParam(':letterspacing', $letterspacing);
$statement->bindParam(':layer', $layer);
$statement->bindParam(':opacity', $opacity);
$statement->bindParam(':radius', $radius);
$statement->bindParam(':top', $top);
$statement->bindParam(':left', $left);
$statement->bindParam(':container', $container);




	$statement->execute();
	

echo '<br>Action completed : Element Added';


	if($photo!=''){
		//$photo.=date("m.d.yg:i:sa");
		echo ' -> Adding Photo ';
		$add="./img/full/".$photo;
		echo $add;
		if(move_uploaded_file ($_FILES[file][tmp_name],$add)){

			echo "<P>Successfully uploaded the image<P>";
			chmod("$add",0777);
		}
		else{
			echo " -> Photo Upload Directory Error";exit;}
			
			$photoerror='true';
			if ($_FILES[file][type]=="image/jpg"){$photoerror='false';}
			if ($_FILES[file][type]=="image/jpeg"){$photoerror='false';}
			if ($_FILES[file][type]=="image/png"){$photoerror='false';}
			if ($_FILES[file][type]=="image/gif"){$photoerror='false';}
			//if ($_FILES[file]['size'] > 200000000000000) {
	     //   $photoerror='true';
	     //       }	
			if ($photoerror=='true'){
				echo " -> Photo Upload Type Error";
				exit;
			}
		else{echo' -> Photo Upload Success';}
	}


}





echo'<br>Reach end';

?>
