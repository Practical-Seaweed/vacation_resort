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

    // tax rate
    let taxrate = 12 / 100;

    let taxAlways = 12;

    //discounts
    // let discountApply = taxrate - (checkDiscounts(estimateForm)); didn't work
    let discountApply = (roomTotal * checkDiscounts(estimateForm)); // this will get us our discount number
    let discountsubtract = (roomTotal - discountApply);// we subtract price with discount
    let discountAfterTax = (discountsubtract * taxrate);// this gives us tax after discount
    let discountTotal = (roomTotal - discountApply + discountAfterTax);

    // discount choosing
    let discountIchooseYOU = (discountChoosing(estimateForm));


    // total cost
    let theTotal = (discountTotal)

    console.log(roomTotal);


    console.log("you submitted the the form");

    //lets see the date they submitted
    console.log(estimateForm.checkInDate.value)



    let message = `
    <div>The original room cost: $${roomTotal.toFixed(2)} </div>
    <div>The discount, if any: %${discountIchooseYOU}</div>
    <div>The discounted room cost: $${discountsubtract.toFixed(2)} </div>
    <div>The tax: %${taxAlways}</div>
    <div>The total cost of the stay: $${theTotal.toFixed(2)} </div>
    `

    document.querySelector("#results").innerHTML = message;
}


//this is the function you put the logic to determine the actual rate
function getRoomRate(checkInDate, roomType) {

    let checkInMonth = new Date(checkInDate).getMonth();

    // this works for June - August per night. gotta figure out how to do for rest of year
    // heh >:)

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



// trash
function checkDiscounts (estimateForm){

    let discountNone = 0;

    let discountAaa = (10 / 100);

    let discountMilitary = (20 / 100);

    if (estimateForm.none.checked) {
        return discountNone;
    }else if (estimateForm.aaa.checked) {
        return discountAaa;
    }else if (estimateForm.military.checked) {
        return discountMilitary
    }
}

function discountChoosing (estimateForm){
    if (estimateForm.none.checked) {
        return 0;
    }else if (estimateForm.aaa.checked) {
        return 10;
    }else if (estimateForm.military.checked) {
        return 20;
    }
}
