var ElementRemover = function(){/*javascript:	
	if(!dieFunc){
		var dieFunc = function(){
			var curElem = undefined;
			var stl = document.createElement('style');
			var txtnode = document.createTextNode('body:hover .coupontooltip {display: block;} .coupontooltip {display: none; background: #C8C8C8; margin-left: 5px; padding: 0px; position: absolute; z-index: 1000;} .onhvrbrd {border-style: solid; border-width: 1px; border-color:red}');
			stl.appendChild(txtnode);
			document.getElementsByTagName('head')[0].appendChild(stl);
			tooltiper = document.createElement('div');
			tooltiper.className = 'coupontooltip';
			tooltiper.Id = 'coupontooltip';
			document.getElementsByTagName('body')[0].appendChild(tooltiper);
			document.onmousemove = function(e) {  tooltiper.style.left = e.pageX + 'px';
				tooltiper.style.top = e.pageY + 'px';
				tooltiper.innerHTML = 'Tag Type: ' + e.path[0].tagName + '';
				for(var i = 0; i<e.path[0].attributes.length; i++){
					tooltiper.innerHTML += '<br>' + e.path[0].attributes[i].name + ': ' + e.path[0].attributes[i].value;
				}        
			};
			
			document.onmouseover = function(e){  
				e.path[0].classList.add('onhvrbrd');   
				curElem = e.path[0];
			};      
			document.onmouseout = function(e){ 
				e.path[0].classList.remove('onhvrbrd');      
			}; 
			document.onkeyup = function (e) {
				e = e || window.event;
				if(e.keyCode == 46){
					curElem.style.display = 'none';
				}
			};
		};
		dieFunc();
	}else{
		dieFunc = undefined;
		document.onmousemove = function(e) {return true;      };
		document.onmouseover = function(e) {return true;      };
		document.onmouseout = function(e) {return true;      }; 
		document.onkeyup = function(e) {return true;      };
		var thetools = document.getElementsByClassName('coupontooltip'); 
		for(var i = 0; i < thetools.length; i++){ 
			thetools[i].parentElement.removeChild(thetools[i]);
		}    
	}
	document.body.focus();
*/}.toString().slice(14, -4);

var WebmAutoDownload = function(){/*javascript: (
  function() {
    var fileElements = document.getElementsByClassName("file-info");
    var linksArray = [];
    var nameRep = [];
    
    for(var i = 0; i < fileElements.length; i++){
      var infA = fileElements[i].getElementsByTagName("a")[0];
      var full = infA.getElementsByClassName("fnswitch")[0];
      var objkt = "";
      if(full){
	objkt = full.getElementsByClassName("fnfull")[0].innerHTML;
      }else{
	objkt = infA.innerHTML;
      }
      nameRep.push(infA.href.split('/').pop() + "\n" + objkt);
      infA.href = infA.href.substring(5);
      infA.download = objkt;
      infA.click();
    }
    
    var blbText = nameRep.join('\n');
    
    var data = new Blob([blbText], {type: 'text/plain'});
    var textFile = window.URL.createObjectURL(data);
    
    var adload = document.createElement('a');
    adload.href = textFile;
    adload.download = "NamesLinks.txt";
    adload.click();
  }()
);*/}.toString().slice(14, -4);

var DownloadReadyWebm = function(){/*javascript: (
  function() {
    var fileElements = document.getElementsByClassName("file-info");
    var linksArray = [];
    var nameRep = [];
    
    for(var i = 0; i < fileElements.length; i++){
      var infA = fileElements[i].getElementsByTagName("a")[0];
      var full = infA.getElementsByClassName("fnswitch")[0];
      var objkt = "";
      if(full){
	objkt = full.getElementsByClassName("fnfull")[0].innerHTML;
      }else{
	objkt = infA.innerHTML;
      }
      nameRep.push(infA.href.split('/').pop() + "\n" + objkt);
      infA.href = infA.href.substring(5);
      infA.download = objkt+"";;
    }
  }()
);*/}.toString().slice(14, -4);

var CSSHider = function(){/*javascript: (function() {
    for (var i = 0; i < arguments.length; i++) {
        var elems = document.querySelectorAll(arguments[i].toString());
        if (elems) {
            var elArr = Array.from(elems);
            elArr.forEach(function(el, idx, arr) {
                el.style.display = 'none';
            });
        }
    }
}());*/}.toString().slice(14, -4);

function RetJson(){
  var obj = {
    "marklets": [
      {
	"Title": "Element Remover", 
	"Code": ElementRemover, 
	"Description": "When activated the hovered element is outlined in red and his name is shown. On rignt click the element is removed. The functionality is removed on second click of the bookmarklet."
      },
      {
	"Title": "4chan Auto Download", 
	"Code": WebmAutoDownload, 
	"Description": "Automaticaly downloads all post pictures(images, WEBMs, GIFs, etc.) in a 4chan thread. Creates and downloads 'NamesLinks.txt containig the coresponding String names to every code name of every picture.'"
      },
      {
	"Title": "Download-ready 4chan", 
	"Code": DownloadReadyWebm, 
	"Description": "In 4chan thread every picture when clicked opens a 'Save As' dialog with the its page name."
      },
      {
	"Title": "CSS Hider", 
	"Code": CSSHider, 
	"Description": "Hide elements on a page by CSS selector. The selectors are given as params to the anon function."
      }
    ]
    
  };
  return obj;
}
