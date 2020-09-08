"use strict";

$(document).ready(function(){
    // setup eventListeners for all of the buttons
    let activeField = "";

    function calculateActiveField() {
        let leftLength = $("#numberInputOne").val().length;
        let midLength = $("#operatorInput").val().length;

        if (leftLength > 0 && midLength > 0) {
            activeField = $("#numberInputTwo");
            return activeField;
        } else {
            activeField = $("#numberInputOne");
            return activeField;
        }
    }

    function inputBackground(active) {
        $("input").removeClass("bg-white");
        active.addClass("bg-white");
    }

    // function clickNumber(){
    //     calculateActiveField();
    //     inputBackground(activeField);
    //     return activeField.val(activeField.val() + $(this).val());
    // }

    // function clickOperator(){
    //     activeField = $("#operatorInput");
    //     inputBackground(activeField);
    //     activeField.val($(this).val())
    // }

    $("#numberOne").click(function(){
        calculateActiveField();
        inputBackground(activeField);
        activeField.val(activeField.val() + $(this).val());
    })

    $("#numberTwo").click(function() {
        calculateActiveField();
        inputBackground(activeField);
        activeField.val(activeField.val() + $(this).val());
    })

    $("#operatorPlus").click(function(){
        activeField = $("#operatorInput");
        inputBackground(activeField);
        $("#operatorInput").val($(this).val())
    })
});
