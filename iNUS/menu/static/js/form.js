function addRow() {

    var table = document.getElementById("table")
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td"); 
    var td4 = document.createElement("td"); 

    td1.innerHTML = document.getElementById("inp1").value;
    td2.innerHTML  = document.getElementById("inp2").value;
    td3.innerHTML  = document.getElementById("inp3").value;
    td4.innerHTML = '<button type = "button" onclick="deleteRow(this)" class= "btn btn-primary">Remove</button>';

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    table.children[0].appendChild(row);

    document.getElementById("inp1").value = " ";
    document.getElementById("inp2").value = "A+";
    document.getElementById("inp3").value = " ";
}

function deleteRow(node){    
    r=node.parentNode.parentNode;
    r.parentNode.removeChild(r);
}   


$(document).ready(function(){
    
    //Error handling
    var code = document.getElementById("inp1").value;
    if (code == null) {
        alert("Module Code missing!");
    }
    var grade = document.getElementById("inp2").value;
    if (grade == null) {
        alert("Grade missing!");
    }
    var mc = document.getElementById("inp3").value;
    if (mc == null) {
        alert("MC missing!");
    }


    //Add Semester
    var $clone1 = $(".form").clone();
    $clone1.find("legend h3").text('Semester 2');

    var $clone2 = $(".form").clone();
    $clone2.find("legend h3").text('Special Term 1');
    

    var $clone3 = $(".form").clone();
    $clone3.find("legend h3").text('Special Term 2');
    
    
    ($clone1).appendTo(".col-sm-8");
    ($clone2).appendTo(".col-sm-8");
    ($clone3).appendTo(".col-sm-8");

});

$(document).ready(main);


