$(document).ready(function() {
    const $display = $(".DisplaySection textarea");

    $(".buttonSection button").on("click", function() {
        const buttonText = $(this).text();
        const currentDisplay = $display.val();
        const lastChar = currentDisplay.slice(-1);

        if (buttonText === "Clear") {
            $display.val(""); // Clear the display
        } else if (buttonText === "Del") {
            $display.val(currentDisplay.slice(0, -1)); // Delete last character
        } else if (buttonText === "=") {
            try {
                $display.val(eval(currentDisplay)); // Evaluate the expression
            } catch (error) {
                $display.val("Error"); // Show error if invalid expression
            }
        } else if (["+", "-", "*", "/", "%"].includes(buttonText)) {
            if (["+", "-", "*", "/", "%"].includes(lastChar)) {
                // Replace last operator if another operator is clicked
                $display.val(currentDisplay.slice(0, -1) + buttonText);
            } else {
                $display.val(currentDisplay + buttonText); // Append operator if last char isn't an operator
            }
        } else {
            $display.val(currentDisplay + buttonText); // Append number or decimal to display
        }
    });
});
