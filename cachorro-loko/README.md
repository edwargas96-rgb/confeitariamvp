# Cachorro Loko — site de demonstração

Página única estática (HTML, CSS e JavaScript simples). Sem build, sem dependências, sem banco de dados.
Única requisição externa: fontes Anton e Inter (Google Fonts); sem internet, cai para Impact/sistema.

## Executar
```bash
cd cachorro-loko
python3 -m http.server 8080
```
Abra http://localhost:8080 . Para ver as etiquetas de revisão do cardápio: http://localhost:8080/?revisao=1

## Editar
Tudo (contatos, horário, endereço, mensagens do WhatsApp, produtos, textos, fotos) fica em `site-config.js`.
Fotos: copie o arquivo para `assets/` e troque `src: null` por `src: "assets/arquivo.jpg"`. Enquanto for `null`, aparece uma área de reserva.
Para adicionar um produto, copie um bloco em `produtos`. Deixe `preco: null` até haver valor confirmado.

## Pendências
Fotos (do próprio Cachorro Loko, com autorização):
- Foto principal de um hot dog (retrato, 4:5) — hero
- Foto do Pork Ribs (paisagem ou quadrada) — cardápio
- Foto do foodtruck em operação (4:3) — eventos
- Logo original em boa resolução (hoje o nome está em texto provisório)

Informações a confirmar com o proprietário:
- Endereço, horário e WhatsApp (vindos da bio do Instagram)
- Descrição atual do Pork Ribs (vinda de reportagem; pode ter mudado)
- Demais produtos do cardápio e preços atuais (nenhum preço exibido)
- Condições para eventos (área, quantidade, valores): nada foi afirmado
- Cores e logo originais: não foi possível analisar o anúncio nem o Instagram nesta etapa

## Fora do escopo
Carrinho, pagamento, cadastro, painel, formulários e publicação online.
