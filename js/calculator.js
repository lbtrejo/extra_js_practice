"use strict";

$(document).ready(function(){
    // setup eventListeners for all of the buttons

    $("#numberOne").click(function() {
        // let currentValue = $("#numberInputOne").val();
        // let buttonValue = $("#numberOne").val();

        // alert("Number 1 value is: " + buttonValue);
        $("#numberInputOne").val($("#numberInputOne").val() + $("#numberOne").val());
    })
});
