/*
  Dados do site, tirados do cardápio mais recente e do cardápio de almoço da Fernanda Lemos Doceria.

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

  /* Bolos e tortas (preço por kg), conforme o cardápio mais recente */
  add("bolos", "Queridinhos da loja", "kg", [
    ["Ninho com Nutella", 98.90, "Pão de ló fofinho com creme de leite Ninho, Nutella e creme belga."],
    ["Morango com Creme Belga", 94.90, "Leve, cremoso e fresco, com nata, brigadeiro branco e morangos selecionados."],
    ["Morango 6 Leites", 94.90, "Leve, cremoso e fresco, com creme 5 leites, doce de leite cremoso e morangos selecionados."],
    ["Ferrero Rocher", 98.90, "Chocolate intenso com creme de avelã e crocante. Um clássico sofisticado."],
    ["Matilda", 106.90, "Três camadas de chocolate trufado, raspas de chocolate e calda cremosa de chocolate."]
  ]);
  add("bolos", "Sabores tradicionais", "kg", [
    ["2 Amores", 86.90, "Brigadeiro branco e preto, bem cremosos."],
    ["2 Amores com Morango", 92.90, "O clássico com morangos frescos."],
    ["Prestígio", 90.90, "Chocolate com coco e creme belga."],
    ["Oreo", 88.90, "Brigadeiro de Oreo com creme belga e crocância."],
    ["Abacaxi com Coco", 92.90, "Abacaxi, cocada e creme belga."],
    ["Sonho de Valsa", 92.90, "Brigadeiro especial com pedaços de Sonho de Valsa e creme belga."],
    ["Ouro Branco", 94.90, "Brigadeiro especial com pedaços de Ouro Branco e creme belga."],
    ["Floresta Negra", 94.90, "Brigadeiro cremoso preto, cerejas picadas e creme belga."],
    ["Trufado de Maracujá", 94.90, "Trufado de chocolate com mousse de maracujá e raspas de chocolate."]
  ]);
  add("bolos", "Sabores especiais", "kg", [
    ["Marta Rocha", 96.90, "Nozes, baba de moça, nata e crocante."],
    ["Choco Strawberry", 94.90, "Chocolate com creme de avelã e morangos."],
    ["Bossa Nova", 96.90, "Creme de ameixa, cocada, geleia de damasco e doce de leite cremoso."],
    ["Frutas Tropicais", 94.90, "Figo, pêssego, abacaxi, morango e cereja, com creme belga e suspiro."],
    ["Strogonoff de Nozes", 96.90, "Strogonoff de nozes, brigadeiro preto cremoso, creme belga e crocante de nozes caramelado."],
    ["Strogonoff de Nozes com Cocada", 96.90, "Strogonoff de nozes, cocada cremosa, creme belga e crocante de nozes caramelado."],
    ["Limão Siciliano com Geleia de Framboesa", 102.90, "Brigadeiro cremoso de limão siciliano com raspas, creme belga e geleia de framboesa."],
    ["Pistache", 109.90, "Pistache, doce de leite e framboesa."],
    ["Kinder Bueno", 94.90, "Creme de avelã e pedaços de chocolate."],
    ["Raffaello", 96.90, "Coco, amêndoas e creme belga."]
  ]);
  add("bolos", "Naked cakes e red velvet", "kg", [
    ["Naked Cake 2 Amores", 98.90, "Brigadeiros e morangos."],
    ["Naked Red Velvet", 108.90, "Massa especial amanteigada de beterraba, creme de limão com toque de cream cheese e frutas vermelhas."]
  ]);

  /* Da vitrine (itens do dia a dia, preço sob consulta até ser informado) */
  add("bolos", "Da vitrine", "unidade", [
    ["Red Velvet", null],
    ["Brownie com Nutella e marshmallow", null],
    ["Massa de baunilha com gotas de chocolate", null],
    ["Tortinha de morango", null]
  ]);

  /* Brigadeiros (preço por cento) */
  add("brigadeiros", "Tradicionais", "cento", [
    ["Brigadeiro de Beijinho", 144.90],
    ["Brigadeiro Bicho de Pé", 144.90],
    ["Brigadeiro Tradicional", 144.90],
    ["Brigadeiro Branco", 144.90],
    ["Brigadeiro de Cajuzinho", 144.90],
    ["Brigadeiro Dois Amores", 144.90],
    ["Brigadeiro Olho de Sogra", 144.90],
    ["Brigadeiro de Paçoca", 144.90],
    ["Brigadeiro de Amendoim", 144.90]
  ]);
  add("brigadeiros", "Gourmet", "cento", [
    ["Brigadeiro de Abacaxi", 168.90],
    ["Brigadeiro de Banoffee", 168.90],
    ["Brigadeiro Belga (chocolate 70%)", 168.90],
    ["Brigadeiro de Cappuccino", 168.90],
    ["Brigadeiro Charge", 168.90],
    ["Brigadeiro de Churros", 168.90],
    ["Brigadeiro de Coco Queimado", 168.90],
    ["Brigadeiro Confete", 168.90],
    ["Brigadeiro de Creme Brûlée", 168.90],
    ["Brigadeiro de Damasco", 168.90],
    ["Brigadeiro de Doce de Leite Gourmet", 168.90],
    ["Brigadeiro de Frutas Vermelhas", 168.90],
    ["Brigadeiro Kinder Bueno", 168.90],
    ["Brigadeiro Kit Kat", 168.90],
    ["Brigadeiro de Leite Ninho", 168.90],
    ["Brigadeiro de Limão Siciliano", 168.90],
    ["Brigadeiro de Maracujá", 168.90],
    ["Brigadeiro Ninho com Nutella", 168.90],
    ["Brigadeiro de Nozes", 168.90],
    ["Brigadeiro de Pistache", 168.90],
    ["Brigadeiro Romeu e Julieta", 168.90],
    ["Surpresa de Uva", 168.90]
  ]);

  /* Doces finos (preço por cento, salvo quando indicado) */
  add("doces", "Bombons", "cento", [
    ["Bombom de Banana (Caribe)", 260.00],
    ["Bombom de Cereja", 260.00],
    ["Bombom de Licor", 260.00],
    ["Bombom de Morango", 268.90],
    ["Bombom de Uva", 260.00]
  ]);
  add("doces", "Brigadeiros especiais", "cento", [
    ["Brigadeiro Dois Amores em flor", 186.90],
    ["Brigadeiro de Cereja", 188.90],
    ["Brigadeiro de Champanhe", 190.90],
    ["Brigadeiro Pistache", 188.90],
    ["Brigadeiros saborizados (ampola)", 350.00, "Amarula, vodka, whisky, rum, gin, licor de menta e outros."]
  ]);
  add("doces", "Taças, copinhos e chocolates", "cento", [
    ["Concha de Chocolate", 380.00],
    ["Copinhos de chocolate recheados", 380.00],
    ["Copinhos de chocolate saborizados", 3.50, "Ao leite, meio amargo e menta.", "unidade"],
    ["Tacinha de Banoffee", 5.50, null, "unidade"],
    ["Tacinha de Mousse", 4.50, null, "unidade"],
    ["Xícaras de chocolate com cocada", 360.00],
    ["Morango do Amor", 450.00]
  ]);
  add("doces", "Especiais", "cento", [
    ["Espelhados", 280.00],
    ["Camafeu de Nozes", 260.00],
    ["Camafeu de Chocolate", 260.00],
    ["Ferrero Rocher", 320.00],
    ["Raffaello", 320.00]
  ]);
  add("doces", "Massas folhadas", "unidade", [
    ["Massa folhada com doce de leite", null],
    ["Massa folhada recheada", null]
  ]);

  /* Personalizados e decoração (valor inicial de 1 unidade; ainda do cardápio anterior) */
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
  add("personalizados", "Da vitrine", "unidade", [
    ["Cupcake red velvet", null]
  ]);

  /* Salgados (cento, kg ou unidade) */
  add("salgados", "Por cento", "cento", [
    ["Bolinha de Queijo", 156.90],
    ["Coxinha", 156.90],
    ["Risoles", 156.90],
    ["Kibe", 156.90],
    ["Empadinha", 142.90, "Frango ou palmito."],
    ["Doguinho", 144.90],
    ["Mini Esfirra de Carne", 144.90],
    ["Mini Pão de Batata", 144.90],
    ["Pastéis Assados", 144.90],
    ["Pastel Frito", 142.90]
  ]);
  add("salgados", "Especiais", "cento", [
    ["Mini Pizza", 185.00],
    ["Mini Quiches", 178.90],
    ["Croissants", 178.90],
    ["Mini Sanduíches", 5.50, null, "unidade"]
  ]);
  add("salgados", "Por kg", "kg", [
    ["Empadão", 78.90],
    ["Quiches", 92.90],
    ["Torta Fria", 78.90]
  ]);
  add("salgados", "Sanduíche de metro", "kg", [
    ["Sanduíche de metro de Patê de Frango", 78.90],
    ["Sanduíche de metro de Peito de Peru com queijo e salada", 78.90],
    ["Sanduíche de metro de Salame com queijo e salada", 82.90]
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

    // Vitrine da página inicial: só aparecem os itens que têm foto (nomes como na lista acima)
    featured: [
      "Massa folhada com doce de leite",
      "Massa folhada recheada",
      "Cupcake red velvet",
      "Red Velvet",
      "Brownie com Nutella e marshmallow",
      "Massa de baunilha com gotas de chocolate",
      "Tortinha de morango",
      "Marta Rocha",
      "2 Amores com Morango",
      "Ninho com Nutella",
      "Morango 6 Leites",
      "Brigadeiro Belga (chocolate 70%)",
      "Morango do Amor",
      "Coxinha"
    ],

    // ids que já têm foto em assets/produtos/<id>.jpg
    photos: [
      "massa-folhada-com-doce-de-leite",
      "massa-folhada-recheada",
      "cupcake-red-velvet",
      "red-velvet",
      "brownie-com-nutella-e-marshmallow",
      "massa-de-baunilha-com-gotas-de-chocolate",
      "tortinha-de-morango"
    ],

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
