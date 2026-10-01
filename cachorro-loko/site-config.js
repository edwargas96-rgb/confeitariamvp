/* ============================================================
   CACHORRO LOKO — CONFIGURAÇÃO DO SITE
   Edite apenas este arquivo para trocar textos, contatos,
   produtos e fotos. Itens marcados com [CONFIRMAR] precisam
   de validação do proprietário antes de qualquer publicação.
   ============================================================ */
window.SITE = {
  nome: "Cachorro Loko",
  slogan: "Hot Dogs Artesanais",
  cidade: "Curitiba",
  bairro: "Mercês",

  /* [CONFIRMAR] dados divulgados no Instagram */
  endereco: "Av. Manoel Ribas, 1777 — Mercês, Curitiba/PR",
  horario: "Terça a sábado, das 19h às 22h30",
  whatsappNumero: "5541998727074",
  whatsappExibicao: "(41) 99872-7074",
  instagramUrl: "https://www.instagram.com/cachorroloko_foodtruck/",
  instagramUsuario: "@cachorroloko_foodtruck",

  mensagens: {
    geral: "Olá! Vi o site do Cachorro Loko e gostaria de saber mais sobre o cardápio.",
    produto: "Olá! Vi o {produto} no site e gostaria de saber o valor e a disponibilidade.",
    evento: "Olá! Gostaria de saber como funciona levar o Cachorro Loko para um evento. Posso passar a data, o local e a quantidade de pessoas?"
  },

  /* Fotos: coloque o arquivo em /assets e informe o caminho.
     Enquanto for null, aparece uma área de reserva. */
  imagens: {
    hero:   { src: null, alt: "Hot dog artesanal do Cachorro Loko" },
    evento: { src: null, alt: "Foodtruck Cachorro Loko em atendimento" },
    sobre:  { src: null, alt: "Cachorro Loko, hot dogs artesanais" }
  },

  /* Produtos. Só inclua itens confirmados. "preco" = null oculta o valor.
     "confirmado: false" mostra a etiqueta de revisão apenas no modo
     de revisão (adicione ?revisao=1 ao endereço). */
  produtos: [
    {
      nome: "Pork Ribs",
      destaque: true,
      /* [CONFIRMAR] baseado em reportagem; cardápio pode ter mudado */
      descricao: "Pão de baguete, salsicha artesanal, requeijão cremoso, costelinha de porco desfiada com barbecue de goiaba e cebola crispy.",
      preco: null,
      foto: null,
      alt: "Hot dog Pork Ribs do Cachorro Loko",
      confirmado: false
    }
  ],

  eventos: {
    titulo: "Leve o Cachorro Loko para o seu evento.",
    texto: "Quer o foodtruck no seu evento? Vamos conversar sobre parcerias e participação. Conte a data, o local e o número de pessoas, e a gente responde pelo WhatsApp.",
    contextos: ["Eventos corporativos", "Aniversários", "Confraternizações"]
  },

  sobre: "O Cachorro Loko é um foodtruck de hot dogs artesanais em Curitiba. Receitas feitas com ingredientes pensados para dar sabor de verdade à comida de rua, servidas nas noites da cidade, perto de quem gosta de comer bem."
};
