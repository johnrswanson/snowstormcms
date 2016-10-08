(function (window) {

window.hello = function(){
	$('#page').html(''+
	'<div ID="title">localhost<div class="edit"></div></div>'+
	'<div ID="header">'+
'<div id="burger"><a href="#" onclick="showmenu(); return false;"><i class="fa fa-bars"></i></a></div> '+
'<div id="links"></div> '+
'<div class="headeradd"></div>'+
'<div class="newpage"></div>'+
'</div>'+
'<div ID="pagecontent">'+
'<div ID="elementlist"></div>'+
'<div class="newelement"></div>'+
'</div>'+
'');
}


window.showmenu= function(pageID){
$("#links").toggle(1000);
}


window.showpages= function(pageID){
$('#links').html('');


	var url="data.php?q=pages";

	$.getJSON(url,function(json){
var pagecount=0;
	$.each(json.data,function(i,dat){
var title=dat.title;
if(title==''){title="Untitled page";}
		$('#links').append(''+
		'<div ID="page'+dat.ID+'" class="list">'+
		
'<a href="#'+dat.title+'">'+title+'</a>'+
'<div ID="pagecontrols'+dat.ID+'" class="pagecontrols"></div>'+
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
$(".elementadd").html('');
$(".headeradd").html();
$(".newpage").html('');


	var url="data.php?q=elements&s=pageID&x="+pageID;
	$.getJSON(url,function(json){
	$.each(json.data,function(i,edat){
		$("#elementlist").append(''+
		'<div ID="element'+edat.ID+'" onclick ="window.elementbutton('+edat.ID+');">'+
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

/////edit button click function here
//$("element'+edat.ID+'").click(function()
//{
//window.elementbutton('+edat.ID+');
//}
//);
	});
	});
window.hideelementbuttons();
}


window.pagebutton= function(pageID){
$("#pagecontrols"+pageID).slideDown(0);

}




window.elementbutton= function(elementID){
window.hideelementbuttons();
$("#edit"+elementID).slideDown(0);

}



window.hidepagebuttons= function(){
$(".pagecontrols").slideUp(0);
}





window.hideelementbuttons= function(){
$(".editbar").slideUp(0);
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



