
myObject.browser=false;
if(bn>=5) { myObject.browser='dom' }
else if(ie&&bn<5) { myObject.browser='ie4' } 
else if(nc&&bn<5) { myObject.browser='nc4' }

function dynamicStyles(object) { 
(myObject.browser=='nc4')?this.element=object:false;
(myObject.browser=='ie4'||myObject.browser=='dom')?this.element=object.style:false; 
this.object=object }

dynamicStyles.prototype.element=null;
dynamicStyles.prototype.object=null;

function getLayer(layer,id) { 
for(var i=0; i<layer.layers.length; ++i) { 
if(layer.layers[i].id&&id==layer.layers[i].id) { 
return layer.layers[i] } 
subLayer=layer.layers[i].document;
object=getLayer(subLayer,id); 
if(object!=null) { 
return object } } 
return null }

function getLayerById(id) { 
return getLayer(this,id) }

(myObject.browser=='ie4')?document.getElementById=new Function("id","return document.all[id]"):false;
(myObject.browser=='nc4')?document.getElementById=getLayerById:false;

function dynamicallySetVisibility(visibility) { 
this.element.visibility=visibility }

function dynamicallySetColor(color) { 
if(myObject.browser=='nc4') { return } // text colors cannot be changed dynamically in nc4
else if(myObject.browser=='ie4'||myObject.browser=='dom') { 
this.element.color=color } }

function dynamicallySetBackgroundColor(color) { 
if(myObject.browser=='nc4') { 
this.element.bgColor=color;
this.object.document.bgColor=color }
else if(myObject.browser=='ie4'||myObject.browser=='dom') { 
this.element.backgroundColor=color } }

function dynamicallyGetLeft(left) { 
if(myObject.browser=='nc4') { return this.element.left } 
else if(myObject.browser=='ie4'||myObject.browser=='dom') { 
if(this.element.left=='') { 
this.element.left=this.object.offsetLeft+'px' }
return parseInt('0'+this.element.left,10) } }

function dynamicallyGetTop(top) { 
if(myObject.browser=='nc4') { return this.element.top } 
else if(myObject.browser=='ie4'||myObject.browser=='dom') { 
if(this.element.top=='') {
this.element.top=this.object.offsetTop+'px' }
return parseInt('0'+this.element.top,10) } }

function dynamicallySetLeft(left) { 
if(myObject.browser=='nc4') { this.element.left = left } 
else if(myObject.browser=='ie4'||myObject.browser=='dom') { 
this.element.left=left+'px' } }

function dynamicallySetTop(top) { 
if(myObject.browser=='nc4') { this.element.top = top } 
else if(myObject.browser=='ie4'||myObject.browser=='dom') { 
this.element.top=top+'px' } }

function dynamicallyMoveBy(x,y) { 
this.moveTo(this.getLeft()+x,this.getTop()+y) }

function dynamicallyMoveTo(x,y) { 
this.setLeft(x); 
this.setTop(y) }

function dynamciallyGetzIndex() { 
return this.element.zIndex }

function dynamciallySetzIndex(z) { 
this.element.zIndex=z }


dynamicStyles.prototype.moveBy=dynamicallyMoveBy;
dynamicStyles.prototype.moveTo=dynamicallyMoveTo;
dynamicStyles.prototype.setBackgroundColor=dynamicallySetBackgroundColor;
dynamicStyles.prototype.setVisibility=dynamicallySetVisibility;
dynamicStyles.prototype.setColor=dynamicallySetColor;
dynamicStyles.prototype.getLeft=dynamicallyGetLeft;
dynamicStyles.prototype.setLeft=dynamicallySetLeft;
dynamicStyles.prototype.getTop=dynamicallyGetTop;
dynamicStyles.prototype.setTop=dynamicallySetTop;
dynamicStyles.prototype.getzIndex=dynamciallyGetzIndex;
dynamicStyles.prototype.setzIndex=dynamciallySetzIndex;


/////  functions  //////
function hideLayer(id) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.setVisibility('hidden') }

function showLayer(id) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.setVisibility('visible') }

function changeColor(id,cl) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.setColor(cl) }

function changeBackground(id,cl) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.setBackgroundColor(cl) }

function changePositionBy(id,tp,lf) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.moveBy(tp,lf) }

function changePositionTo(id,tp,lf) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.moveTo(tp,lf) }

function changezIndexTo(id,z) { 
element=document.getElementById(id); 
feature=new dynamicStyles(element); 
feature.setzIndex(z) }

function initializeBackgrounds() {
if(myObject.browser=='nc4') {
for(var i=0; i<myMenu.length; i+=2) { 
document.layers[myMenu[i]].bgColor=myMenu[i+1] } }
else if(myObject.browser=='ie4'||myObject.browser=='dom') {
for(var i=0; i<myMenu.length; i+=2) { 
changeBackground(myMenu[i],myMenu[i+1]) } } }
/////  functions  /////


