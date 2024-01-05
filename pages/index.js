import { useEffect, useState } from 'react';

function Home() {
  const [horaAtual, setHoraAtual] = useState('');

  useEffect(() => {
    const obterDataHoraAtual = () => {
      const data = new Date();
      const horas = data.getHours();
      const minutos = data.getMinutes();
      const segundos = data.getSeconds();

      const horasFormatadas = horas < 10 ? '0' + horas : horas;
      const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
      const segundosFormatados = segundos < 10 ? '0' + segundos : segundos;

      return horasFormatadas + ':' + minutosFormatados + ':' + segundosFormatados;
    };

    const atualizarHora = () => {
      setHoraAtual(obterDataHoraAtual());
    };

    // Atualizar a cada segundo
    const intervalId = setInterval(atualizarHora, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio garante que o efeito só seja executado uma vez, equivalente ao componentDidMount

  return (
    <div>
      <h1>Deploy 03 - 04/01/24</h1>
      
      <div id="dataHoraDisplay">{horaAtual}</div>
    </div>
  );
}

export default Home;
