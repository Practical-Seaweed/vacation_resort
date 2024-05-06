"use strict"

window.onload = function(){

    let estimateForm = document.querySelector("#estimateStayForm");

    estimateForm.addEventListener("submit", estimateStay);

}

function estimateStay(event){
    event.preventDefault();

    let estimateForm = event.target;

    let roomTotal = Number(estimateForm.numberOfNights.value) * getRoomRate(estimateForm.checkInDate.value, estimateForm.roomType.value);

    console.log(roomTotal);


    console.log("you submitted the the form");

    //lets see the date they submitted
    console.log(estimateForm.checkInDate.value)

}


//this is the function you put the logic to determine the actual rate
function getRoomRate(checkInDate, roomType){

    //logic goes here to determine the room rate based on the check-in date and room type
    //for now just return 150

    if(roomType === "suite"){
        return 250;
    }

    return 150;

}