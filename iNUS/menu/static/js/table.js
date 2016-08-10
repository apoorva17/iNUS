function addStorage() 
{
   var saveTable = "";


   var rows = document.getElementById("table").rows.length;
   for(var i=0; i < rows; i++){
      saveTable += document.getElementById("table").rows[i].innerHTML + '<ab>';
   }
   saveTable += "newSem";


   var rows1 = document.getElementById("table1").rows.length;
   for(var k = 0; k < rows1; k++){
    saveTable += document.getElementById("table1").rows[k].innerHTML + '<cd>';
 }
 saveTable += "newSem";

 var rows2 = document.getElementById("table2").rows.length;
 for(var i=0; i < rows2; i++){
   saveTable += document.getElementById("table2").rows[i].innerHTML + '<ef>';
} 
saveTable += "newSem";

var rows3 = document.getElementById("table3").rows.length;
for(var i=0; i < rows3; i++){
   saveTable += document.getElementById("table3").rows[i].innerHTML + '<gh>';
} 
saveTable += "newSem";

localStorage.setItem('gradebook',saveTable);

}


window.onload = function() 
{

   var tableData = localStorage.getItem('gradebook');
   //document.getElementById("test").innerHTML = tableData;

   var array = tableData.split("newSem");
   var sem1 = array[0];
   var sem2 = array[1];
   var sp1 = array[2];
   var sp2 = array[3];


   var arr = sem1.split("<ab>");
   var arr1 = sem2.split("<cd>");
   var arr2 = sp1.split("<ef>");
   var arr3 = sp2.split("<gh>");


   for(var j = 0; j < arr.length; j++){
      document.getElementById("table").insertRow(j+1);
      document.getElementById("table").rows[j].innerHTML = arr[j];
   }

   for(var m = 0; m < arr1.length; m++){
      document.getElementById("table1").insertRow(m+1);
      document.getElementById("table1").rows[m].innerHTML = arr1[m];
   }

   for(var m = 0; m < arr2.length; m++){
      document.getElementById("table2").insertRow(m+1);
      document.getElementById("table2").rows[m].innerHTML = arr2[m];
   }

   for(var m = 0; m < arr3.length; m++){
      document.getElementById("table3").insertRow(m+1);
      document.getElementById("table3").rows[m].innerHTML = arr3[m];
   }
   
}