let english = Number(prompt("Enter Your English Marks "));
let urdu =    Number(prompt("Enter Your Urdu"));
let computer =Number ( prompt("Enter Your Computer Marks "));
let math =    Number   ( prompt("Enter Your Math Marks "));
let chemistry =  Number(  prompt("Enter Your Chemistry  Marks "));
let totalNum = 500;
let obtMarks= (english+urdu+chemistry+computer+math);

let percentage = (obtMarks/totalNum)*100;
document.write("Obtain Marks " + obtMarks +"<br>");
document.write("Total Number: " + totalNum +"<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%" +"<br>");


let result = (percentage>=95)? "A+" : (percentage>= 90 && percentage<95)? "Grade :A" :
(percentage>= 80 && percentage<90)? "Grade :A-":
(percentage>= 70 && percentage<80)? "Grade :B":
(percentage>= 60 && percentage<70)? "Grade :B-":
(percentage>= 50 && percentage<60)? "Grade :C":
"Fail";
document.write(result);


