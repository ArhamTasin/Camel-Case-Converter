const submit1=document.getElementById("btn_convert");
const submit2=document.getElementById("btn_clear");
let displayResult=document.getElementById("result");


function convert(e){
    e.preventDefault();
    let txt=document.getElementById("inTxt").value;
    finaltext="";

    if(txt === "")
    {
        alert("please insert a word")
    }
    else{
        txt=txt.toLowerCase();
        for(let i=0; i<txt.length; i++)
        {
            if(txt[i]===" ")
            {
                finaltext +=txt[i+1].toUpperCase();
                i++;
            }
            else{
                finaltext+=txt[i];
            }

        }
        displayResult.style.visibility="visible";
        displayResult.innerHTML=finaltext;
    }
}




function clear(){
 const txt=document.getElementById("inTxt").value;
 const res=document.getElementById("result").value;

 if(txt!=="" || res!=="")
 {
    document.getElementById("inTxt").value="";
    document.getElementById("result").innerHTML=""
 }
}








submit1.addEventListener("click",convert);
submit2.addEventListener("click",clear);