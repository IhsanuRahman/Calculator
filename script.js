let result=[];
function BTClick(val){
   
    if(isNaN(result[result.length-1])||result.length==-1){
     document.getElementById("screen").value=val
     result+= val;
    }else{
    document.getElementById("screen").value+=val;
    result+=val
}console.log(result+"h")
}
function clearTXT(){
    document.getElementById("screen").value=""
    result=""
    document.getElementById("operator").innerHTML=""
}

function equal(){
    console.log(result)
    document.getElementById("screen").value=eval(result);   
}
function operatorClick(val){
    var l=(result.length)-1;
    console.log(result+"h")
       if(isNaN(result[l])&&l>=0){
        
        result= result.slice(0, -1);
        result+=val
           console.log(result)
           document.getElementById("operator").innerHTML=val
       
        
       }else if(l>=0){
       result+= val;
              
    document.getElementById("operator").innerHTML=val
    console.log(result+"h")

    }

}
