document.getElementById('convertButton').addEventListener('click', convertToBinary);

function convertToBinary() {
    const number = document.getElementById('numberInput').value;
    const numericValue = Number(number);

    if (isNaN(numericValue)) {
        document.getElementById('binaryOutput').innerText = 'Please enter a valid number.';
        return;
    }

    const numberToBinary = function (numericValue) {
        return numericValue.toString(2);
    }
    //const binary = Number(number).toString(2);
    document.getElementById('binaryOutput').innerText = `Binary: ${numberToBinary(numericValue)}`;
}