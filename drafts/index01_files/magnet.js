
var myObject = new Object();

// establish os and browser variables 
var myBrowser=new Object();
myBrowser.bn=parseInt(navigator.appVersion); 
myBrowser.an=navigator.appName.toLowerCase(); 
myBrowser.ag=navigator.userAgent.toLowerCase(); 
myBrowser.bn>=5?myBrowser.dom=true:myBrowser.dom=false; 
myBrowser.an.indexOf('exp')>-1?myBrowser.ie=true:myBrowser.ie=false; 
myBrowser.an.indexOf('ets')>-1?myBrowser.nc=true:myBrowser.nc=false;
if(myBrowser.bn<5) { myBrowser.ie?myBrowser.ie4=true:myBrowser.ie4=false; 
myBrowser.nc?myBrowser.nc4=true:myBrowser.nc4=false }
else { myBrowser.nc?myBrowser.nc6=true:myBrowser.nc6=false }
myBrowser.ag.indexOf('win')>-1?myBrowser.win=true:myBrowser.win=false;
myBrowser.ag.indexOf('mac')>-1?myBrowser.mac=true:myBrowser.mac=false;
myBrowser.ag.indexOf('aol')>-1?myBrowser.aol=true:myBrowser.aol=false;

// functions for loading or opening documents from option fields
function loadSelected(hf) { hf?location=hf.options[hf.selectedIndex].value:false; return }
function openSelected(hf,nm,sz) { sz?popSize=sz:popSize=myObject.popStandard; if(sz) { sz.match(/none/)?popSize=0:false } nm?popName=nm:popName="popWindow"; hf?popHref=hf.options[hf.selectedIndex].value:popHref="blank.htm"; myBrowser.nc6?false:hf.selectedIndex=null; popSize?popped=open(popHref,popName,popSize):popped=open(popHref,popName); popped.focus(); return }


/*
     FILE ARCHIVED ON 15:47:47 Aug 17, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:48:05 Feb 17, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 168.99 (3)
  esindex: 0.007
  captures_list: 194.453
  CDXLines.iter: 14.401 (3)
  PetaboxLoader3.datanode: 117.604 (4)
  exclusion.robots: 0.213
  exclusion.robots.policy: 0.2
  RedisCDXSource: 1.863
  PetaboxLoader3.resolve: 81.035 (3)
  load_resource: 75.267
*/