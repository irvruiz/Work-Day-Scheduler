$(document).ready(
    console.log('ready!')
);

var inputOne;

//Setting current time as a global function
var currentTime = moment();

function updateClock() {
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
}
setInterval(updateClock, 1000);

var currentHour = Number(currentTime.format('H'));
console.log(typeof(currentHour));

//time block
if(currentHour === 9){
    $('#0').css("background-color", "#ff6961");
} else if(currentHour < 9){
    $('#0').css("background-color", "#77dd77");
};
if(currentHour === 10){
    $('#1').css("background-color", "#ff6961");
} else if(currentHour < 10){
    $('#1').css("background-color", "#77dd77");
};
if(currentHour === 11){
    $('#2').css("background-color", "#ff6961");
} else if(currentHour < 11){
    $('#2').css("background-color", "#77dd77");
};
if(currentHour === 12){
    $('#3').css("background-color", "#ff6961");
} else if(currentHour < 12){
    $('#3').css("background-color", "#77dd77");
};
if(currentHour === 13){
    $('#4').css("background-color", "#ff6961");
} else if(currentHour < 13){
    $('#4').css("background-color", "#77dd77");
};
if(currentHour === 14){
    $('#5').css("background-color", "#ff6961");
} else if(currentHour < 14){
    $('#5').css("background-color", "#77dd77");
};
if(currentHour === 15){
    $('#6').css("background-color", "#ff6961");
} else if(currentHour < 15){
    $('#6').css("background-color", "#77dd77");
};
if(currentHour === 16){
    $('#7').css("background-color", "#ff6961");
} else if(currentHour < 16){
    $('#7').css("background-color", "#77dd77");
};
if(currentHour === 17){
    $('#8').css("background-color", "#ff6961");
} else if(currentHour < 17){
    $('#8').css("background-color", "#77dd77");
};

//button 0 (9am time slot)
$('#btn0').click(function() {
    inputZero = document.getElementById("0").value;
    console.log(inputZero);
    localStorage.setItem('9AM', JSON.stringify(inputZero));
    });

var save9AM = JSON.parse(localStorage.getItem('9AM'));
console.log(save9AM);

document.getElementById("0").value = save9AM;

//button 1 (10am time slot)
$('#btn1').click(function() {
    inputOne = document.getElementById("1").value;
    localStorage.setItem('10AM', JSON.stringify(inputOne));
    });

var save10AM = JSON.parse(localStorage.getItem('10AM'));

document.getElementById("1").value = save10AM;

//button 2 (11am time slot)
$('#btn2').click(function() {
    inputTwo = document.getElementById("2").value;
    localStorage.setItem('11AM', JSON.stringify(inputTwo));
    });

var save11AM = JSON.parse(localStorage.getItem('11AM'));

document.getElementById("2").value = save11AM;

//button 3 (12pm time slot)
$('#btn3').click(function() {
    inputThree = document.getElementById("3").value;
    localStorage.setItem('12PM', JSON.stringify(inputThree));
    });

var save12PM = JSON.parse(localStorage.getItem('12PM'));

document.getElementById("3").value = save12PM;

//button 4 (1pm time slot)
$('#btn4').click(function() {
    inputFour = document.getElementById("4").value;
    localStorage.setItem('1PM', JSON.stringify(inputFour));
    });

var save1PM = JSON.parse(localStorage.getItem('1PM'));

document.getElementById("4").value = save1PM;

//button 5 (2pm time slot)
$('#btn5').click(function() {
    inputFive = document.getElementById("5").value;
    localStorage.setItem('2PM', JSON.stringify(inputFive));
    });

var save2PM = JSON.parse(localStorage.getItem('2PM'));

document.getElementById("5").value = save2PM;

//button 6 (3pm time slot)
$('#btn6').click(function() {
    inputSix = document.getElementById("6").value;
    localStorage.setItem('3PM', JSON.stringify(inputSix));
    });

var save3PM = JSON.parse(localStorage.getItem('3PM'));

document.getElementById("6").value = save3PM;

//button 7 (4pm time slot)
$('#btn7').click(function() {
    inputSeven = document.getElementById("7").value;
    localStorage.setItem('4PM', JSON.stringify(inputSeven));
    });

var save4PM = JSON.parse(localStorage.getItem('4PM'));

document.getElementById("7").value = save4PM;

//button 8 (5pm time slot)
$('#btn8').click(function() {
    inputEight = document.getElementById("8").value;
    localStorage.setItem('5PM', JSON.stringify(inputEight));
    });

var save5PM = JSON.parse(localStorage.getItem('5PM'));

document.getElementById("8").value = save5PM;