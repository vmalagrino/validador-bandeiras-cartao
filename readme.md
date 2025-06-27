# Documentação dos Aplicativos: index.js (JavaScript) e main.py (Python)

## Visão Geral

Ambos os aplicativos têm como objetivo identificar a bandeira de um cartão de crédito a partir do número informado pelo usuário. Eles utilizam padrões (prefixos) conhecidos de cada bandeira para realizar a identificação, retornando o nome da bandeira correspondente ou "Bandeira desconhecida" caso não haja correspondência.

---

## Bandeiras Suportadas

### O número inicial do cartão será validado

- Elo: 4011, 4312, 4389
- Diners Club: 300-305, 36, 38, 39
- EnRoute: 2014, 2149
- JCB: 35
- Aura: 50
- Voyager: 8699
- Visa: 4
- MasterCard: 51-55, 2221-2720
- American Express: 34, 37
- Discover: 6011, 65, 644-649
- Hipercard: 6062

---

## index.js (JavaScript)

### Descrição

Arquivo em JavaScript para uso em Node.js.  
A função `identificar_bandeira` recebe um número de cartão (string), remove caracteres não numéricos e compara os dígitos iniciais com os padrões de várias bandeiras.

### Exemplo de Uso

```javascript
console.log(identificar_bandeira('4011780000000000')); // Elo
console.log(identificar_bandeira('4111111111111111')); // Visa
console.log(identificar_bandeira('5277959558870483')); // MasterCard
console.log(identificar_bandeira('371449635398431'));  // American Express
console.log(identificar_bandeira('6011111111111117')); // Discover
console.log(identificar_bandeira('6062825624254001')); // Hipercard
console.log(identificar_bandeira('30258581939897'));   // Diners Club
console.log(identificar_bandeira('201471443627021'));  // EnRoute
console.log(identificar_bandeira('3516040882491845')); // JCB
console.log(identificar_bandeira('5060711318055439')); // Aura
console.log(identificar_bandeira('869975852541476'));  // Voyager
```

---

## main.py (Python)

### Descrição

Arquivo em Python para uso em linha de comando ou integração em outros sistemas.  
A função `identificar_bandeira` recebe um número de cartão (string), remove caracteres não numéricos e compara os dígitos iniciais com os padrões de várias bandeiras usando expressões regulares.



### Exemplo de Uso

```python
print(identificar_bandeira('4011780000000000')) # Elo
print(identificar_bandeira('4111111111111111')) # Visa
print(identificar_bandeira('5277959558870483')) # MasterCard
print(identificar_bandeira('371449635398431'))  # American Express
print(identificar_bandeira('6011111111111117')) # Discover
print(identificar_bandeira('6062825624254001')) # Hipercard
print(identificar_bandeira('30258581939897'))   # Diners Club
print(identificar_bandeira('201471443627021'))  # EnRoute
print(identificar_bandeira('3516040882491845')) # JCB
print(identificar_bandeira('5060711318055439')) # Aura
print(identificar_bandeira('869975852541476'))  # Voyager
```

---

## Observações Gerais

- A ordem dos testes é importante para evitar conflitos entre bandeiras com prefixos semelhantes.
- Para adicionar novas bandeiras, basta incluir novos padrões na lista de cada função.
- Ambos os códigos são facilmente adaptáveis para outros ambientes e podem ser integrados em sistemas de validação de pagamento.
