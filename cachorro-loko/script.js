(function () {
  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var wa = function (msg) {
    return "https://wa.me/" + S.whatsappNumero + "?text=" + encodeURIComponent(msg);
  };

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa(S.mensagens[a.dataset.wa]);
  });

  function img(slot, src, alt, eager, label) {
    if (src) {
      var i = document.createElement("img");
      i.src = src; i.alt = alt;
      if (!eager) i.loading = "lazy";
      slot.appendChild(i);
    } else {
      slot.classList.add("ph");
      slot.setAttribute("role", "img");
      slot.setAttribute("aria-label", alt + " (foto a ser adicionada)");
      slot.innerHTML = '<span class="ph__t">' + (label || S.nome) + '</span><span class="ph__s">Foto a ser adicionada</span>';
    }
  }

  document.querySelectorAll("[data-img]").forEach(function (el) {
    var c = S.imagens[el.dataset.img];
    img(el, c.src, c.alt, el.hasAttribute("data-eager"), el.dataset.img === "hero" ? "Hot Dog Artesanal" : "Foodtruck");
  });

  var revisao = /[?&]revisao=1/.test(location.search);
  var box = $("#produtos");
  S.produtos.forEach(function (p) {
    var a = document.createElement("article");
    a.className = "prod" + (p.destaque ? " prod--destaque" : "");
    var f = document.createElement("div"); f.className = "prod__img";
    img(f, p.foto, p.alt, false, p.nome);
    var b = document.createElement("div"); b.className = "prod__txt";
    var h = document.createElement("h3"); h.textContent = p.nome;
    var d = document.createElement("p"); d.textContent = p.descricao;
    b.appendChild(h); b.appendChild(d);
    if (p.preco) { var pr = document.createElement("p"); pr.className = "preco"; pr.textContent = p.preco; b.appendChild(pr); }
    if (revisao && !p.confirmado) { var r = document.createElement("p"); r.className = "revisar"; r.textContent = "Descrição a confirmar"; b.appendChild(r); }
    var l = document.createElement("a");
    l.className = "btn"; l.target = "_blank"; l.rel = "noopener";
    l.href = wa(S.mensagens.produto.replace("{produto}", p.nome));
    l.textContent = "Consultar pelo WhatsApp";
    b.appendChild(l);
    a.appendChild(f); a.appendChild(b); box.appendChild(a);
  });
  var m = document.createElement("article");
  m.className = "prod prod--mais";
  m.innerHTML = '<h3>Quer ver o cardápio completo?</h3><p>Chame no WhatsApp e confira todos os sabores e a disponibilidade do dia.</p>';
  var ml = document.createElement("a");
  ml.className = "btn btn--ghost"; ml.target = "_blank"; ml.rel = "noopener";
  ml.href = wa(S.mensagens.geral); ml.textContent = "Pedir o cardápio";
  m.appendChild(ml); box.appendChild(m);

  $("#ev-titulo").textContent = S.eventos.titulo;
  $("#ev-texto").textContent = S.eventos.texto;
  S.eventos.contextos.forEach(function (t) {
    var li = document.createElement("li"); li.textContent = t; $("#ev-tags").appendChild(li);
  });
  $("#sobre-txt").textContent = S.sobre;
  $("#loc-end").textContent = S.endereco;
  $("#loc-hor").textContent = S.horario;
  $("#loc-wa").textContent = S.whatsappExibicao;
  $("#rod-wa").textContent = S.whatsappExibicao;
  $("#rod-ig").textContent = S.instagramUsuario; $("#rod-ig").href = S.instagramUrl;
  $("#mapa").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.endereco);

  var btn = $(".menu-btn"), nav = $("#nav");
  function fechar() { nav.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", function () {
    var o = nav.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", o ? "true" : "false");
  });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") fechar(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });
})();
