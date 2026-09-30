/*
  Dados do catálogo e do almoço.
  ATENÇÃO: os itens abaixo são EXEMPLOS (exemplo: true) até receber o cardápio real.
  Para atualizar, troque nome, descrição, preço e medida de cada item e
  remova "exemplo: true".
*/
window.SITE_DATA = {
  whatsapp: "5541999350060",

  categories: [
    { id: "todos", label: "Todos", note: "Tudo o que sai da nossa cozinha. Escolha uma categoria ou busque pelo sabor." },
    { id: "bolos", label: "Bolos & tortas", note: "Bolos para o café, para a família e para a festa. Recheios e tamanhos sob consulta." },
    { id: "brigadeiros", label: "Brigadeiros", note: "Brigadeiros tradicionais e gourmet, vendidos por cento ou por caixinha." },
    { id: "doces", label: "Doces para celebrar", note: "Docinhos finos e sobremesas para deixar a mesa da festa ainda mais bonita." },
    { id: "salgados", label: "Salgados", note: "Salgados fritos e assados para festas e encontros. Vendidos por cento." }
  ],

  products: [
    // Bolos & tortas
    { id: "bolo-chocolate", category: "bolos", name: "Bolo de chocolate com brigadeiro", description: "Massa fofinha de chocolate, recheio e cobertura de brigadeiro cremoso.", ingredients: "chocolate, brigadeiro, granulado", price: "A partir de R$ 00,00", unit: "por kg", note: "Consulte tamanhos e decoração.", exemplo: true },
    { id: "bolo-ninho-morango", category: "bolos", name: "Bolo Ninho com morango", description: "Massa branca, creme de leite Ninho e morangos frescos.", ingredients: "leite ninho, morango, massa branca", price: "A partir de R$ 00,00", unit: "por kg", note: "Morango sujeito à safra.", exemplo: true },
    { id: "bolo-cenoura", category: "bolos", name: "Bolo de cenoura com cobertura", description: "O clássico do café da tarde, com cobertura de chocolate.", ingredients: "cenoura, chocolate", price: "R$ 00,00", unit: "unidade", exemplo: true },
    { id: "torta-limao", category: "bolos", name: "Torta de limão", description: "Base crocante, creme de limão e merengue levemente tostado.", ingredients: "limão, merengue, massa amanteigada", price: "R$ 00,00", unit: "unidade", exemplo: true },
    { id: "bolo-prestigio", category: "bolos", name: "Bolo prestígio", description: "Chocolate com recheio cremoso de coco.", ingredients: "chocolate, coco", price: "A partir de R$ 00,00", unit: "por kg", exemplo: true },

    // Brigadeiros
    { id: "brig-tradicional", category: "brigadeiros", name: "Brigadeiro tradicional", description: "O brigadeiro de sempre, com chocolate e granulado.", ingredients: "chocolate, granulado", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "brig-ninho", category: "brigadeiros", name: "Brigadeiro de Ninho", description: "Brigadeiro branco de leite Ninho, delicado e cremoso.", ingredients: "leite ninho", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "brig-pistache", category: "brigadeiros", name: "Brigadeiro de pistache", description: "Brigadeiro gourmet com pistache de verdade.", ingredients: "pistache", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "brig-caixa", category: "brigadeiros", name: "Caixinha com 4 brigadeiros", description: "Sabores sortidos para presentear ou se dar de presente.", ingredients: "chocolate, ninho, sortidos", price: "R$ 00,00", unit: "caixinha", exemplo: true },

    // Doces
    { id: "doce-bem-casado", category: "doces", name: "Bem-casado", description: "Massa pão de ló com doce de leite, embalado para a festa.", ingredients: "doce de leite, pão de ló", price: "R$ 00,00", unit: "unidade", note: "Embalagem personalizada sob consulta.", exemplo: true },
    { id: "doce-copinho", category: "doces", name: "Copinho de chocolate recheado", description: "Copinho de chocolate com mousse e decoração delicada.", ingredients: "chocolate, mousse", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "doce-cajuzinho", category: "doces", name: "Cajuzinho", description: "Docinho de amendoim, o queridinho das festas.", ingredients: "amendoim", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "doce-pote", category: "doces", name: "Bolo de pote", description: "Camadas de bolo e recheio no potinho, pronto para comer.", ingredients: "chocolate, ninho, morango", price: "R$ 00,00", unit: "unidade", exemplo: true },

    // Salgados
    { id: "salg-coxinha", category: "salgados", name: "Coxinha de frango", description: "Massa macia e recheio de frango temperado.", ingredients: "frango", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "salg-kibe", category: "salgados", name: "Kibe", description: "Kibe frito, sequinho e bem temperado.", ingredients: "carne, trigo", price: "R$ 00,00", unit: "cento", exemplo: true },
    { id: "salg-esfiha", category: "salgados", name: "Esfiha de carne", description: "Esfiha assada com recheio de carne.", ingredients: "carne", price: "R$ 00,00", unit: "cento", exemplo: true }
  ],

  // Almoço da semana (EXEMPLO até receber o cardápio real)
  lunch: [
    { day: "Segunda", dishes: ["Frango grelhado", "Arroz, feijão e salada"], exemplo: true },
    { day: "Terça", dishes: ["Carne de panela", "Arroz, feijão e legumes"], exemplo: true },
    { day: "Quarta", dishes: ["Sob consulta"], closed: true },
    { day: "Quinta", dishes: ["Strogonoff de frango", "Arroz e batata palha"], exemplo: true },
    { day: "Sexta", dishes: ["Peixe empanado", "Arroz, feijão e salada"], exemplo: true },
    { day: "Sábado", dishes: ["Feijoada", "Arroz, couve e farofa"], exemplo: true }
  ]
};
