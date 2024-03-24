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
    let random = Math.random();
    console.log(random);
    if (random > 0.1) {
      let result = eval(document.getElementById("display").value);
      console.log(result);
      document.getElementById("display").value = result;
    } else {
      let expression = document.getElementById("display").value;
      console.log(expression);
      expression = swapOperators(expression);
      console.log(expression);
      let result = eval(expression);
      document.getElementById("display").value = result;
    }
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
