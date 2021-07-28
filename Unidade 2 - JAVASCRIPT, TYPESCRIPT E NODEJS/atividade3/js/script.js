window.addEventListener('load', start);

function start() {
  let calcular = document.querySelector('#calcular');
  calcular.addEventListener('click', () => {
    let peso = document.querySelector('#input1').value;
    let altura = document.querySelector('#input2').value;
    let resultado = document.querySelector('.resultado');

    if (peso !== '' && altura !== '') {
      let soma = peso / (altura * altura);

      if (soma < 17) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está muito abaixo do peso `;
      } else if (soma >= 17 && soma <= 18.4) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está abaixo do peso `;
      } else if (soma >= 18.5 && soma <= 24.9) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está com o peso normal `;
      } else if (soma >= 25 && soma <= 29.9) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está acima do peso`;
      } else if (soma >= 30 && soma <= 34.9) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está com obesidade Grau I`;
      } else if (soma >= 35 && soma <= 40) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está com obesidade Grau II`;
      } else if (soma > 40) {
        resultado.innerHTML = `Seu IMC é: ${soma.toFixed(
          2
        )} você está com obesidade Grau III`;
      }
    } else {
      resultado.textContent = 'Preencha todos os campos!';
    }
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', prevenirEnvio);
}

function prevenirEnvio(event) {
  event.preventDefault();
}
