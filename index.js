let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL" ;

fetch(url).then(res=>{
return res.json();

})
.then(data=> {
    let dolar = data.USDBRL.high;
    

})


function calc(){
    let real = document.getElementById("text").value;
    console.log(real);
    fetch(url).then(res=>{
        return res.json();
        
        })
        .then(data=> {
            let dolar = data.USDBRL.high;
            
            document.getElementById("result").innerHTML =`The value in brazilian reals you need is
             is ${Math.ceil(real*dolar*100)/100}`

        })



}




