
var myMenu = new Object();
myMenu.menuImageSRC="/images/menu/";
myMenu.hideDelay=700;
myMenu.numberOfMenus=11;
myMenu.delay='';

function lowerImage(name) { 
myMenu.delay?clearTimeout(myMenu.delay):false;
hideAllSubMenus();
document.images[name]?document.images[name].src=myMenu.menuImageSRC+"menu"+name.substring(5)+"_lower.gif":false;
element=document.getElementById("submenu"+parseInt(name.substring(5)-0)); 
feature=new dynamicStyles(element); 
feature.setVisibility('visible') }

function upperImage(name) { 
document.images[name].src=myMenu.menuImageSRC+"menu"+name.substring(5)+"_upper.gif" }

function upperImages() { 
for(var i=0; i<myMenu.numberOfMenus; i++) {
i<10?imageNumber="0"+i:imageNumber=i;
document.images["image"+imageNumber]?document.images["image"+imageNumber].src=myMenu.menuImageSRC+"menu"+imageNumber+"_upper.gif":false } }

function hideAllSubMenus() { 
upperImages();
i=1; 
while(i<myMenu.numberOfMenus) { 
element=document.getElementById("submenu"+i); 
feature=new dynamicStyles(element); 
feature.setVisibility('hidden') 
i++} }

function hideSubMenu() {
myMenu.delay = setTimeout("hideAllSubMenus()",myMenu.hideDelay); 
return false }

function cancelHideSubMenu() {
myMenu.delay?clearTimeout(myMenu.delay):false }

function initializeSubMenus() {
if(ie) {
for(var i=1; i<myMenu.numberOfMenus; i++) {
document.all["submenu"+i].onmouseover=cancelHideSubMenu;
document.all["submenu"+i].onmouseout=hideSubMenu } }
else if(nc&&bn>=5) { 
for(i=1; i<myMenu.numberOfMenus; i++) {
element=document.getElementById("submenu"+i);
element?element.addEventListener("mouseover",cancelHideSubMenu,false):false;
element?element.addEventListener("mouseout",hideSubMenu,true):false } }
else if(nc) {
for(var i=1; i<myMenu.numberOfMenus; i++) {
document.layers["submenu"+i].onmouseover=cancelHideSubMenu;
document.layers["submenu"+i].onmouseout=hideSubMenu } } }



/*
     FILE ARCHIVED ON 10:59:27 Jun 25, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:48:06 Feb 17, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 121.159 (3)
  esindex: 0.01
  captures_list: 152.572
  CDXLines.iter: 19.083 (3)
  PetaboxLoader3.datanode: 143.07 (4)
  exclusion.robots: 0.226
  exclusion.robots.policy: 0.212
  RedisCDXSource: 6.736
  PetaboxLoader3.resolve: 61.676
  load_resource: 144.719
*/