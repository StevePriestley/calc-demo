//
// Global variables
var digitConstruction = "";
var sumString = "";
var aCalculateItems = [];
//
var oViewPort = $(".viewport-window");
var oCurrentActions = $(".current-action");
//
$(document).ready(function() {
    $('button').on('click', function() {
        var btnValue = $(this).val();
        var existingViewPort = oViewPort.val();
        //
        // Remove placeholder zero
        if (existingViewPort === 0) {
            oViewPort.val();
        }
        //
        // Digits
        if (btnValue >= 0 && btnValue <= 9) {
            processDigitInput(btnValue);
        }
        //
        // Reset function
        else if (btnValue ===  "reset") {
            resetCalulator();
        }
        //
        // Operators and calculating sum
        else {
            if (btnValue === "equals") {
                calculateTotal();
            }
            else
            {
                processOperatorInput(btnValue);
            }
        }
    });
});