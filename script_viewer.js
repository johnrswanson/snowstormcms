(function (window) {

window.hello = function(){
	$('#page').html(''+
	'<div ID="title">localhost<div class="edit"></div></div>'+
	'<div ID="header">'+
'<div id="links"></div> '+
'<div class="headeradd"></div>'+
'<div class="newpage"></div>'+
'</div>'+
'<div ID="pagecontent">'+
'<div ID="elementlist"></div>'+
'<div class="elementadd"></div>'+
'<div class="newelement"></div>'+
'</div>'+
'');
}



window.showpages= function(pageID){
$('#links').html('');


	var url="data.php?q=pages";

	$.getJSON(url,function(json){
var pagecount=0;
	$.each(json.data,function(i,dat){
		$('#links').append(''+
		'<div ID="page'+dat.ID+'" class="list">'+
		
'<a href="#'+dat.title+'">'+dat.title+'</a>'+
'<div id="pagecontrols'+dat.ID+'" class="pagecontrols"></div>'+
		'</div>');
pagecount++;
	});
if(pagecount==0){newpage();}
	});



}

window.showelements= function(pageID){
window.hidepagebuttons();
window.pagebutton(pageID);
$("#elementlist").html('');
$(".newelement").html('');
$(".elementadd").html('');
$(".headeradd").html();
$(".newpage").html('');

$('#title > .edit').html(''+
'<a href="#" onclick="showButtons('+pageID+'); showEdit('+pageID+'); return false;">edit page</a>'+
'');
	var url="data.php?q=elements&s=pageID&x="+pageID;
	$.getJSON(url,function(json){
	$.each(json.data,function(i,edat){
		$("#elementlist").append(''+
		'<div ID="element'+edat.ID+'">'+
		'<div ID="edit'+edat.ID+'" class="editbar">'+
		'</div>'+	
		'<div id="photo'+edat.ID+'"></div>'+
		'<div ID ="content'+edat.ID+'">'+
		' '+edat.mytext+''+
		'</div>'+
		'</div>');

		if(edat.type=='photo'){
			$("#photo"+edat.ID).html(''+
			'<img src="./img/full/'+edat.photo+'" width="100%">'+
			'');
}
	});
	});
}


window.pagebutton= function(pageID){
$("#pagecontrols"+pageID).slideDown();

}
window.hidepagebuttons= function(){
$(".pagecontrols").slideUp('');
}

/*
myfonts = array(
'Arial',
'Abril Fatface',
'Alfa Slab One',
'Book Antique', 
'Cabin Sketch',
'Courier',
'Courier New',
'Codystar',
'Fontdiner Swanky',
'Finger Paint',
'Geneva', 
'Georgia', 
'Helvetica', 
'Impact', 
'Londrina Shadow',
'Lucida Sans Unicode', 
'Lucida Grande', 
'Palatino',
'Palatino Linotype',
'Poiret One',
'Rye',
'Special Elite', 
'Tahoma', 
'Times', 
'Times New Roman', 
'Trebuchet',
'Verdana',
'VT323',
'Unkempt'
);

*/


}(this));



