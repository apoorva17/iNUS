function addRow(i) {

    switch(i){
        case 1:
        var table = document.getElementById("table");
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td"); 
        var td4 = document.createElement("td"); 

        td1.innerHTML = document.getElementById("inp1").value;
        td2.innerHTML  = document.getElementById("inp2").value;
        td3.innerHTML  = document.getElementById("inp3").value;
        td4.innerHTML = '<a onclick = "deleteRow(this)"> <span class="glyphicon glyphicon-remove-sign" id = "remove1"></span></a>';

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.children[0].appendChild(row);

        document.getElementById("inp1").value = "";
        document.getElementById("inp2").value = "A+";
        document.getElementById("inp3").value = "4";
        break;
        
        case 2:
        var table = document.getElementById("table1");
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td"); 
        var td4 = document.createElement("td"); 

        td1.innerHTML = document.getElementById("inp4").value;
        td2.innerHTML  = document.getElementById("inp5").value;
        td3.innerHTML  = document.getElementById("inp6").value;
        td4.innerHTML = '<a onclick = "deleteRow(this)"> <span class="glyphicon glyphicon-remove-sign" id = "remove2"></span></a>';

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.children[0].appendChild(row);

        document.getElementById("inp4").value = "";
        document.getElementById("inp5").value = "A+";
        document.getElementById("inp6").value = "4";
        break;

        case 3:

        var table = document.getElementById("table2");
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td"); 
        var td4 = document.createElement("td"); 

        td1.innerHTML = document.getElementById("inp7").value;
        td2.innerHTML  = document.getElementById("inp8").value;
        td3.innerHTML  = document.getElementById("inp9").value;
        td4.innerHTML = '<a onclick = "deleteRow(this)"> <span class="glyphicon glyphicon-remove-sign" id = "remove3"></span></a>';

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.children[0].appendChild(row);

        document.getElementById("inp7").value = "";
        document.getElementById("inp8").value = "A+";
        document.getElementById("inp9").value = "4";
        break;

        case 4:

        var table = document.getElementById("table3");
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td"); 
        var td4 = document.createElement("td"); 

        td1.innerHTML = document.getElementById("inp10").value;
        td2.innerHTML  = document.getElementById("inp11").value;
        td3.innerHTML  = document.getElementById("inp12").value;
        td4.innerHTML = '<a onclick = "deleteRow(this)"> <span class="glyphicon glyphicon-remove-sign" id = "remove4"></span></a>';

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.children[0].appendChild(row);

        document.getElementById("inp10").value = "";
        document.getElementById("inp11").value = "A+";
        document.getElementById("inp12").value = "4";
        break;

        default:
        
    }

}

function deleteRow(node){    
    r=node.parentNode.parentNode;
    r.parentNode.removeChild(r);
}   


//Error handling
function confirmInput1() {
    input1 = document.forms[0].inp1.value.length;
    if(input1 == 0){
        alert("Module code for Semester 1 is missing! Please enter Module Code! :)")
    }
}
function confirmInput4() {
    input4 = document.forms[1].inp4.value.length;
    if(input4 == 0){
        alert("Module code for Semester 2 is missing! Please enter Module Code! :)")
    }
}
function confirmInput7() {
    input7 = document.forms[2].inp7.value.length;
    if(input7 == 0){
        alert("Module code for Special Term 1 is missing! Please enter Module Code! :)")
    }
}
function confirmInput10() {
    input10 = document.forms[3].inp10.value.length;
    if(input10 == 0){
        alert("Module code for Special Term 2 is missing! Please enter Module Code! :)")
    }
}

$(document).ready(function(){

    //Add Semester
    var $clone1 = $(".form").clone();
    $clone1.find("legend h3").text('Semester 2');
    $clone1.find("button").attr("onclick", "addRow(2)");
    $clone1.find("table").attr("id", "table1");
    $clone1.find("input[type = text]").attr("id", "inp4");
    $clone1.find("button").attr("onmousedown", "confirmInput4()");
    $clone1.find("select[name = text]").attr("id", "inp5");
    $clone1.find("select[name = number]").attr("id", "inp6");

    var $clone2 = $(".form").clone();
    $clone2.find("legend h3").text('Special Term 1');
    $clone2.find("button").attr("onclick", "addRow(3)");
    $clone2.find("table").attr("id", "table2");
    $clone2.find("input[type = text]").attr("id", "inp7");
    $clone2.find("button").attr("onmousedown", "confirmInput7()");
    $clone2.find("select[name = text]").attr("id", "inp8");
    $clone2.find("select[name = number]").attr("id", "inp9");
    

    var $clone3 = $(".form").clone();
    $clone3.find("legend h3").text('Special Term 2');
    $clone3.find("button").attr("onclick", "addRow(4)");
    $clone3.find("table").attr("id", "table3");
    $clone3.find("input[type = text]").attr("id", "inp10");
    $clone3.find("button").attr("onmousedown", "confirmInput10()");
    $clone3.find("select[name = text]").attr("id", "inp11");
    $clone3.find("select[name = number]").attr("id", "inp12");
    
    
    ($clone1).appendTo(".col-sm-8");
    ($clone2).appendTo(".col-sm-8");
    ($clone3).appendTo(".col-sm-8");

});

$(document).ready(main);
