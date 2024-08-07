const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const screenElement = document.querySelector("#screen");

let firstNum = "";
let secondNum = "";
let operatorSymbol = "";
let isCalculated = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isCalculated) {
      screenElement.value = "";
      firstNum = "";
      secondNum = "";
      operatorSymbol = "";
      isCalculated = false;
    }
    screenElement.value += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isCalculated) {
      secondNum = "";
      operatorSymbol = "";
      isCalculated = false;
    }

    if (operatorSymbol && secondNum) {
      firstNum = calculate(firstNum, secondNum, operatorSymbol);
      screenElement.value = firstNum;
      secondNum = "";
    }

    if (!firstNum) {
      firstNum = screenElement.value;
    }

    operatorSymbol = button.textContent;
    screenElement.value = "";
  });
});

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
  if (firstNum && operatorSymbol) {
    secondNum = screenElement.value;
    const result = calculate(firstNum, secondNum, operatorSymbol);
    screenElement.value = result;
    firstNum = result;
    secondNum = "";
    operatorSymbol = "";
    isCalculated = true;
  }
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Ошибка";
    default:
      return num1;
  }
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  screenElement.value = "";
  firstNum = "";
  secondNum = "";
  operatorSymbol = "";
});
