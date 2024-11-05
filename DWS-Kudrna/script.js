
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