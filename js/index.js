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
   B.value=A.value;
   A.value=eval(A.value);
}
function history()
{
    
}