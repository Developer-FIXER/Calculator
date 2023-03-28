let disp = document.getElementById("answer");

function cls(){
    document.getElementById("answer").innerText = "0";
}
function clrall(){
    document.getElementById("answer").innerText = "";
}

function show(n){
    
    if(document.getElementById("answer").innerText == '0'){
        clrall()
        document.getElementById("answer").innerText +=n;

    }
    else{
        document.getElementById("answer").innerText +=n;
        console.log(document.getElementById("answer").innerText)
    }



}

function calc(){
    console.log(eval(document.getElementById("answer")));
    
    try
    {
        document.getElementById("answer").innerText = +eval(document.getElementById("answer").innerText);
    }
    catch(ex)
    {
        document.getElementById("answer").innerText = "error";
    }

}