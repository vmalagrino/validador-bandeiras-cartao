import re

def identificar_bandeira(numero):
    num = re.sub(r'\D', '', numero)  # Remove caracteres não numéricos

    # Lista de padrões de bandeiras e seus nomes
    bandeiras = [
        ('Elo',           r'^(4011|4312|4389)'),
        ('Diners Club',   r'^(30[0-5]|36|38|39)'),
        ('EnRoute',       r'^(2014|2149)'),
        ('JCB',           r'^35'),
        ('Aura',          r'^50'),
        ('Voyager',       r'^8699'),
        ('Visa',          r'^4'),
        ('MasterCard',    r'^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)'),
        ('American Express', r'^(34|37)'),
        ('Discover',      r'^(6011|65|64[4-9])'),
        ('Hipercard',     r'^6062'),
    ]

    for nome, padrao in bandeiras:
        if re.match(padrao, num):
            return nome
    return 'Bandeira desconhecida'

# Exemplo de uso:
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

#Código inicial gerado com ajuda do Copilot, mas modificado para melhor legibilidade e eficiência.
# import re

# def identificar_bandeira(numero):
#     num = re.sub(r'\D', '', numero)  # Remove caracteres não numéricos

#     # Elo: começa com 4011, 4312, 4389
#     if re.match(r'^(4011|4312|4389)', num):
#         return 'Elo'
#     # Diners Club: começa com 300-305, 36, 38, 39
#     if re.match(r'^(30[0-5]|36|38|39)', num):
#         return 'Diners Club'
#     # EnRoute: começa com 2014 ou 2149
#     if re.match(r'^(2014|2149)', num):
#         return 'EnRoute'
#     # JCB: começa com 35
#     if re.match(r'^35', num):
#         return 'JCB'
#     # Aura: começa com 50
#     if re.match(r'^50', num):
#         return 'Aura'
#     # Voyager: começa com 8699
#     if re.match(r'^8699', num):
#         return 'Voyager'
#     # Visa: começa com 4
#     if re.match(r'^4', num):
#         return 'Visa'
#     # MasterCard: começa com 51-55 ou 2221-2720
#     if re.match(r'^(5[1-5])', num) or re.match(r'^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)', num):
#         return 'MasterCard'
#     # American Express: começa com 34 ou 37
#     if re.match(r'^(34|37)', num):
#         return 'American Express'
#     # Discover: começa com 6011, 65 ou 644-649
#     if re.match(r'^(6011|65|64[4-9])', num):
#         return 'Discover'
#     # Hipercard: começa com 6062
#     if re.match(r'^6062', num):
#         return 'Hipercard'
#     return 'Bandeira desconhecida'

# # Exemplo de uso:
# print(identificar_bandeira('4011780000000000')) # Elo
# print(identificar_bandeira('4111111111111111')) # Visa
# print(identificar_bandeira('5277959558870483')) # MasterCard
# print(identificar_bandeira('371449635398431'))  # American Express
# print(identificar_bandeira('6011111111111117')) # Discover
# print(identificar_bandeira('6062825624254001')) # Hipercard
# print(identificar_bandeira('30258581939897'))   # Diners Club
# print(identificar_bandeira('201471443627021'))  # EnRoute
# print(identificar_bandeira('3516040882491845')) # JCB
# print(identificar_bandeira('5060711318055439')) # Aura
# print(identificar_bandeira('869975852541476'))  # Voyager