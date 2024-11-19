
let first = document.getElementById('first');
first.addEventListener('click', function() {
    alert("Vítám vás");
});




const second=document.getElementById('second')

second.addEventListener('click', function(){
    second.textContent=("změnilo se")
})




function pridatTri (){
    const input=document.getElementById("uzivatel").value;
    const cislo=parseFloat(input);
    const vysledek=cislo+3;
    document.getElementById("vysledek").textContent=vysledek;  
}



function psani(){
    document.getElementById("zprava").innerHTML="pravě jste klikli na tlačitko";
}

function zdravim(){
    var jmeno=document.getElementById("jmeno").value;
    alert("ahoj"+jmeno);
}



const jajaT=document.getElementById('jaja');
jajaT.addEventListener("mouseover", function(){
    jajaT.textContent="nový text po přejetí myší";
});
jajaT.addEventListener("mouseout", function(){
    jajaT.textContent="původní text";
});




function showTime(){
    const currentTime=new Date();
    document.getElementById("cas").textContent="aktuální čas="+currentTime.toLocaleTimeString();
}




function showDate(){
    const currentDate=new Date();
    document.getElementById("datum").textContent="aktuální datum="+currentDate.toLocaleDateString();
}


//11
function sectiCisla(){
    let cislo1=document.getElementById("cislo1").value;
    let cislo2=document.getElementById("cislo2").value;
    let vysledek1=parseFloat(cislo1)+parseFloat(cislo2);
    document.getElementById("vysledek1").innerHTML="Výsledek je "+vysledek1;
}

document.getElementById('addTask').addEventListener('click', () => {
    const taskINPut=document.getElementById('taskINPut');
    const taskSEznam=document.getElementById('taskSEznam');

    const newTask=document.createElement('link');
    newTask.textContent=taskINPut.value;

    newTask.addEventListener('click', () =>{
        taskSEznam.removeChild(newTask);
    });
    
    taskSEznam.appendChild(newTask);
    taskINPut.value="";
});