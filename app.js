(function () {
  "use strict";

  var data = window.SITE_DATA || { categories: [], products: [], lunch: [] };
  var PHONE = data.whatsapp || "5541999350060";
  var PAGE_SIZE = 8;

  var state = { category: "todos", query: "", visible: PAGE_SIZE, current: null };

  function $(sel) { return document.querySelector(sel); }
  function waLink(message) {
    return "https://wa.me/" + PHONE + (message ? "?text=" + encodeURIComponent(message) : "");
  }
  function normalize(text) {
    return (text || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function categoryLabel(id) {
    var c = data.categories.find(function (c) { return c.id === id; });
    return c ? c.label : "";
  }

  /* Menu mobile */
  var toggle = $(".menu-toggle");
  var nav = $("#navigation");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      }
    });
  }

  /* Ano no rodapé */
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* Links de WhatsApp com mensagem pronta */
  document.querySelectorAll("a.whatsapp[data-message]").forEach(function (a) {
    a.href = waLink(a.getAttribute("data-message"));
  });

  /* Catálogo */
  var categoriesEl = $(".categories");
  var productsEl = $("#products");
  var noteEl = $("#category-note");
  var countEl = $("#results-count");
  var loadMore = $("#load-more");
  var search = $("#search");

  function renderCategories() {
    categoriesEl.innerHTML = "";
    data.categories.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = c.label;
      b.setAttribute("aria-pressed", String(c.id === state.category));
      b.addEventListener("click", function () {
        state.category = c.id;
        state.visible = PAGE_SIZE;
        renderCategories();
        renderProducts();
      });
      categoriesEl.appendChild(b);
    });
    var current = data.categories.find(function (c) { return c.id === state.category; });
    noteEl.textContent = current ? current.note : "";
  }

  function filtered() {
    var q = normalize(state.query);
    return data.products.filter(function (p) {
      var inCat = state.category === "todos" || p.category === state.category;
      var hay = normalize([p.name, p.description, p.ingredients].join(" "));
      return inCat && (!q || hay.indexOf(q) !== -1);
    });
  }

  function productCard(p) {
    var article = document.createElement("article");
    article.className = "product";
    article.innerHTML =
      '<button type="button" class="product-open" aria-haspopup="dialog">' +
        '<div class="product-photo photo-placeholder" aria-hidden="true"><span>✳</span><small>FOTO EM BREVE</small></div>' +
        '<div class="product-body">' +
          '<p class="product-cat"></p>' +
          '<h3></h3>' +
          '<p class="product-desc"></p>' +
          '<p class="product-price"><strong></strong> <span></span></p>' +
          (p.exemplo ? '<span class="badge">Exemplo</span>' : "") +
        '</div>' +
      '</button>';
    article.querySelector(".product-cat").textContent = categoryLabel(p.category);
    article.querySelector("h3").textContent = p.name;
    article.querySelector(".product-desc").textContent = p.description;
    article.querySelector(".product-price strong").textContent = p.price;
    article.querySelector(".product-price span").textContent = p.unit ? "· " + p.unit : "";
    article.querySelector(".product-open").addEventListener("click", function () { openDetail(p); });
    return article;
  }

  function renderProducts() {
    var list = filtered();
    productsEl.innerHTML = "";
    if (!list.length) {
      var empty = document.createElement("div");
      empty.className = "empty";
      empty.innerHTML = "<p>Não encontramos esse sabor por aqui.</p>";
      var a = document.createElement("a");
      a.className = "text-link";
      a.href = waLink("Olá! Vocês fazem " + (state.query || "algum sabor especial") + "?");
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Perguntar pelo WhatsApp ";
      empty.appendChild(a);
      productsEl.appendChild(empty);
    }
    list.slice(0, state.visible).forEach(function (p) { productsEl.appendChild(productCard(p)); });
    countEl.textContent = list.length === 1 ? "1 opção" : list.length + " opções";
    loadMore.hidden = list.length <= state.visible;
  }

  if (categoriesEl && productsEl) {
    renderCategories();
    renderProducts();
    search.addEventListener("input", function () {
      state.query = search.value.trim();
      state.visible = PAGE_SIZE;
      renderProducts();
    });
    loadMore.addEventListener("click", function () {
      state.visible += PAGE_SIZE;
      renderProducts();
    });
  }

  /* Detalhe do produto */
  var dialog = $("#product-dialog");
  var orderDate = $("#order-date");
  var orderNotes = $("#order-notes");
  var orderLink = $("#detail-order");

  function formatDate(value) {
    if (!value) return "";
    var parts = value.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  }

  function updateOrderLink() {
    var p = state.current;
    if (!p) return;
    var msg = "Olá, Fernanda! Tenho interesse em: " + p.name + " (" + categoryLabel(p.category) + ").";
    if (orderDate.value) msg += "\nData desejada: " + formatDate(orderDate.value) + ".";
    if (orderNotes.value.trim()) msg += "\nDetalhes: " + orderNotes.value.trim();
    msg += "\nPode me passar disponibilidade e valores?";
    orderLink.href = waLink(msg);
  }

  function openDetail(p) {
    state.current = p;
    $("#detail-category").textContent = categoryLabel(p.category).toUpperCase();
    $("#detail-name").textContent = p.name;
    $("#detail-description").textContent = p.description;
    $("#detail-price").textContent = p.price + (p.unit ? " · " + p.unit : "");
    $("#detail-note").textContent = (p.note || "") + (p.exemplo ? " (Item de exemplo)" : "");
    orderDate.value = "";
    orderNotes.value = "";
    var today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    orderDate.min = today.toISOString().slice(0, 10);
    updateOrderLink();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  if (dialog) {
    orderDate.addEventListener("input", updateOrderLink);
    orderNotes.addEventListener("input", updateOrderLink);
    dialog.querySelector(".dialog-close").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  }

  /* Almoço */
  var lunchEl = $("#lunch-days");
  if (lunchEl) {
    var todayIdx = new Date().getDay(); // 0 = domingo
    data.lunch.forEach(function (d, i) {
      var card = document.createElement("div");
      card.className = "lunch-day" + (d.closed ? " closed" : "") + (i + 1 === todayIdx ? " today" : "");
      var h = document.createElement("h3");
      h.textContent = d.day;
      card.appendChild(h);
      if (i + 1 === todayIdx) {
        var t = document.createElement("span");
        t.className = "tag";
        t.textContent = "Hoje";
        card.appendChild(t);
      }
      var ul = document.createElement("ul");
      d.dishes.forEach(function (dish) {
        var li = document.createElement("li");
        li.textContent = dish;
        ul.appendChild(li);
      });
      card.appendChild(ul);
      if (d.exemplo) {
        var b = document.createElement("span");
        b.className = "badge";
        b.textContent = "Exemplo";
        card.appendChild(b);
      }
      lunchEl.appendChild(card);
    });
  }
})();
