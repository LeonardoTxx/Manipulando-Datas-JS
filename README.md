1. `maiorData(date1, date2)`

Esta função recebe dois objetos Date como parâmetros e retorna o maior entre eles. Ela compara os valores das datas e retorna a maior delas.

2. `calcularIntervalo(dataInicial, dataFinal)`

Esta função recebe duas datas como parâmetros e calcula o intervalo em dias entre elas. Antes de realizar o cálculo, ela verifica se a primeira data é mais antiga que a segunda. Caso contrário, retorna uma mensagem de erro indicando que a primeira data deve ser mais antiga que a segunda.

3. `dataAtualFormatada()`

Esta função retorna a data e hora atuais formatadas de acordo com o padrão especificado. Ela cria um objeto Date representando a data e hora atuais e, em seguida, formata essa data no formato "hora:minuto - dia/mês/ano".

4. Event Listeners para Botões

Event listeners respondem ao clique nos botões da página HTML. Eles são responsáveis por chamar as funções correspondentes e exibir os resultados na página.

- Evento para Exibir a Maior Data: Este event listener é acionado quando o botão com o id 'btnMaiorData' é clicado. Ele obtém os valores inseridos nos campos de entrada de data, converte esses valores em objetos Date e então chama a função `maiorData` para determinar a maior data. Em seguida, formata a data resultante no padrão brasileiro e exibe o resultado na página.

- Evento para Calcular o Intervalo: Este event listener é acionado quando o botão com o id 'btnIntervalo' é clicado. Ele também obtém os valores inseridos nos campos de entrada de data, converte esses valores em objetos Date e então chama a função `calcularIntervalo` para calcular o intervalo entre as datas. O resultado é exibido na página.

- Evento para Exibir a Data Atual: Este event listener é acionado quando o botão com o id 'btnDataAtual' é clicado. Ele chama a função `dataAtualFormatada` para obter a data e hora atuais formatadas e exibe o resultado na página.
