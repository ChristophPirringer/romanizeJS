function Romanize (number) {
    if (!+number)
        return false;
    var digits = String(+number).split(""),
        key = ["","M","MM","MMM","?","?","?","?","?","?",
               "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 4;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        // debugger;
    return roman;
};


$(document).ready(function()  {
  $("form#romanize").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = Romanize(number);

    $(".romanize").text(result);

    $("#result").show();
    event.preventDefault();

  });

});

//
// var romanArray = [];
// var toRoman = {
//
//     analyze: function(number){
//         romanArray = [];
//         if (number >= 1000) {
//             return this.thousands(number);
//         }else if (number >= 100){
//             return this.hundreds(number);
//         }else if (number >= 10) {
//             return this.tens(number);
//         }else{
//             return this.last_number(number);
//         }
//     },
//
//     thousands: function(number){
//         var remainder = number % 1000;
//         var thousands = Math.floor(number / 1000);
//         for(var e = 0; e < thousands; e++) {
//             romanArray.push('M');
//         }
//         return this.hundreds(remainder);
//     },
//
//     hundreds: function(number){
//         var remainder = number % 100;
//         var hundreds = Math.floor(number / 100);
//         if (hundreds === 4){
//             romanArray.push('CD');
//         }else if(hundreds === 9){
//             romanArray.push('CM');
//         }else if(hundreds >= 5 && hundreds < 9){
//             romanArray.push('D');
//             for(var i = 0; i < (hundreds % 5); i++) {
//                 romanArray.push('C');
//             }
//         }else if (hundreds > 0 && hundreds < 4){
//             for(var e = 0; e < hundreds; e++) {
//                 romanArray.push('C');
//             }
//         }else{
//
//         }
//         return this.tens(remainder);
//     },
//
//     tens: function(number){
//         var remainder = number % 10;
//         var tens = Math.floor(number / 10);
//         if (tens === 4){
//             romanArray.push('XL');
//         }else if(tens === 9){
//             romanArray.push('XC');
//         }else if(tens >= 5 && tens < 9){
//             romanArray.push('L');
//             for(var i = 0; i < (tens % 5); i++) {
//                 romanArray.push('X');
//             }
//         }else if (tens > 0 && tens < 4){
//             for(var e = 0; e < tens; e++) {
//                 romanArray.push('X');
//             }
//         }else{
//
//         }
//         return this.last_number(remainder);
//     },
//
//     last_number: function (number){
//         if (number === 4){
//             romanArray.push('IV');
//         }else if(number === 9){
//             romanArray.push('IX');
//         }else if(number >= 5 && number < 9){
//             romanArray.push('V');
//             var remainder = number % 5;
//             for(var i = 0; i < remainder; i++) {
//                 romanArray.push('I');
//             }
//         }else if (number > 0 && number < 4){
//             for(var e = 0; e < number; e++) {
//                 romanArray.push('I');
//             }
//         }else{
//
//         }
//         return romanArray.join('');
//     }
// };
