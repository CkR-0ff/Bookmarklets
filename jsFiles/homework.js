 
//$('table').click(function(event){
    // The event.target property returns which DOM element triggered the     event.
    // 
    //var elem = event.target.nodeName;
    //alert(elem);
    // use this value to display in your way.
 //});
var nDiv = document.createElement('div');
nDiv.style.position = "absolute";
nDiv.style.width = "550px";

document.body.appendChild(nDiv);

document.body.onmousemove = function(event){
    
    nDiv.style.top = event.pageY*1 + 5 + "px";
    nDiv.style.left = event.pageX*1 + 5 + "px";
    var elem = event.target;
    
    var nTab = document.createElement('table');
    var tbdy = document.createElement('tbody');
    nTab.border = "1px";
    nTab.style.width = "545px";
    var ptr;
    var ptd;
    var ptd2;
    for (var att, i = 0, atts = elem.attributes, n = atts.length; i < n; i++){
        att = atts[i];
        ptr = document.createElement('tr');
        ptd = document.createElement('td');
        ptd.appendChild(document.createTextNode('dfsfdsds'));
        ptr.appendChild(ptd);
        ptd2 = document.createElement('td');
        ptd2.appendChild(document.createTextNode('ererwer'));
        ptr.appendChild(ptd2);
        tbdy.appendChild(ptr);
    }
    nTab.appendChild(tbdy);
    nDiv.appendChild(nTab);
    //nDiv.innerText = elem;
    
}