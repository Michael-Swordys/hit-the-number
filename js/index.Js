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
  } else {
    status.innerHTML = "Número errado!";
    status.style.color = "#de4251";
    clear();
  }
}

function dica() {
  var textDica = document.getElementById("result");
  var dica = numberDrawn > 10 ? "Maior" : "Menor";
  var text = document.createTextNode(`O Número é ${dica} que ${10}.`);
  console.log(numberDrawn);
  var tentativas = document.getElementById("attempt");
  tentativas.style.display = "none";
  textDica.appendChild(text);
  clear();
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
