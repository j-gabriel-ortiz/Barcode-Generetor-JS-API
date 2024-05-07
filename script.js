const inputText = document.getElementById('convert-to-code');
const btnGenerator = document.getElementById('btn-barcode-generator');

const barCode = () => {
    JsBarcode('#barcode', inputText.value, {
        format: "code128",
        displayValue: true,
        fontSize: 24,
        lineColor: '#000'
    });
}

btnGenerator.addEventListener('click', barCode);
inputText.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        barCode();
    }
} )

window.onload = (event) => {
    inputText.value = '';
}