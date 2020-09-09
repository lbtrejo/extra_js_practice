"use strict";

$(document).ready(function(){

    const inputOne = $("#numberInputOne");
    const inputTwo = $("#numberInputTwo");
    const inputOperator = $("#operatorInput");
    const successOutput = $("#successAlert");
    const warningOutput = $("#warningAlert");
    const dangerOutput = $("#dangerAlert");
    let activeField = "";

    function calculateActiveField() {
        let leftLength = inputOne.val().length;
        let midLength = inputOperator.val().length;
        // let rightLength = inputTwo.val().length;
        if (leftLength > 0 && midLength > 0) {
            activeField = inputTwo;
            return activeField;
        } else {
            activeField = inputOne;
            return activeField;
        }
    }

    function inputBackground(active) {
        $("input").removeClass("bg-white");
        active.addClass("bg-white");
    }

    function clickNumber(){
        calculateActiveField();
        inputBackground(activeField);
        activeField.val(activeField.val() + $(this).val());
    }

    function clickOperator(){
        activeField = inputOperator
        inputBackground(activeField);
        activeField.val($(this).val());
    }

    function clearInputs(){
        inputOperator.val("");
        inputOne.val("");
        inputTwo.val("");
        activeField = inputOne;
        inputBackground(activeField);
        warningOutput.text("Form cleared!")
    }

    function calculateResult(){
        let leftOperand = parseInt(inputOne.val());
        let rightOperand = parseInt(inputTwo.val());
        let result = 0;
        let resultString = (inputOne.val() + " " + inputOperator.val() + " " + inputTwo.val() + " = ");

        switch (inputOperator.val()) {
            case "+":
                result = (leftOperand + rightOperand);
                return successOutput.text(resultString + result);

            case "-":
                result = (leftOperand - rightOperand);
                return successOutput.text(resultString + result);

            case "*":
                result = (leftOperand * rightOperand);
                return successOutput.text(resultString + result);

            case "/":
                result = (leftOperand / rightOperand);
                return successOutput.text(resultString + result);
            default:
                console.log("Something isn't behaving")
        }
    }

    $("#numberOne").click(clickNumber);
    $("#numberTwo").click(clickNumber);
    $("#numberThree").click(clickNumber);
    $("#numberFour").click(clickNumber);
    $("#numberFive").click(clickNumber);
    $("#numberSix").click(clickNumber);
    $("#numberSeven").click(clickNumber);
    $("#numberEight").click(clickNumber);
    $("#numberNine").click(clickNumber);
    $("#numberZero").click(clickNumber);

    $("#operatorPlus").click(clickOperator)
    $("#operatorMinus").click(clickOperator);
    $("#operatorMultiply").click(clickOperator);
    $("#operatorDivide").click(clickOperator);

    $("#clearFields").click(clearInputs);
    $("#operatorEquals").click(calculateResult);

});
