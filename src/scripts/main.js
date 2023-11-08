const dataDoEvento = new Date("dec 26, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('dias').innerHTML = diasAteOEvento;
    document.getElementById('horas').innerHTML = horasAteOEvento;
    document.getElementById('minutos').innerHTML = minutosAteOEvento;
    document.getElementById('segundos').innerHTML = segundosAteOEvento;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Já passou o niver aguarde o próximo evento';
    } else if (distanciaAteOEvento === 0) {
        document.getElementById('contador').innerHTML = 'Feliz Aniversário';
    }
}, 1000);

function confirmarPresenca() {
    alert('Presença confirmada! Mal posso esperar para vê-lo lá!');
}