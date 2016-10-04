(function (window) {



window.showButtons= function(pageID){

var url="data.php?q=pages";
$.getJSON(url,function(json){
	$.each(json.data,function(i,edat){
		$("#pagecontrols"+edat.ID).append(''+
'<div id="edit'+edat.ID+'" class="editpage"><a href="#" onclick="editthisPage('+edat.ID+'); return false;"><i class="fa fa-gear"></i></a></div>'+

'<div class="deletepage"><a href="#" onclick="deletePage('+edat.ID+'); return false;"><i class="fa fa-times"></i></a></div>');
	});
});


	$('.headeradd').html(''+
'<div class="addbutton">'+
'<a href= "#" onclick="newPage(); return false;"> '+
'<i class="fa fa-file uibig"></i><div class="buttontitle">New</div></a>'+
'</div>'+
'');
var container = 'mainpage';
	$('.elementadd').html(''+
'<div class="addbutton">'+
'<a href= "#" onclick="newElement('+pageID+'); return false;"> '+
'<i class="fa fa-plus uibig"></i><br></a>'+
'</div>'+
'');
window.hidepagebuttons();
}



window.editElement= function(elementID){
	$("#page").append('<div id="lightbox'+elementID+'"></div>');
	$("#lightbox"+elementID).append(''+
'<form ID ="editbox">'+
'<input type="text" name="mytext" placeholder="">'+
'<input type="text" name="mytext" placeholder="">'+
'</div>');

}



window.showEdit= function(pageID){
	var url="data.php?q=elements&s=pageID&x="+pageID;
	$.getJSON(url,function(json){
		$.each(json.data,function(i,edat){
		$("#edit"+edat.ID).html(''+
'<div class="mover"><i class="fa fa-hand"></i></div>'+

'<div class="stacker"><i class="fa fa-bars"></i></div>'+

'<div class="editor"><a href="#" onclick="editthisElement('+edat.ID+'); return false;"><i class="fa fa-pencil"></i></a></div>'+
'<div class="trash rightbutton"><a class="" href="#" onclick="deleteElement('+edat.ID+'); return false;">'+
'<i class="fa fa-trash"></i></a></div>'+
'');
		});
	});
}







window.editthisPage= function(pageID){
	$("#page").append('<div id="lightbox_page'+pageID+'"></div>');
	$("#lightbox"+elementID).append(''+
'<form ID ="editbox">'+
'<input type="text" name="title" placeholder="Page Title">'+
'</div>');
}


window.editthisElement= function(elementID){
	$("#page").append('<div id="lightbox_element'+elementID+'"></div>');
	$("#lightbox"+elementID).append(''+
'<form ID ="editbox">'+
'<input type="text" name="title" placeholder="Page Title">'+
'</div>');

}




window.newPage = function(){

$('.newelement').html('');
$('#newelementbox').html('');
$('#page').append('<div class="lightbox" id="newpagebox"></div>');
$('#newpagebox').html(''+
'<form ID = "addform">'+
'<input type="text" name="title" placeholder="Page Title">'+
'<input type="hidden" name="q" value= "pages">'+
'<input type="hidden" name="a" value= "newpage">'+
'<br><input type="button" onclick="addtopage(); return false;" name="submit" value ="Add Page">'+
'</form>'+
'');

}









//////////////////////////////////////////////////////////
///NEW ELEMENT FORM
window.newElement = function(pageID, container){
 var container='mainpage'; 
$('.newpage').html('');
$('#newpagebox').html('');

$('#page').append('<div class="lightbox" id="newelementbox"></div>');
$('#newelementbox').html(''+

'<a href="#" onclick="newPhoto('+pageID+'); return false;">'+
'<i class="fa fa-camera"><br>Photo</i>'+
'</a> '+
'<a href="#" onclick="newText('+pageID+'); return false;">'+
'<i class="fa fa-file-text-o"><br>Text</i>'+
'</a> '+
'<a href="#" onclick="newDiv('+pageID+'); return false;">'+
'<i class="fa fa-square"><br>Div</i>'+
'</a> '+
'<a href="#" onclick="newBox('+pageID+'); return false;">'+
'<i class="fa fa-th"><br>Box</i>'+
'</a> '+

'<br><form ID = "addform" enctype="multipart/form-data"></form>');
}



//////////////////////////////////////////////////////////
///NEW PHOTO FORM
window.newPhoto= function(pageID, container){
$('#addform').html(''+
'<input type="file" name="file" accept="image/*;capture=camera">'+
'<input type="hidden" name="type" value= "photo">'+
'<input type="hidden" name="a" value= "newelement">'+
'<input type="hidden" name="container" value= "'+container+'">'+
'<input type="hidden" name="q" value= "elements">'+
'<input type="hidden" name="pageID" value= "'+pageID+'">'+
'<input type="button" onclick="addtopage('+pageID+');" name="submit" value ="Add Photo">');
}

//////////////////////////////////////////////////////////
///NEW TEXT FORM
window.newText = function(pageID, container){
$('#addform').html(''+

'<input type="hidden" name="type" value= "text">'+
'<textarea name="mytext" style="width: 80%; min-height: 200px" placeholder="Enter Text"></textarea>'+

'<input type="hidden" name="container" value= "'+container+'">'+

'<input type="text" name="fontfamily" placeholder="Font">'+

'<input type="text" name="fontsize" placeholder="Size">'+

'<input type="text" name="letterspacing" placeholder= "Spacing">'+

'<input type="text" name="lineheight" placeholder="Line Height">'+

'<input type="text" name="color" value="" placeholder="color">'+

'<input type="text" name="background"  placeholder="background">'+
'<input type="hidden" name="a" value= "newelement">'+
'<input type="hidden" name="q" value= "elements">'+
'<input type="hidden" name="pageID" value= "'+pageID+'">'+

'<input type="button" onclick="addtopage('+pageID+');" name="submit" value ="Add Text">'+

'');

}

//////////////////////////////////////////////////////////
///NEW DIV FORM

window.newDiv = function(pageID, container){

$('#addform').html(''+

'<input type="hidden" name="container" value= "'+container+'">'+
'<input type="text" name="height" value="1000px" placeholder="Enter Div Height">'+
'<input type="text" name="width" value="500px" placeholder="Enter Div Width">'+
'<input type="text" name="padding" value="" placeholder="Padding">'+
'<input type="text" name="opacity" value="" placeholder"Opacity">'+
'<input type="hidden" name="type" value="div">'+
'<input type="hidden" name="a" value= "newelement">'+
'<input type="hidden" name="q" value= "elements">'+
'<input type="hidden" name="pageID" value= "'+pageID+'">'+
'<input type="button" onclick="addtopage('+pageID+');" name="submit" value ="Add Div">'+
'');
}



//////////////////////////////////////////////////////////
///NEW Box FORM
window.newBox= function(pageID, container){
$('#addform').html(''+
'<input type="text" name="title" placeholder="Title for Box">'+
'<input type="hidden" name="type" value= "box">'+
'<input type="hidden" name="a" value= "newelement">'+
'<input type="hidden" name="container" value= "'+container+'">'+
'<input type="hidden" name="q" value= "elements">'+
'<input type="hidden" name="pageID" value= "'+pageID+'">'+
'<input type="button" onclick="addtopage('+pageID+');" name="submit" value ="Add Box">');
}



///////////////////////////////////////////////////
//////ADD PAGES / ELEMENTS AJAX TO CONFIRM.PHP

window.addtopage = function(pageID){	
var mydata = new FormData($("#addform")[0]);
		$.ajax({
			'url' : "confirm.php",
			'type' : 'post',
			'data' : mydata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
			}
	}).done(function(){
			window.showpages(pageID);
window.showelements(pageID);
			});
	}






////////////////////////////////////////////////////////
///////DELETE AJAX TO CONFIRM.PHP

window.deletePage = function(pageID){
$("#page"+pageID).fadeOut(100);

$.ajax({ 
            url: "confirm.php",
            type: "POST",
            data: { 
	            'a': 'delete', 
						'q': 'pages',
						'x': pageID
            } 
         }); 
}

window.deleteElement = function(elementID){
$("#element"+elementID).fadeOut(100);

$.ajax({ 
            url: "confirm.php",
            type: "POST",
            data: { 
	            'a': 'delete', 
						'q': 'elements',
						'x': elementID
            } 
         }); 
}

}(this));




