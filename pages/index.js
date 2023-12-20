function Home(){

    return <h1>Deploy automatizado !!!! Uhuuuu - 3</h1>
}

// Código comum para ambientes do servidor e do cliente
function obterDataHoraAtual() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();

    var segundos = data.getSeconds();
  
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
    return horas + ':' + minutos + ':' + segundos;
  }
  
  // Código específico para o ambiente do cliente (navegador)
  if (typeof window !== 'undefined') {
    // Certifique-se de que estamos no ambiente do navegador
    window.onload = function() {
      var elementoDisplay = document.getElementById('dataHoraDisplay');
      if (elementoDisplay) {
        // Atualizar a cada segundo
        setInterval(function() {
          elementoDisplay.textContent = obterDataHoraAtual();
        }, 1000);
      }
    };
  }  
obterDataHoraAtual();
export default Home;