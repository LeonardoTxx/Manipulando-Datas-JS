// Função para retornar o parâmetro Date maior
function maiorData(date1, date2) {
  return date1 > date2 ? date1 : date2;
}

// Função para calcular o intervalo entre duas datas
function calcularIntervalo(dataInicial, dataFinal) {
  if (dataInicial > dataFinal) {
      return "A primeira data deve ser mais antiga que a segunda.";
  }

  const intervaloMs = dataFinal - dataInicial;
  const intervaloDias = intervaloMs / (1000 * 60 * 60 * 24);

  return `O intervalo entre as datas é de ${intervaloDias} dias.`;
}

// Função para retornar a data atual no padrão especificado
function dataAtualFormatada() {
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();
  const hora = dataAtual.getHours();
  const minuto = dataAtual.getMinutes();

  const diaFormatado = dia < 10 ? `0${dia}` : dia;
  const mesFormatado = mes < 10 ? `0${mes}` : mes;
  const horaFormatada = hora < 10 ? `0${hora}` : hora;
  const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;

  return `${horaFormatada}:${minutoFormatado} - ${diaFormatado}/${mesFormatado}/${ano}`;
}

// Função para exibir a maior data
document.getElementById('btnMaiorData').addEventListener('click', function() {
  const data1String = document.getElementById('data1').value;
  const data2String = document.getElementById('data2').value;

  // Convertendo a string da data para o formato Date
  const data1 = new Date(data1String + 'T00:00:00');
  const data2 = new Date(data2String + 'T00:00:00');

  // Verificando qual data é maior
  const maior = maiorData(data1, data2);

  // Formatando a data no padrão brasileiro
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Sao_Paulo' };
  const dataFormatada = maior.toLocaleDateString('pt-BR', options);

  document.getElementById('resultado').innerText = `A maior data é: ${dataFormatada}`;
});



// Função para exibir o intervalo entre as datas
document.getElementById('btnIntervalo').addEventListener('click', function() {
  const data1 = new Date(document.getElementById('data1').value);
  const data2 = new Date(document.getElementById('data2').value);
  const intervalo = calcularIntervalo(data1, data2);
  document.getElementById('resultado').innerText = intervalo;
});

// Função para exibir a data atual formatada
document.getElementById('btnDataAtual').addEventListener('click', function() {
  const atual = dataAtualFormatada();
  document.getElementById('resultado').innerText = `Data atual: ${atual}`;
});
