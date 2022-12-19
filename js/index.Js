const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

let status = document.getElementById("status");
let attempt = document.getElementById("attempt");
let result = document.getElementById("result");

const Guess = {
  max: 20,
  attempts: 0,
  numberDrawn: function randomValue() {
    return Math.round(Math.random() * this.max);
  },
};

let numberDrawn = Guess.numberDrawn();
function updateAttempt(attempt, value) {
  attempt.innerHTML = "Tentativa: " + value;
}

function handleSubmit(e) {
  e.preventDefault();

  let click = document.getElementById("click").value;

  if (!click) {
    alert("Digite algum valor!");
    return;
  }

  updateAttempt(attempt, ++Guess.attempts);
  if (Guess.attempts > 2) {
    document.getElementById("buttonDica").style.display = "none";
  }

  if (numberDrawn == click) {
    playAgain();
    status.innerHTML = "Parabéns, você acertou!";
    result.style.transition = "0.4s";
    result.style.backgroundColor = "#37c978";
    result.style.color = "#fff";
    status.style.color = "#fff";
    clear();
  }
  else if (Guess.attempts < 2) {
    status.innerHTML = "Você errou 1x, resta somente 2 chance.";
    status.style.color = "#ff5830";
      setTimeout(() => {
        document.getElementById("buttonDica").style.display = "block"
      }, "2500")
    clear();
  }
   else if (Guess.attempts == 2) {
    status.innerHTML = "Você errou 2x, resta somente uma chance.";
    status.style.color = "#ff5830";
      setTimeout(() => {
        document.getElementById("buttonDica").style.display = "block"
      }, "2500")
    clear();
  }
  else if(Guess.attempts > 2)
  {
    clear();
    status.innerHTML = "Tente de novo, a pagina está se recarregando..."
    status.color = "#ff0000"
    setTimeout(() => {
      document.location.reload(true)
    }, "4000")
  }
}

function dica() {
  var textDica = document.getElementById("result");
  var campo = document.createElement("div")
  campo.setAttribute("id", "my-id")
  campo.style.marginTop = "6px";
  campo.style.textAlign = "center";
  campo.style.fontFamily = "Ubuntu", "sans-serif";
  campo.style.fontWeight = "400";
  textDica.appendChild(campo)
  var tentativas = document.getElementById("attempt");
  var quebralinha = document.createElement("br");
  tentativas.appendChild(quebralinha);
  var comparacao = numberDrawn > 10 ? "Maior" : "Menor";
  var text = document.createTextNode(`O Número é ${comparacao} que ${10}.`);
  campo.appendChild(text);
}

function playAgain() {
  document.getElementById("btnRestart").style.display = "flex";
  document.getElementById("buttonDica").style.display = "none";
}

function restart() {
  document.location.reload(true);
}

function clear() {
  document.getElementById("click").value = "";
}
