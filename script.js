function appendToDisplay(value) {
  console.log(value);
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function swapOperators(expression) {
  expression = expression.replace(/\+/g, "@"); // Use a temporary symbol
  expression = expression.replace(/-/g, "+");
  expression = expression.replace(/@/g, "-"); // Restore the temporary symbol
  expression = expression.replace(/\*/g, "&"); // Use another temporary symbol
  expression = expression.replace(/\//g, "*");
  expression = expression.replace(/&/g, "/");
  return expression;
}

function calculate() {
  try {
    let expression = document.getElementById("display").value;

    expression = swapOperators(expression);

    let result = eval(expression);

    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
