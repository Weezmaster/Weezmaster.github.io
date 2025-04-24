function RatioFunction(){
    let limit = document.getElementById('in').value;
    let res;
    let pre = 0;
    let now = 1;
    Pattern = '';
// Count Normal Numbers! 
/*for(i=0; i<limit; i++){
   document.getElementById('result').innerHTML += (1+i) +  '</br>' ;
    console.log(i);
}*/

// Count Ratio Numbers:
    for(i=0; i<limit; i++){
        res = pre + now;
            document.getElementById('result').innerHTML += (i+1) + '. ' + res+ ' - ';
        pre = now;
        now = res;

            document.getElementById('result').innerHTML += Numerology(res)+'</br>';
        Pattern +=  Numerology(res) + ', ';
    
    }
//Print number as 1 string
document.getElementById('num').innerHTML += Pattern;
}



function Numerology(res){

//Convert number to string
let newString = Math.abs(res).toString();

//Repeat as long as more than 1 digit
    while(newString.length > 1){
        let sum = 0;
            for(let i = 0; i <newString.length; i++){
                const digit = parseInt(newString[i],10);
            sum += digit;
        }
        newString = sum.toString();
    }
return parseInt(newString,10);


}