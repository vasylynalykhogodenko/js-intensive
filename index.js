// Due to task used my own order
window.alert = window.confirm;
window.prompt = window.alert;
window.confirm = window.prompt;

// Example of window.alert = window.confirm;
window.alert = function() {
    let confirmed = window.confirm('Do you agree?');

    window.prompt(`You responded: ${confirmed}. Enter something:`);
};

// Example of window.confirm = window.prompt;
window.confirm = function() {
    let input = window.prompt('Do you want to continue?');

    window.alert(`User input: ${input}`);
};

// Example of window.prompt = window.alert;
const originalPrompt = window.prompt;

window.prompt = function(message) {
    let result = originalPrompt(message || 'Enter a value:');

    window.confirm(`You entered: ${result}`);
};

// calling one of functions
window.alert();
