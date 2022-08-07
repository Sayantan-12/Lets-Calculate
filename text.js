function add(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    return document.getElementById("result").innerHTML=n1+n2;
}

function sub(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    return document.getElementById("result").innerHTML=n1-n2;
}

function clearall(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("result").innerHTML="";
}

function mul(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    return document.getElementById("result").innerHTML=n1*n2;
}

function divide(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    return document.getElementById("result").innerHTML=n1/n2;
}

function ent(){
    if(document.getElementById("result").innerHTML!=""){
        document.getElementById("n1").value=document.getElementById("result").innerHTML;
    }
    document.getElementById("n2").value="";
    document.getElementById("result").innerHTML="";
}