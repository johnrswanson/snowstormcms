<?
include('./connect.php');
$q=$_GET['q'];
$s=$_GET['s'];
$x=$_GET['x'];
$o=$_GET['o'];
$a=$_GET['a'];
////
//$q='pages';
//$s='title';
//$x='home';
//$o='email';
//$a='desc';
////
if ($o==''){$o='ID';}
if ($a==''){$a='asc';}
////
if ($q!=''){
if ($s!=''){
	$query = "SELECT * FROM '$q' where $s = '$x' order by $o $a";
}

if ($s==''){
	$query = "SELECT * FROM '$q' order by $o $a";
}

	$arr = array();
	foreach($dbh->query( $query ) as $row){
		$arr[] = $row;
	}
	$json.= '{"data":'.json_encode($arr).'}';
}
echo $json;
?>
