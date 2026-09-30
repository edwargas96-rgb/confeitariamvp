/*
  Dados do site, tirados do cardápio 2026 e do cardápio de almoço da Fernanda Lemos.

  Como atualizar:
  - Preço ou descrição: troque o valor na linha do produto.
  - Foto de produto: salve em assets/produtos/<id>.jpg e coloque o id em `photos`
    (o id é o nome em minúsculas, sem acento e com hífens: "Marta Rocha" -> marta-rocha).
  - Preço null aparece como "Sob consulta".
*/
(function () {
  function slug(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  var products = [];
  var seen = {};

  // add(categoria, grupo, unidade padrão, [[nome, preço, descrição?, unidade?], ...])
  function add(cat, group, unit, items) {
    items.forEach(function (it) {
      var id = slug(it[0]);
      if (seen[id]) id = id + "-" + cat;
      seen[id] = true;
      var p = { id: id, cat: cat, group: group, name: it[0], price: it[1], unit: it[3] || unit };
      if (it[2]) p.desc = it[2];
      products.push(p);
    });
  }

  /* Bolos e tortas (preço por kg) */
  add("bolos", "", "kg", [
    ["Marta Rocha", 92.90, "Pão de ló branco e preto, strogonoff de nozes, ameixa ou damasco, baba de moça, suspiro, nata e crocante de nozes."],
    ["2 Amores", 83.90, "Pão de ló branco e preto, brigadeiro preto cremoso e brigadeiro branco cremoso."],
    ["2 Amores com Morango", 88.90, "Pão de ló branco e preto, brigadeiro preto cremoso, brigadeiro branco cremoso e morangos."],
    ["Choco Strawberry", 88.90, "Pão de ló preto, brigadeiro cremoso de avelã, raspas de chocolate e morangos."],
    ["Prestígio", 88.90, "Pão de ló preto, creme de brigadeiro cremoso, cocada, creme belga e chantilly."],
    ["Síria", 89.90, "Pão de ló branco, abacaxi fresco, creme de ovos, nata e creme belga."],
    ["Abacaxi com Coco", 89.90, "Pão de ló branco, creme belga, abacaxi fresco e cocada."],
    ["Oreo", 86.90, "Pão de ló branco e preto, brigadeiro cremoso de Oreo, creme belga e farofa de bolacha crocante."],
    ["Morango com Creme Belga", 92.90, "Pão de ló branco, brigadeiro branco cremoso, creme belga, suspiro e morangos."],
    ["Morango com Nata", 94.90, "Pão de ló branco, nata, brigadeiro branco cremoso, suspiro e morangos."],
    ["Morango 6 Leites", 92.90, "Pão de ló branco, recheio de brigadeiros 5 leites, doce de leite, suspiro e morangos."],
    ["Ninho com Nutella", 96.90, "Pão de ló branco, brigadeiro de ninho cremoso, Nutella, leite Ninho e creme belga."],
    ["Bossa Nova", 92.90, "Pão de ló branco e preto, ameixa, doce de leite, cocada e geleia de damasco (3 camadas de recheio)."],
    ["Frutas Tropicais", 90.90, "Pão de ló branco, creme belga, suspiro e frutas da época (abacaxi, cereja, pêssego, figo e morango)."],
    ["Sonho de Valsa", 88.90, "Pão de ló branco e preto, brigadeiro cremoso de Sonho de Valsa, creme belga e bombons."],
    ["Ouro Branco", 88.90, "Pão de ló branco e preto, brigadeiro cremoso de Ouro Branco, creme belga e bombons."],
    ["Floresta Negra", 88.90, "Pão de ló preto, brigadeiro preto cremoso, creme belga e cerejas."],
    ["Kinder Bueno", 92.90, "Pão de ló branco e preto, brigadeiro cremoso de avelã, brigadeiro de avelã branco e pedaços de chocolate."],
    ["Strogonoff de Nozes", 94.90, "Pão de ló preto e branco, strogonoff de nozes, creme belga, cocada e crocante de nozes."],
    ["Rafaello", 96.90, "Pão de ló branco com amêndoas, recheio especial de Rafaello, amêndoas, creme belga e cocada."],
    ["Ferrero Rocher", 96.90, "Pão de ló preto, brigadeiro de avelã, amendoim xerém e creme belga."],
    ["Pistache", 98.90, "Pão de ló branco, brigadeiro de pistache, doce de leite, geleia de framboesa e creme belga."],
    ["Naked Cake 2 Amores", 92.90, "Pão de ló branco e preto, brigadeiro cremoso branco, brigadeiro cremoso preto e morangos para decoração."],
    ["Naked Cake Red Velvet", 98.90, "Pão de ló especial red velvet, recheio de brigadeiro de cream cheese de limão, geleia de frutas vermelhas e frutas da época para decoração."],
    ["Red Velvet", 96.90, "Pão de ló especial red velvet, recheio de brigadeiro de cream cheese de limão e geleia de frutas vermelhas."]
  ]);

  /* Brigadeiros (preço por cento) */
  add("brigadeiros", "Tradicionais gourmet", "cento", [
    ["Brigadeiro de Ovomaltine", 140.90],
    ["Brigadeiro Branco", 140.90],
    ["Brigadeiro Romeu e Julieta (parmesão e goiaba)", 142.90],
    ["Brigadeiro Dois Amores", 140.90],
    ["Brigadeiro de Churros", 143.90],
    ["Brigadeiro Bicho de Pé", 143.90],
    ["Brigadeiro Charge", 143.90],
    ["Brigadeiro Tradicional", 140.90],
    ["Brigadeiro de Maracujá", 140.90],
    ["Brigadeiro de Café", 140.90],
    ["Brigadeiro de Frutas Vermelhas", 140.90],
    ["Brigadeiro de Banana com Canela", 143.90],
    ["Brigadeiro de Abacaxi", 140.90],
    ["Brigadeiro Olho de Sogra", 140.90],
    ["Brigadeiro de Beijinho", 140.90],
    ["Brigadeiro de Cajuzinho", 140.90],
    ["Brigadeiro de Amendoim", 140.90],
    ["Brigadeiro de Paçoca", 140.90],
    ["Brigadeiro de Doce de Leite", 140.90],
    ["Brigadeiro de Oreo", 140.90]
  ]);
  add("brigadeiros", "Gourmet especiais", "cento", [
    ["Brigadeiro Belga (chocolate 70%)", 163.90],
    ["Brigadeiro Confete", 163.90],
    ["Brigadeiro Kit Kat", 163.90],
    ["Brigadeiro Ninho com Nutella", 163.90],
    ["Brigadeiro de Creme Brûlée", 176.90],
    ["Brigadeiro Dois Amores em flor (grande, para casamento)", 180.90],
    ["Surpresa de Uva", 163.90],
    ["Brigadeiro de Banoffee", 163.90],
    ["Brigadeiro de Pistache", 184.00],
    ["Brigadeiro de Castanha", 163.90],
    ["Brigadeiro de Nozes", 163.90],
    ["Brigadeiro de Champanhe", 190.90],
    ["Brigadeiro de Cappuccino com folha de pasta americana", 184.00],
    ["Brigadeiro de Limão Siciliano com folha de pasta americana", 163.90],
    ["Brigadeiro de Damasco", 190.90],
    ["Brigadeiro de Cereja", 190.90]
  ]);

  /* Doces finos (preço por cento) */
  add("doces", "Bombons", "cento", [
    ["Bombom de Cereja", 254.00],
    ["Bombom de Licor", 254.00],
    ["Bombom de Uva", 254.00],
    ["Bombom de Banana (Caribe)", 254.00],
    ["Bombom de Morango", 260.00]
  ]);
  add("doces", "Taças e chocolates", "cento", [
    ["Concha de Chocolate", 190.00],
    ["Tacinhas de acrílico de Banoffee", 260.00],
    ["Tacinhas de acrílico de Mousse", 250.00],
    ["Xícaras de chocolate com cocada", 310.00],
    ["Morango do Amor", 270.00]
  ]);
  add("doces", "Espelhados", "cento", [
    ["Espelhado de Ouriço de Coco", 240.00],
    ["Espelhado de Nozes", 240.00],
    ["Espelhado de Cereja", 250.00],
    ["Espelhado de Damasco", 240.00]
  ]);
  add("doces", "Especiais", "cento", [
    ["Camafeu de Nozes", 240.00],
    ["Camafeu de Nozes de Chocolate", 250.00],
    ["Rafaello (hóstia)", 260.00],
    ["Ferrero Rocher", 260.00],
    ["Brigadeiros saborizados (ampola)", 260.00, "Amarula, vodka, whisky, rum, gin, licor de menta e outros."],
    ["Copinhos de chocolate recheados", 360.00, "Brigadeiro cremoso ou mousse, decorados com tema."],
    ["Copinhos de chocolate saborizados", 210.00, "Ao leite, meio amargo e menta. Unidade: R$ 3,00."]
  ]);

  /* Personalizados e decoração (valor inicial de 1 unidade) */
  add("personalizados", "", "unidade", [
    ["Pão de Mel Decorado", 23.90],
    ["Maçãs do Amor de Chocolate, decoração em pasta americana", 24.90],
    ["Maçãs do Amor mini caramelada", 10.50],
    ["Maçãs do Amor grande caramelada", 15.50],
    ["Cake Pop (bolinho no palito)", 20.90],
    ["Porta-retrato de Chocolate", 22.90],
    ["Pirulitos de Chocolate Decorados", 22.90],
    ["Colher de Chocolate", 10.90],
    ["Cupcake com decoração em pasta americana", 18.90],
    ["Cupcake com decoração em chantilly", 15.90],
    ["Cupcake recheado sem decoração (só massa)", 12.50]
  ]);

  /* Salgados (cento, kg ou unidade) */
  add("salgados", "Por cento", "cento", [
    ["Bolinha de Queijo", 134.90],
    ["Risoles de Carne", 134.90],
    ["Coxinha de Frango", 134.90],
    ["Kibe Frito", 134.90],
    ["Mini Empadinha", 134.90, "Frango, palmito ou mista."],
    ["Doguinho", 130.90],
    ["Mini Pizza", 185.00],
    ["Pastel de Nata Assado", 132.90, "Carne, frango ou palmito."],
    ["Mini Quiches", null, "Alho-poró, calabresa, bacon com milho, palmito ou figo com gorgonzola."],
    ["Mini Pastel Frito", 134.90, "Carne, queijo ou pizza."],
    ["Mini Esfiha", 130.90, "Carne ou frios."],
    ["Mini Bolinha Assada de Requeijão", 130.90],
    ["Mini Pão de Batata de Frango com Catupiry", 130.90],
    ["Mini Assado de Milho com Bacon", 130.90],
    ["Mini Enroladinho de Palmito", 130.90],
    ["Mini Sanduíche", 8.50, "Frios, salame ou frango.", "unidade"],
    ["Croissant mini de Frios", 164.90],
    ["Croissant mini de Frango", 164.90],
    ["Croissant mini de Palmito", 164.90]
  ]);
  add("salgados", "Por kg", "kg", [
    ["Empadão", 73.90, "Frango, palmito ou misto, com ou sem requeijão."],
    ["Quiche", 83.90, "Palmito, milho com bacon, calabresa ou frango."],
    ["Quiche de Alho-poró", 84.90],
    ["Torta de Frios", 69.90],
    ["Sanduíche de metro de Patê de Frango", 78.90, "Acompanha alface e mussarela."],
    ["Sanduíche de metro de Patê de Peito de Peru", 78.90, "Acompanha alface e mussarela."],
    ["Sanduíche de metro de Salame", 81.90, "Acompanha rúcula e queijo branco."]
  ]);

  window.SITE_DATA = {
    whatsapp: "5541999350060",

    categories: [
      { id: "bolos", label: "Bolos e tortas", singular: "Bolo", note: "Cobertura à escolha: chantilly, ganache, marshmallow ou nata. Decoração adicional (trabalhados, papel arroz, toppers ou flores naturais) com valor sob consulta." },
      { id: "brigadeiros", label: "Brigadeiros", singular: "Brigadeiro", note: "Forminhas e plastiquinhos em cores lisas já estão no valor do cento. Defina a cor junto com o pedido." },
      { id: "doces", label: "Doces finos", singular: "Doce fino", note: "Decoração dos doces com pasta americana: valores sob consulta." },
      { id: "personalizados", label: "Personalizados", singular: "Personalizado", note: "Valores iniciais para 1 unidade. O preço pode mudar conforme a personalização e o recheio escolhidos." },
      { id: "salgados", label: "Salgados", singular: "Salgado", note: "Salgados vendidos por cento, por quilo e por unidade, conforme cada item." }
    ],

    // Destaques do cardápio (nomes exatamente como na lista acima)
    featured: [
      "Marta Rocha",
      "2 Amores com Morango",
      "Ninho com Nutella",
      "Morango 6 Leites",
      "Red Velvet",
      "Brigadeiro Belga (chocolate 70%)",
      "Morango do Amor",
      "Coxinha de Frango"
    ],

    // ids que já têm foto em assets/produtos/<id>.jpg
    photos: [],

    products: products,

    // Almoço da semana (segunda a sexta), conforme o cardápio de almoço
    lunch: [
      { dow: 1, day: "Segunda", main: "Strogonoff de carne ou frango grelhado", sides: "Arroz, feijão branco, batata frita e mix de salada", price: 28.90 },
      { dow: 2, day: "Terça", main: "Carne moída com batata ou bisteca frita", sides: "Arroz, feijão, polenta cremosa e mix de salada", price: 28.90 },
      { dow: 3, day: "Quarta", main: "Feijoada Nutella", sides: "Feijão com calabresa, bacon e costelinha, arroz, vinagrete, couve, banana frita, farofa de P.T.S. e laranja", price: 32.90 },
      { dow: 4, day: "Quinta", main: "Frango à parmegiana ou bife a cavalo", sides: "Arroz, feijão branco, batata frita e mix de salada", price: 28.90 },
      { dow: 5, day: "Sexta", main: "Carne de panela ou tilápia à milanesa", sides: "Arroz, feijão preto, purê de batata e mix de salada", price: 28.90 }
    ]
  };
})();
