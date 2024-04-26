function printhello(){
  alert("hi how are you");
   var ans1=parseInt(document.querySelector('input[name="Q1"]:checked').value);
   var ans2=parseInt(document.querySelector('input[name="Q2"]:checked').value);
   var ans3=parseInt(document.querySelector('input[name="Q3"]:checked').value);
   var ans4=parseInt(document.querySelector('input[name="Q4"]:checked').value);
   var ans5=parseInt(document.querySelector('input[name="Q5"]:checked').value);
   var ans6=parseInt(document.querySelector('input[name="Q6"]:checked').value);
   var ans7=parseInt(document.querySelector('input[name="Q7"]:checked').value);
   var ans8=parseInt(document.querySelector('input[name="Q8"]:checked').value);
   var ans9=parseInt(document.querySelector('input[name="Q9"]:checked').value);
   var ans10=parseInt(document.querySelector('input[name="Q10"]:checked').value);
  
   var ans11=parseInt(document.querySelector('input[name="Q11"]:checked').value);
   var ans12=parseInt(document.querySelector('input[name="Q12"]:checked').value);
   var ans13=parseInt(document.querySelector('input[name="Q13"]:checked').value);
   var ans14=parseInt(document.querySelector('input[name="Q14"]:checked').value);
   var ans15=parseInt(document.querySelector('input[name="Q15"]:checked').value);
   var ans16=parseInt(document.querySelector('input[name="Q16"]:checked').value);
   var ans17=parseInt(document.querySelector('input[name="Q17"]:checked').value);
   var ans18=parseInt(document.querySelector('input[name="Q18"]:checked').value);
   var ans19=parseInt(document.querySelector('input[name="Q19"]:checked').value);
   var ans20=parseInt(document.querySelector('input[name="Q20"]:checked').value);
   var ans21=parseInt(document.querySelector('input[name="Q21"]:checked').value);
   var ans22=parseInt(document.querySelector('input[name="Q22"]:checked').value);
   var ans23=parseInt(document.querySelector('input[name="Q23"]:checked').value);
   var ans24=parseInt(document.querySelector('input[name="Q24"]:checked').value);
   var ans25=parseInt(document.querySelector('input[name="Q25"]:checked').value);
   
 
   var introvert=(ans1+ans2+ans3+ans4+ans5+ans6+ans7+ans8+ans9+ans10+9)*2;
   var disciplined=((ans11+ans12+ans13+ans14+ans15+11)*3);
   var empathetic=(ans16+ans17+ans18+ans19+ans20+8)*3;
   var mentalStability=(ans21+ans22+ans23+ans24+ans25+6)*3;
   alert(introvert);
   alert(disciplined);
   alert(empathetic);
   alert(mentalStability);

  
   document.getElementById("answer").innerHTML = `<h2>You are ${introvert}% Introvert</h2> <h2>You are ${disciplined}% Disciplined</h2> <h2>You are ${empathetic}% Empathetic</h2>  <h2>You are ${mentalStability}% Mentally Stable</h2>`;

}