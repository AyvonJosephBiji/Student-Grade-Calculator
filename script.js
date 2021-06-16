function getmarks(){
   var Subject1 = Number(document.getElementById("Subject-1").value);
   var Subject2 = Number(document.getElementById("Subject-2").value);
   var Subject3 = Number(document.getElementById("Subject-3").value);
   var Subject4 = Number(document.getElementById("Subject-4").value);
   var Subject5 = Number(document.getElementById("Subject-5").value);
   var Subject6 = Number(document.getElementById("Subject-6").value);
   var Subject7 = Number(document.getElementById("Subject-7").value);
   var Subject8 = Number(document.getElementById("Subject-8").value);
   var Subject9 = Number(document.getElementById("Subject-9").value);
   var Subject10 = Number(document.getElementById("Subject-10").value);
   var totalMarks = 1000;
   var MarksObtained = Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6 + Subject7 + Subject8 + Subject9 + Subject10;
   var percentage = (MarksObtained / totalMarks) * 100;
   var Grade = "";
   document.getElementById("percentage").innerHTML = percentage + "%";


   if (percentage > 90) {
    Grade = "A+";
   } else if (percentage < 90 && percentage > 80) {
    Grade = "A";
   } else if (percentage < 80 && percentage > 75) {
    Grade = "B+";
   } else if (percentage < 75 && percentage > 70) {
    Grade = "B";
   } else if (percentage < 70 && percentage > 65) {
    Grade = "C+";
   } else if (percentage < 65 && percentage > 58) {
    Grade = "C";
   } else if (percentage < 58 && percentage > 47) {
    Grade = "D+";
   } else if (percentage < 48 && percentage > 30) {
    Grade = "D";
   } else if (percentage < 30 && percentage > 20) {
    Grade = "D-";
   } else if (percentage < 20) {
    Grade = "F";
   }
      
   document.getElementById("Grade").innerHTML = Grade;

   if(percentage < 48) {
       document.getElementById("pass").innerHTML = "Sorry You Are Fail !!! Try Again";
       document.getElementById("pass").style.color = "red";
   } else {
    document.getElementById("pass").innerHTML = "Congratulations !!! You Have Pass";
    
   }
   
}