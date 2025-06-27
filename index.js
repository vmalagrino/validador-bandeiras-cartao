function identificar_bandeira(numero) {
    const num = String(numero).replace(/\D/g, '');

    const bandeiras = [
        { nome: 'Elo', padroes: [/^4011/, /^4312/, /^4389/] },
        { nome: 'Diners Club', padroes: [/^30[0-5]/, /^36/, /^38/, /^39/] },
        { nome: 'EnRoute', padroes: [/^2014/, /^2149/] },
        { nome: 'JCB', padroes: [/^35/] },
        { nome: 'Aura', padroes: [/^50/] },
        { nome: 'Voyager', padroes: [/^8699/] },
        { nome: 'Visa', padroes: [/^4/] },
        { nome: 'MasterCard', padroes: [/^5[1-5]/, /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/] },
        { nome: 'American Express', padroes: [/^34/, /^37/] },
        { nome: 'Discover', padroes: [/^6011/, /^65/, /^64[4-9]/] },
        { nome: 'Hipercard', padroes: [/^6062/] }
    ];

    const encontrada = bandeiras.find(b =>
        b.padroes.some(p => p.test(num))
    );
    return encontrada ? encontrada.nome : 'Bandeira desconhecida';
}

// Exemplos de uso:
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

//Código inicial gerado com ajuda do Copilot, mas modificado para melhor legibilidade e eficiência.
// function identificar_bandeira(numero) {
//     const num = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

//     // Elo: começa com 4011, 4312, 4389
//     if (/^(4011|4312|4389)/.test(num)) {
//         return 'Elo';
//     }
//     // Diners Club: começa com 300-305, 36, 38, 39
//     if (/^(30[0-5]|36|38|39)/.test(num)) {
//         return 'Diners Club';
//     }
//     // EnRoute: começa com 2014 ou 2149
//     if (/^(2014|2149)/.test(num)) {
//         return 'EnRoute';
//     }
//     // JCB: começa com 35
//     if (/^35/.test(num)) {
//         return 'JCB';
//     }
//     // Aura: começa com 50
//     if (/^50/.test(num)) {
//         return 'Aura';
//     }
//     // Voyager: começa com 8699
//     if (/^8699/.test(num)) {
//         return 'Voyager';
//     }
//     // Visa: começa com 4
//     if (/^4/.test(num)) {
//         return 'Visa';
//     }
//     // MasterCard: começa com 51-55 ou 2221-2720
//     if (/^(5[1-5])/.test(num) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(num)) {
//         return 'MasterCard';
//     }
//     // American Express: começa com 34 ou 37
//     if (/^(34|37)/.test(num)) {
//         return 'American Express';
//     }
//     // Discover: começa com 6011, 65 ou 644-649
//     if (/^(6011|65|64[4-9])/.test(num)) {
//         return 'Discover';
//     }
//     // Hipercard: começa com 6062
//     if (/^6062/.test(num)) {
//         return 'Hipercard';
//     }
//     return 'Bandeira desconhecida';
// }

// // Exemplo de uso:
// console.log(identificar_bandeira('4011780000000000')); // Elo
// console.log(identificar_bandeira('4111111111111111')); // Visa
// console.log(identificar_bandeira('5277959558870483')); // MasterCard
// console.log(identificar_bandeira('371449635398431'));  // American Express
// console.log(identificar_bandeira('6011111111111117')); // Discover
// console.log(identificar_bandeira('6062825624254001')); // Hipercard
// console.log(identificar_bandeira('30258581939897'));   // Diners Club
// console.log(identificar_bandeira('201471443627021'));  // EnRoute
// console.log(identificar_bandeira('3516040882491845')); // JCB
// console.log(identificar_bandeira('5060711318055439')); // Aura
// console.log(identificar_bandeira('869975852541476'));  // Voyager