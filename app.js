

// // /// CHAPTER 31-34  /// //

// // Q NO. 1 ///////

// var date = newDate();
// function dateNow() {
//     document.write(date);
// }

// // Q NO. 2 ////

// var months = ["January", "Febuary","March", "April", "May", "June", "July", "August", "September", "Octouber", "November", "Deccember" ];
// var today = newDate();
// function currentMonth() {
// alert (months[today.getMonth()]);
// }


// // Q NO. 3  //////

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuarday"];
// var today = newDate();

// function dayNow() {
//     alert(days[today.getDay()]);
// }


// // Q NO. 4 ////

// // var funday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // var lazyday = new Date();

// // function funday2(){
// //     if(lazyday == funday[lazyday.getDay(0,6)]){
// //         alert("It's Funday");
// //     }
// // }

// // if (lazyday==funday[lazyday.getDay()]) {
// //     alert("It's Funday");
// // }

// // Q NO. 5  ///////

// var now = newDate();
// var currentDate = now.getDate();
// function mntEnd() {
//     if (currentDate <= 15) {
//         alert("First fifteen days of the month");
//     }
//     else{
//         alert("Last fifteen days of the month");
//     }
// }

// // Q NO. 6 ////

// var now = newDate();
// document.write("<br><br>Current Date: " + now);
// document.write("<br>Elapsed MilliSeconds since January 1, 1970: " + now.getTime());
// document.write("<br>Elapsed MilliSeconds since January 1, 1970: " + now.setFullYear(1970));


// // Q NO. 7  /////

// function CheckPm() {
//     var now = new Date();

//     if (now >= 0000 && 1200) {
//         alert("It's AM");
//     }
//     else {
//         alert("It's PM");
//     }
// }
// // Q NO. 8  //////////

// function lastDae() {
//     var laterDate = newDate("Dec 31 2021");
//     alert(laterDate);
// }



// // Q NO. 11  /////

// // var now = new Date();
// // console.log(now);
// // console.log(now.getHours() - 1);


// // Q NO. 12  /////////

// function backInTime(){
//     var now = newDate("dec 5 2015");
//     alert("Current Date: " + now);

//     var years1000Ago = new Date("dec 5 1915");
//     alert("100 years back: " + years1000Ago);

//     alert("Time Travelling Over!");
//     alert("Thank You Come Back Again!");
// }

// // Q NO. 13  //////

// function ageCalculator() {
//     var userAge = +prompt("Enter Your Age:");
//     var now = newDate();
//     var currentYear = now.getFullYear();
//     alert("Your Age: " + userAge);
//     alert("Your Birth Year: " + (currentYear - userAge));
// }


// // Q NO. 14  //////

// function ElectricBill() {
//     var userName = prompt("Enter Your Name:");
//     var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     var today = newDate();

//     var monthNow = months[today.getMonth()];
//     var noOfunits = prompt("Enter Number Of Units");
//     var unitCharges = 16;

//     var netAmount = noOfunits * unitCharges;
//     var lateCharge = 450;
//     var grossAmount = netAmount + lateCharge;

//     document.write("<h1>K-Electric Bill</h1><br><br>");

//     document.write("Customer Name: " + userName);
//     document.write("<br>Month: " + monthNow);
//     document.write("<br>Number Of Units: " + noOfunits);
//     document.write("<br>Charges Per Units: " + unitCharges);
//     document.write("<br>Net Amount Payable (Within Due Date): " + netAmount);
//     document.write("<br>Late Payment Surcharge: " + lateCharge);
//     document.write("<br>Gross Amount Payable (After Due Date): " + grossAmount);
// }
