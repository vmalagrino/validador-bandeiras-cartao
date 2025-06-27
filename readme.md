Diners Club
3025 858193 9897
3003 128073 1638
3030 987033 5709
3004 913277 8722
3857 223515 6118

EnRoute
2014 7144362 7021
2014 3075636 0836
2014 6972037 9985
2014 6678665 5316
2149 2243588 3530

JCB
3516 0408 8249 1845
3591 5806 2761 2294
3584 8362 6709 9872
3512 6822 7679 4096
3504 1391 2424 6100

Aura
5060 7113 1805 5439
5034 6191 3679 9547
5039 2543 8380 8711
5066 3532 9439 8626
5094 2302 4065 6586

Voyager
86997 5852 54147 6
86995 1773 75452 2
86990 0286 11755 2
86993 4455 28059 4
86998 6814 26935 3

# Documentação - Identificação de Bandeira de Cartão de Crédito

## Descrição

Este código implementa a função `identificarBandeira`, que identifica a bandeira de um cartão de crédito a partir do número informado. A identificação é feita por meio de expressões regulares que analisam os dígitos iniciais do cartão, retornando o nome da bandeira correspondente ou `'Bandeira desconhecida'` caso não haja correspondência.

---

## Função

### identificarBandeira(numero)

- **Parâmetro:**  
  `numero` (string): Número do cartão de crédito (pode conter espaços, traços ou outros caracteres não numéricos).

- **Retorno:**  
  (string): Nome da bandeira identificada ou `'Bandeira desconhecida'`.

- **Funcionamento:**  
  1. Remove todos os caracteres não numéricos do número informado.
  2. Verifica, em ordem, se o número começa com os prefixos conhecidos de cada bandeira, utilizando expressões regulares.
  3. Retorna o nome da bandeira correspondente ao primeiro padrão encontrado.
  4. Caso nenhum padrão seja identificado, retorna `'Bandeira desconhecida'`.

---

## Bandeiras Suportadas e Padrões

- **Elo:** começa com 4011, 4312, 4389
- **Diners Club:** começa com 300-305, 36, 38, 39
- **EnRoute:** começa com 2014 ou 2149
- **JCB:** começa com 35
- **Aura:** começa com 50
- **Voyager:** começa com 8699
- **Visa:** começa com 4
- **MasterCard:** começa com 51-55 ou 2221-2720
- **American Express:** começa com 34 ou 37
- **Discover:** começa com 6011, 65 ou 644-649
- **Hipercard:** começa com 6062

---

## Exemplos de Uso

```javascript
console.log(identificarBandeira('4011780000000000')); // Elo
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5277959558870483')); // MasterCard
console.log(identificarBandeira('371449635398431'));  // American Express
console.log(identificarBandeira('6011111111111117')); // Discover
console.log(identificarBandeira('6062825624254001')); // Hipercard
console.log(identificarBandeira('30258581939897'));   // Diners Club
console.log(identificarBandeira('201471443627021'));  // EnRoute
console.log(identificarBandeira('3516040882491845')); // JCB
console.log(identificarBandeira('5060711318055439')); // Aura
console.log(identificarBandeira('869975852541476'));  // Voyager