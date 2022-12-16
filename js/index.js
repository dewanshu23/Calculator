var answers=[];
var equations=[];
var count=0;
var A=document.querySelector('.inputbox');
var B=document.querySelector('.inputbox2');
function getNum(val)
{
    if(A.value==0)
    A.value=val;
    else
    A.value+=val;
}

function Reset()
{
    A.value=0;
    B.value='';
    
}
function ans()
{
   B.value=A.value+"=";
   A.value=eval(A.value);
}
function showHistory()
{
  
  var history=document.querySelector('.history');
  var keys=document.querySelector('#keys.btns');
  count++;

  if(count%2!=0){
    history.style.visibility='visible';
    keys.style.visibility='hidden';
    }
  
  else{
    
    history.style.visibility='hidden';
    keys.style.visibility='visible';

    }

  
  
  
}
function clearHistory()
{
  history=document.querySelector('.history p').innerText='';
}