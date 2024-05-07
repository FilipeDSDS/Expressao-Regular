# Expressao-Regular

As expressões regulares selecionadas por mim são (/^[A-Za-zÀ-ú\s]+$/) , (/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/) e (/^\(\d{2}\)\s\d{4,5}-\d{4}$/).
Primeiramente as /(barras) no início e no final das expressões é o que se utiliza para criar as próprias expressões no JavaScript, depois temos na primeira expressão [A-Za-zÀ-ú\s], onde representa o que se pode usar naquele campo, sendo as letras do alfabeto, minúsculas, maiúsculas e as letras com assento e logo depois o /s que representa um espaço em branco. No começo das expressões onde apresenta ^ e no final onde tem $, representam que o que vamos colocar naquele campo deve conter aquilo obrigatóriamente no começo que está depois do ^ e no final o que está antes do $. Nas outras expressões teremos o /w (representa o conjunto de A-Z,a-z,0-9), /d representa o conjunto de 0-9 e depois de alguns desses temos uma chave{} com um número dentro que representa a quantidade de números que se deve ter ali naquele espaço.
