javascript: (
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
);