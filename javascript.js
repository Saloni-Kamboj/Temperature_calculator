
function cal()
{
   
   
    var v1=document.getElementById('input1').value;
    var v2=document.getElementById('input2').value;
    var ans=document.getElementById('val').value;
    if(ans=='e'|| ans=='')
    {
        alert("Temperature value should not be empty");
    }
    if(ans!='')
    {
        document.getElementById('res').style.visibility='visible';
        document.getElementById('hide').style.height='600px';
       
    }
   
    if (v1=='value 1' && v2=='value 1')
    {
        
        document.getElementById('ans1').innerHTML= ans +'°C';
        document.getElementById('div1').innerHTML='No Formula Used';
        

    }
    if (v1=='value 1' && v2=='value 2')
    {
        
        let fahr= (9/5)*ans+32; 
        document.getElementById('ans1').innerHTML= fahr.toFixed(4) +'°F';
        document.getElementById('div1').innerHTML='°F = (°C × (9/5)) + 32';


    }
    if (v1=='value 1' && v2=='value 3')
    {
        
        let kelvin= Number(ans) + 273.15 ;
        document.getElementById('ans1').innerHTML= kelvin.toFixed(4) +'K';
        document.getElementById('div1').innerHTML='K = °C + 273.15';

    }
    if (v1=='value 1' && v2=='value 4')
    {
        
        let rankine= ans* (9/5) + 491.67;
        document.getElementById('ans1').innerHTML= rankine.toFixed(4) +'°R';
        document.getElementById('div1').innerHTML='°R = (°C × (9/5)) + 491.67';

    }
    if (v1=='value 2' && v2=='value 2')
    {
        
        document.getElementById('ans1').innerHTML= ans +'°F';
        document.getElementById('div1').innerHTML='No Formula Used';
        
       

    }
    if (v1=='value 2' && v2=='value 1')
    {
        let celsius=(ans-32)* (5/9);
        document.getElementById('ans1').innerHTML= celsius.toFixed(4) +'°C';
        document.getElementById('div1').innerHTML='°C = (°F − 32) × (5/9)';
        

    }
    if (v1=='value 2' && v2=='value 3')
    {
        let kelvin=(Number(ans) + 459.67)*(5/9);
        document.getElementById('ans1').innerHTML= kelvin.toFixed(4) +'K';
        document.getElementById('div1').innerHTML='K = (°F + 459.67) × (5/9)';

    }
    if (v1=='value 2' && v2=='value 4')
    {
        let rankine=Number(ans) + 459.67;
        document.getElementById('ans1').innerHTML= rankine.toFixed(4) +'°R';
        document.getElementById('div1').innerHTML='°R = °F + 459.67';

    }
    if (v1=='value 3' && v2=='value 3')
    {
        
        document.getElementById('ans1').innerHTML= ans +'K';
        document.getElementById('div1').innerHTML='No Formula Used';
       

    }
    if (v1=='value 3' && v2=='value 1')
    {
        let celsius=Number(ans) - 273.15;
        document.getElementById('ans1').innerHTML= celsius.toFixed(4) +'°C';
        document.getElementById('div1').innerHTML='°C = K - 273.15';

    }
    if (v1=='value 3' && v2=='value 2')
    {
        let fahr= (ans * (9/5)) - 459.67;
        document.getElementById('ans1').innerHTML= fahr.toFixed(4) +'°F';
        document.getElementById('div1').innerHTML='°F = (K × (9/5)) - 459.67';

    }
    if (v1=='value 3' && v2=='value 4')
    {
        let rankine= ans* (9/5);
        document.getElementById('ans1').innerHTML= rankine.toFixed(4) +'°R';
        document.getElementById('div1').innerHTML='°R = K × (9/5)';

    }
    if (v1=='value 4' && v2=='value 1')
    {
        let celsius= (ans * (5/9)) - 273.15;
        document.getElementById('ans1').innerHTML= celsius.toFixed(4) +'°C';
        document.getElementById('div1').innerHTML='°C = (°R × (5/9)) - 273.15';

    }
    if (v1=='value 4' && v2=='value 2')
    {
        let fahr= Number(ans)- 459.67;
        document.getElementById('ans1').innerHTML= fahr.toFixed(4) +'°F';
        document.getElementById('div1').innerHTML='°F = °R - 459.67';

    }
    if (v1=='value 4' && v2=='value 3')
    {
        let kelvin=  Number(ans)* (5/9);
        document.getElementById('ans1').innerHTML= kelvin.toFixed(4) +'K';
        document.getElementById('div1').innerHTML='K = °R × (5/9)';

    }
    if (v1=='value 4' && v2=='value 4')
    {
       
        document.getElementById('ans1').innerHTML= ans +'°R';
        document.getElementById('div1').innerHTML='No Formula Used';
       
        

    }
}
function clearall()
{
   
    document.getElementById('val').value='';
    document.getElementById('ans1').innerHTML='';
    document.getElementById('div1').innerHTML='';
    document.getElementById('res').style.visibility='hidden';
    document.getElementById('hide').style.height='300px';
   

     


}
/* page reload after every 30 seconds*/
setTimeout(function()
{
    location.reload();
},30000);

