const input = document.getElementById("input");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const min = 0;
const max = 9;
const result = document.getElementById("result");
const answer = Math.floor(Math.random() * (max - min + 1));
const tries = document.getElementById("try");
let shootout = 3;

submit.onclick = function(){
  number = Number(input.value);
  if (isNaN(number) || number == ""){
    inputnum.textContent = `Você não chutou um número. ANULADO! ✋`
  }

  else if (number < min || number > max){
    inputnum.textContent = `Número deve ser entre ${min} a ${max}. ANULADO!`
  }

  else{
    inputnum.textContent = `Você chutou o número ${number}. ⚽`;
    console.log(number);
    if (input.value < answer){
      shootout--;
      result.textContent = `Resultado: Maior. TENTE NOVAMENTE!`;
      tries.textConten = `Tentativas: ${shootout}`;
      if (shootout == 0){
        result.textContent = `Resultado: ${answer}. PERDEU! 🥅`;
      }
      else if (shootout < 0){
        result.textContent = `TENTE NOVAMENTE!`;
      }
    }
    else if (input.value > answer){
      shootout--;
      result.textContent = `Resultado: Menor. TENTE NOVAMENTE!`;
      tries.textContent = `Tentativas: ${shootout}`;
      if (shootout == 0){
        result.textContent = `Resultado: ${answer}. PERDEU! 🥅`;
      }
    }
    else {
      result.textContent = `Resultado: ${answer}. ACERTOU! 🏆`;
      tries.textContent = `Tentativas: ${shootout}`;
    }
  }
}

reset.onclick = function(){
  inputnum.textContent = `Número atual: Nenhum`;
  result.textContent = `Resultado: Nenhum`;
  tries.textContent = `Tentativas: ${shootout}`;
}

console.log(result);