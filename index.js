const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;

window.alert = function(message) {
    originalConfirm(message || 'Do you agree?');
};

window.confirm = function(message) {
    originalPrompt(message || 'Do you want to continue?');
};

window.prompt = function(message) {
    originalAlert(message || 'Prompt: Enter a value:');
};

window.alert();
