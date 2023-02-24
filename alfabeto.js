function alphabetPosition(text) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter(char => alphabet.includes(char))
    .map(char => alphabet.indexOf(char) + 1)
    .join(" ");
    
}

/* função recebe uma string text como entrada e retorna uma string 
contendo a posição no alfabeto de cada letra contida em text. A saída 
é uma string de números separados por espaço, em que cada número representa 
a posição de uma letra no alfabeto (por exemplo, "a" é 1, "b" é 2, e assim por diante).

A função começa convertendo text para letras minúsculas e dividindo a string em um array 
de caracteres usando o método split(). Em seguida, o método filter() é usado para remover 
todos os caracteres que não estão no alfabeto (usando a string alphabet para verificar). 
Finalmente, o método map() é usado para mapear cada letra restante no índice correspondente 
na string alphabet, e 1 é adicionado a esse índice (para corresponder à contagem baseada em 1). 
A saída resultante é convertida de volta em uma string separada por espaço usando o método join() 
e retornada pela função.*/