 
 var testString1 = "javascript: ( \
  function (){ \
    var tooltiper = null; \
    if(!localStorage.RClck){ \
      localStorage.RClck = true; \
      document.oncontextmenu = function(e) { \
	e.preventDefault(); \
	var trg = e.target; \
	console.log('-->', trg); \
	trg.style.display = 'none';\
      };\
      \
      var stl = document.createElement('style');\
      var txtnode = document.createTextNode('body:hover .coupontooltip {display: block;} .coupontooltip {display: none; background: #C8C8C8; margin-left: 5px; padding: 0px; position: absolute; z-index: 1000;} .onhvrbrd {border-style: solid; border-width: 1px; border-color:red}');\
      stl.appendChild(txtnode);\
      document.getElementsByTagName('head')[0].appendChild(stl);\
      \
      tooltiper = document.createElement('div');\
      tooltiper.className = 'coupontooltip';\
      tooltiper.Id = 'coupontooltip';\
      document.getElementsByTagName('body')[0].appendChild(tooltiper);\
      \
      \
      document.onmousemove = function(e) {\
	  tooltiper.style.left = e.pageX + 'px';\
	  tooltiper.style.top = e.pageY + 'px';\
	  tooltiper.innerHTML = 'Tag Type: ' + e.path[0].tagName + '';\
	  for(var i = 0; i<e.path[0].attributes.length; i++){\
	      tooltiper.innerHTML += '<br>' + e.path[0].attributes[i].name + ': ' + e.path[0].attributes[i].value;\
	  }\
	  \
      };\
\
      document.onmouseover = function(e){\
	  e.path[0].classList.add('onhvrbrd');\
      };\
\
      document.onmouseout = function(e){\
	  e.path[0].classList.remove('onhvrbrd');\
      };\
      \
    }else{\
      localStorage.removeItem('RClck');\
      document.oncontextmenu = function(e) {\
	return true;\
      };\
      \
      document.onmousemove = function(e) {\
	return true;\
      };\
      document.onmouseover = function(e) {\
	return true;\
      };\
      document.onmouseout = function(e) {\
	return true;\
      };\
      var thetools = document.getElementsByClassName('coupontooltip');\
      for(var i = 0; i < thetools.length; i++){\
      	thetools[i].parentElement.removeChild(thetools[i]);\
      }\
    }\
  }\
)();";

var testString2 = function(){/*javascript: (
  function (){
    var tooltiper = null;
    if(!localStorage.RClck){
      localStorage.RClck = true;
      document.oncontextmenu = function(e) { 
	e.preventDefault(); 
	var trg = e.target; 
	console.log('-->', trg); 
	trg.style.display = 'none';
      };
      
      var stl = document.createElement('style');
      var txtnode = document.createTextNode('body:hover .coupontooltip {display: block;} .coupontooltip {display: none; background: #C8C8C8; margin-left: 5px; padding: 0px; position: absolute; z-index: 1000;} .onhvrbrd {border-style: solid; border-width: 1px; border-color:red}');
      stl.appendChild(txtnode);
      document.getElementsByTagName('head')[0].appendChild(stl);
      
      tooltiper = document.createElement('div');
      tooltiper.className = 'coupontooltip';
      tooltiper.Id = 'coupontooltip';
      document.getElementsByTagName('body')[0].appendChild(tooltiper);
      
      
      document.onmousemove = function(e) {
	  tooltiper.style.left = e.pageX + 'px';
	  tooltiper.style.top = e.pageY + 'px';
	  tooltiper.innerHTML = 'Tag Type: ' + e.path[0].tagName + '';
	  for(var i = 0; i<e.path[0].attributes.length; i++){
	      tooltiper.innerHTML += '<br>' + e.path[0].attributes[i].name + ': ' + e.path[0].attributes[i].value;
	  }
	  
      };

      document.onmouseover = function(e){
	  e.path[0].classList.add('onhvrbrd');
      };

      document.onmouseout = function(e){
	  e.path[0].classList.remove('onhvrbrd');
      };
      
    }else{
      localStorage.removeItem('RClck');
      document.oncontextmenu = function(e) {
	return true;
      };
      
      document.onmousemove = function(e) {
	return true;
      };
      document.onmouseover = function(e) {
	return true;
      };
      document.onmouseout = function(e) {
	return true;
      };
      var thetools = document.getElementsByClassName('coupontooltip');
      for(var i = 0; i < thetools.length; i++){
      	thetools[i].parentElement.removeChild(thetools[i]);
      }
    }
  }
)();*/
}.toString().slice(14, -4);
