# Fernanda Lemos Doceria

Site estático (HTML, CSS e JavaScript puros, sem build). Abra `index.html` ou publique a pasta como está.

## Como atualizar

- **Preços, produtos e almoço:** edite `data.js`. Cada produto é uma linha `["Nome", preço, "descrição"]`.
  Preço `null` aparece como "Sob consulta".
- **Foto de produto:** salve em `assets/produtos/<id>.jpg` e coloque o id em `photos` no `data.js`.
  O id é o nome em minúsculas, sem acento e com hífens (ex.: "Marta Rocha" vira `marta-rocha`).
  Fotos quadradas (1000 x 1000 px) ficam melhores.
- **Destaques da página inicial:** lista `featured` no `data.js`.
- **Cardápio em PDF:** substitua `assets/cardapio-2026.pdf`.
- **Logo:** `assets/logo.jpg` (imagem inteira) e `assets/logo-avatar.jpg` (recorte redondo do topo).
