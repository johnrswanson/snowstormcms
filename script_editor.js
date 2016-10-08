(function (window) {



window.showButtons= function(){

var url="data.php?q=pages";
$.getJSON(url,function(json){
	$.each(json.data,function(i,edat){
		$("#pagecontrols"+edat.ID).html(''+
'<div id="edit'+edat.ID+'" class="editpage"><a onclick="editthisPage('+edat.ID+'); return false;"><i class="fa fa-gear"></i></a></div>'+
'<div class="addtopage"><a href="#" onclick="newElement('+edat.ID+'); return false"><i class="fa fa-plus-circle"></i></a></div>'+
'<div class="editpage"><a href="#" onclick="showEdit('+edat.ID+'); return false"><i class="fa fa-pencil"></i></a></div>'+
'<div class="deletepage"><a href="#" onclick="confirmdeletePage('+edat.ID+'); return false;"><i class="fa fa-times"></i></a></div>');

	});
});
window.hidepagebuttons();

$('.headeradd').html(''+
'<div class="addbutton">'+
'<a href= "#" onclick="newPage(); return false;"> '+
'<i class="fa fa-file uibig"></i><div class="buttontitle">New</div></a>'+
'</div>'+
'');
$('#page').append('<div class="lightbox" id="newbox"></div>');

}


//////BUTTON FOR ADD ELEMENT TO PAGE 

window.showplus=function(pageID){
var container = 'mainpage';
	$('.elementadd').html(''+
'<div class="addbutton">'+
'<a href= "#" onclick="newElement('+pageID+'); return false;"> '+
'<i class="fa fa-plus uibig"></i><br></a>'+
'</div>'+
'');




}




////LOAD EDIT BUTTONS//////////////////////////


window.showEdit= function(pageID){
	var url="data.php?q=elements&s=pageID&x="+pageID;
	$.getJSON(url,function(json){
		$.each(json.data,function(i,edat){
		$("#edit"+edat.ID).html(''+
'<div class="mover"><i class="fa fa-hand"></i></div>'+

'<div class="stacker"><i class="fa fa-bars"></i></div>'+

'<div class="editor"><a href="#" onclick="editthisElement('+edat.ID+'); return false;"><i class="fa fa-pencil"></i></a></div>'+
'<div class="trash rightbutton"><a class="" href="#" onclick="confirmdeleteElement('+edat.ID+'); return false;">'+
'<i class="fa fa-trash"></i></a></div>'+
'');
		});
	});
window.hideelementbuttons();
}







//////EDIT PAGE/////////


window.editthisPage = function(pageID){
	$("#pagecontrols"+pageID).html(''+
'<div style="border-bottom: solid 1px #fff; color:fff;font-family:helvetica ">Page Settings<div>'+
'<form ID ="editbox"></form>');

var url="data.php?q=pages&s=ID&x="+pageID;
	$.getJSON(url,function(json){
		$.each(json.data,function(i,dat){
	$("#editbox").append(''+
'Title<br><input type="text" name="title" value="'+dat.title+'" placeholder="Page Title"><br>'+
'Background Color<br><input type="text" name="background" placeholder="Background Color"><br>'+
'<input type="button" value="Save"> <a style="font-size: 14px; margin-right: 20px; color: #ddd;" href="#" onclick="canceldeletePage('+pageID+'); return false;">Cancel</a> '+
'').fadeIn();

});
});


}






///////EDIT ELEMENT///////





window.editthisElement= function(elementID){
	$("#page").append('<div id="lightbox_element'+elementID+'"></div>');
	$("#lightbox"+elementID).html(''+
'<form ID ="editbox">Edit Element<br>'+
'<input type="text" name="title" placeholder="Title">'+
'</div>');

}


//////ADDFORMS

window.newPage = function(){
window.hideaddboxes();
$('#newbox').html(''+
'<form ID = "addform">'+
'<input type= "button" onclick="window.hideaddboxes();" value= "x"  id="hidex" class="hidex"><br>'+
'<input type="text" name="title" placeholder="Page Title">'+
'<input type="hidden" name="q" value= "pages">'+
'<input type="hidden" name="a" value= "newpage">'+
'<br><input type="button" onclick="addtopage(); return false;" name="submit" value ="Add Page">'+
'</form>'+
'');
$("#newbox").css('display','block');

}









//////////////////////////////////////////////////////////
///NEW ELEMENT FORM
window.newElement = function(pageID, container){
window.hideaddboxes();
 var container='mainpage'; 
$('#newbox').html(''+

'<form ID = "addform" enctype="multipart/form-data">'+
'<input type= "button" onclick="window.hideaddboxes();" value= "x" id="hidex" class="hidex"><br>'+

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
'<br><div class="formcontents"></div></form>');

$("#newbox").css('display','block');

}



//////////////////////////////////////////////////////////
///NEW PHOTO FORM
window.newPhoto= function(pageID, container){
$('#addform > .formcontents').html(''+
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

$('#addform > .formcontents').html(''+

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
/*
//////////////////////////////////////////////////////////
///NEW DIV FORM

window.newDiv = function(pageID, container){

$('#addform' > .formcontents').html(''+

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

$('#addform > .formcontents').html(''+
'<input type="text" name="title" placeholder="Title for Box">'+
'<input type="hidden" name="type" value= "box">'+
'<input type="hidden" name="a" value= "newelement">'+
'<input type="hidden" name="container" value= "'+container+'">'+
'<input type="hidden" name="q" value= "elements">'+
'<input type="hidden" name="pageID" value= "'+pageID+'">'+
'<input type="button" onclick="addtopage('+pageID+');" name="submit" value ="Add Box">');

}

*/

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
window.hideaddboxes();
			});

}

window.hideaddboxes= function(){

$('.newelement').html('');
$('#newbox').html('').css('display','none');
$('.newpage').html('');

}




////////////////////////////////////////////////////////
///////DELETE AJAX TO CONFIRM.PHP

window.confirmdeletePage = function(pageID){
$("#pagecontrols"+pageID).html('Delete Page? <br><input type="button" value= "Yes" onclick="deletePage('+pageID+');">'+
' <input type="button" value= "Cancel" onclick="canceldeletePage('+pageID+');">').css('background','#f44');
}
window.canceldeletePage = function(pageID){
$("#pagecontrols"+pageID).html(''+
'<div id="edit'+pageID+'" class="editpage"><a href="#" onclick="editthisPage('+pageID+'); return false;"><i class="fa fa-gear"></i></a></div>'+
'<div class="addtopage"><a href="#" onclick="newElement('+pageID+'); return false"><i class="fa fa-plus-circle"></i></a></div>'+
'<div class="editpage"><a href="#" onclick="showEdit('+pageID+'); return false"><i class="fa fa-pencil"></i></a></div>'+

'<div class="deletepage"><a href="#" onclick="confirmdeletePage('+pageID+'); return false;"><i class="fa fa-times"></i></a></div>').css('background','none');
	

}

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

window.canceldeleteElement = function(pageID){
	$("#edit"+pageID).html(''+
'<div class="mover"><i class="fa fa-hand"></i></div>'+

'<div class="stacker"><i class="fa fa-bars"></i></div>'+

'<div class="editor"><a href="#" onclick="editthisElement('+pageID+'); return false;"><i class="fa fa-pencil"></i></a></div>'+
'<div class="trash rightbutton"><a class="" href="#" onclick="confirmdeleteElement('+pageID+'); return false;">'+
'<i class="fa fa-trash"></i></a></div>'+
'').css('background','#333');
}

window.confirmdeleteElement = function(pageID){
$("#edit"+pageID).html('Delete now?<br><form><input type="button" value= "Yes" onclick="deleteElement('+pageID+');">'+
'<input type="button" value= "Cancel" onclick="canceldeleteElement('+pageID+');"></form>').css('background','#f44');;
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



$(document).ready(function(){
$("#editnow").click();

});




