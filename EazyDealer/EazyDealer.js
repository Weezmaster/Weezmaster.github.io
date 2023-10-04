function CourseFunction(){
  let gramsVar = document.getElementById('grams').value;
  let priceVar = document.getElementById('price').value;
  let courseVar = document.getElementById('course').value;
  let result;

  if (     gramsVar&&priceVar&&courseVar!=="" || 
           gramsVar===""&&priceVar==="" || 
           priceVar===""&&courseVar==="" || 
           gramsVar===""&&courseVar==="" ){
  document.getElementById('result').value = "2 Values";
  document.getElementById('resum').textContent = "You fucked up!";
  }
  else if (courseVar===""){
    result = (Number(priceVar)/Number(gramsVar)).toFixed(2);
    document.getElementById('result').value = result;
    document.getElementById('resum').textContent = "Your Course Is:";
    document.getElementById('calc').value = priceVar + " / " + gramsVar;
  }
  else if(priceVar===""){
    result = (Number(gramsVar)*Number(courseVar)).toFixed(2);
    document.getElementById('result').value = result;
    document.getElementById('resum').textContent = "Your Price Is:";
    document.getElementById('calc').value = gramsVar + " * " + courseVar;
  }
  else if(gramsVar===""){
    result = (Number(priceVar)/Number(courseVar)).toFixed(2);
    document.getElementById('result').value = result;
    document.getElementById('resum').textContent = "Grams:";
    document.getElementById('calc').value = priceVar + " / " + courseVar;
  }
}

function disableText(){
  let gramsVar = document.getElementById('grams').value;
  let priceVar = document.getElementById('price').value;
  let courseVar = document.getElementById('course').value;

  if (gramsVar!=="" && priceVar!==""){
    document.getElementById("course").disabled = true;
  }
  else if (priceVar!==""&&courseVar!==""){
    document.getElementById("grams").disabled = true;
  }
  else if (courseVar!==""&&gramsVar!==""){
    document.getElementById("price").disabled = true;
  }
  else{
    document.getElementById("course").disabled = false;
    document.getElementById("grams").disabled = false;
    document.getElementById("price").disabled = false;
  }
}