var answers=[];
var equations=[];
var count=0;
var answer=document.querySelector('.inputbox');
var equation=document.querySelector('.inputbox2');
function getNum(val)
{
    if(answer.value==0)
    answer.value=val;
    else
    answer.value+=val;
}

function Reset()
{
    answer.value=0;
    equation.value='';
    
}
function ans()
{
   equation.value=answer.value+"=";
   equations.push(equation.value);
   answer.value=eval(answer.value);
   answers.push(answer.value);
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
    history.innerHTML = ' <button><i class="fa-solid fa-trash" onclick="clearHistory()"></i></button>';

    for(let i=0; i<answers.length;i++)//(0<3)(1<3)(2<3)(3<3)
    {
        history.innerHTML += '<div class="section"><h6>'+ equations[i]+ ' </h6><h6>'+answers[i]+'</h6></div>';
    }
}

function backSpace()
{
    let ans=answer.value/10;
    if(ans!=0)
      answer.value=Math.trunc(ans);
    else
      answer.value=0
}

  
  
  

function clearHistory()
{
  history=document.querySelector('.history').innerText='';
  answers=[];
  equations=[];
}
console.log(equations);