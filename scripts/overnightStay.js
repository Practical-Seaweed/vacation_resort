"use strict";

window.onload = function () {

    let estimateForm = document.querySelector("#estimateStayForm");

    estimateForm.addEventListener("submit", estimateStay);

    console.log("hello?? testing??")

}

function estimateStay(event) {
    event.preventDefault();

    let estimateForm = event.target;

    let roomTotal = Number(estimateForm.numberofNights.value) * getRoomRate(estimateForm.checkInDate.value, estimateForm.roomType.value);

    console.log(roomTotal);


    console.log("you submitted the the form");

    //lets see the date they submitted
    console.log(estimateForm.checkInDate.value)



    let message = `
    <div>The original room cost: $${roomTotal.toFixed(2)} </div>
    <div>The discount, if any: </div>
    <div>The discounted room cost: </div>
    <div>The tax</div>
    <div>The total cost of the stay: </div>
    `

    document.querySelector("#results").innerHTML = message;
}


//this is the function you put the logic to determine the actual rate
function getRoomRate(checkInDate, roomType) {

    let checkInMonth = new Date(checkInDate).getMonth();

    // this works for June - August per night. gotta figure out how to do for rest of year

    if (checkInMonth >= 5 && checkInMonth <= 7) {
        if (roomType === "queen") {
            return 250;
        }
        else if (roomType === "king") {
            return 250;
        }
        else if (roomType === "suite") {
            return 350;
        }
        else {
            return 150;
        }
    } else {
        if (roomType === "queen") {
            return 150;
        }
        else if (roomType === "king") {
            return 150;
        }
        else {
            roomType === "king"
        }
        return 210;
    }



}