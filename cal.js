
function add()
{  
 var a=Number(document.getElementById("a").value);
 var b=Number(document.getElementById("b").value);
 var c=a+b;
 document.getElementById("c").value=c;
}
function mul()
{
   var a=Number(document.getElementById("a").value);
 var b=Number(document.getElementById("b").value);
 var d=a*b;
 document.getElementById("d").value=d;
     }
     function div()
{
   var a=Number(document.getElementById("a").value);
 var b=Number(document.getElementById("b").value);
 var e=a/b;
 document.getElementById("e").value=e;
     }
     function sub()
{
   var a=Number(document.getElementById("a").value);
 var b=Number(document.getElementById("b").value);
 var f=a-b;
 document.getElementById("f").value=f;
     }
     function clr()
     {var a=Number(document.getElementById("a").value);
     var b=Number(document.getElementById("b").value);
       var g="";
       document.getElementById("a").value=g;
       document.getElementById("b").value=g;
       document.getElementById("c").value=g;
       document.getElementById("d").value=g;
       document.getElementById("e").value=g;
       document.getElementById("f").value=g;
     }