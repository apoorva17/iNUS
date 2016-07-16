var xmlhttp = new XMLHttpRequest();
var url = "http://api.nusmods.com/2016-2017/moduleList.json";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<option value ="' + arr[i].ModuleCode + '">' + '</option>';
  }
  document.getElementById("mod").innerHTML = out;
}
