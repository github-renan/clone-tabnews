function Home(){

    return <h1>Deploy automatizado !!!! Uhuuuu - 3</h1>
}

function exibirDataHora() {
    // Obter a referência do elemento HTML
    var elementoDisplay = document.getElementById('dataHoraDisplay');
  
    // Obter a data atual
    var data = new Date();
  
    // Obter horas, minutos e segundos
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
  
    // Adicionar zero à esquerda se for menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
    // Construir a string da data e hora
    var dataHora = horas + ':' + minutos + ':' + segundos;
  
    // Atualizar o conteúdo do elemento HTML
    elementoDisplay.textContent = dataHora;
  
    // Retornar a string se quiser usar o valor em outro lugar
    return dataHora;
  }
  
  // Chamar a função para exibir a data e hora
  exibirDataHora();
  
  // Atualizar a cada segundo (opcional)
  setInterval(exibirDataHora, 1000);

export default Home;