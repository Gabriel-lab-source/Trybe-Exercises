const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);

// O parâmetro rest guarda os parâmetros passados para a função em um array.

console.log(sum(4, 7, 8, 9, 60)); // 88

// O spread é responsável por espalhar valores, e ele pode ser utilizado para passar parâmetros ao EXECUTAR uma função. Já o rest pode ser utilizado para agrupar valores ao DECLARAR funções que podem receber múltiplos parâmetros.

