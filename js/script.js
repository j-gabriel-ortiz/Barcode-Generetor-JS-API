const inputText = document.getElementById("convert-to-code");
const elementSVG = document.getElementById("barcode");
const elementImg = document.getElementById("imgQR");
const btnGeneratorBarcode = document.getElementById("btn-barcode-generator");
const btnGeneratorQR = document.getElementById("btn-qr-generator");

const urlQR = "https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=";

const controlInput = () => {
  return inputText.value !== "" ? true : alert("empty Field");
};

const barCode = () => {
  if (controlInput()) {
    elementImg.classList.add("hidden");
    elementSVG.classList.remove("hidden");
    JsBarcode(elementSVG, inputText.value, {
      format: "code128",
      displayValue: true,
      fontSize: 24,
      lineColor: "#000",
    });
  }
};

const codeQR = () => {
  if (controlInput()) {
    elementImg.src = `${urlQR}${inputText.value}`;
    elementImg.classList.remove("hidden");
    elementSVG.classList.add("hidden");
  }
};

btnGeneratorBarcode.addEventListener("click", barCode);
btnGeneratorQR.addEventListener("click", codeQR);

window.onload = (event) => {
  inputText.value = "";
};
