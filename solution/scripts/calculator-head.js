//
// Process numeric input
function processDigitInput(btnValue) {
    //
    // Collect existing digits and concatentate
    digitConstruction = digitConstruction + btnValue;
    //
    // Push digit to viewport and working calculation
    oCurrentActions.append(btnValue);
    oViewPort.val(digitConstruction);
}
function processOperatorInput(btnValue) {
    //
    // Store last created number
    aCalculateItems.push(digitConstruction);
    //
    // Destroy last created number
    destroyLastNumber();
    //
    if (btnValue === "*") {
        oCurrentActions.append("x");
        oViewPort.val("x");
    }
    else
    {
        oCurrentActions.append(btnValue);
        oViewPort.val(btnValue);
    }
    //
    // Store operator
    aCalculateItems.push(btnValue);
}
//
// Calculate total
function calculateTotal() {
    aCalculateItems.push(digitConstruction);
    destroyLastNumber();
    //
    // Process array
    sumString = getArrayItems();
    if (sumString != "") {
        //
        // Replace non-digits and operators
        sumString = sumString.replace(/[^0-9%^*\/()\-+.]/g, '');
        sumString = eval(sumString)
        oViewPort.val(sumString);
        //
        // Empty array for next calculation
        emptyArray();
    }
}
//
// Destroys last created number string
function destroyLastNumber() {
    digitConstruction = "";
}
//
// Get array items and return
function getArrayItems() {
    for (i = 0; i < aCalculateItems.length; i++) {
        sumString = sumString + aCalculateItems[i];
    }
    return sumString;
}
//
// Updates viewport with passed in value
function pushToViewport(displayValue) {
    oViewPort.val(displayValue);
}
//
// Empty array for future use
function emptyArray() {
    aCalculateItems.splice(0, aCalculateItems.length);
}
//
// Reset calculator variables etc.
function resetCalulator() {
    //
    // TBD properly...
    destroyLastNumber();
    emptyArray();
    //
    // Reset viewport and running calculation
    oViewPort.val("0");
    oCurrentActions.html("");
}
function storeHistory() {
    // Some sort of local storage here to track historic calculations.
    // TBD
}