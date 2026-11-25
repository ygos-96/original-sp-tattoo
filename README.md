# Original SP Tattoo · site institucional (versão estática)

Código do site institucional do estúdio **Original SP Tattoo**, em São Paulo: apresentação do estúdio, serviços e galeria de trabalhos. Este repositório reúne a primeira versão estática do site.

O site em produção hoje está em **https://originaltattoo.com.br/**.

## Páginas

| Página | Conteúdo |
| --- | --- |
| `index.html` | Início, com apresentação, serviços e carrossel |
| `realismo.html` | Tatuagem realista |
| `cobertura.html` | Cobertura (cover-up) de tatuagens antigas |
| `piercing.html` | Serviço de piercing |
| `tatuagem-indolor.html` | Tatuagem com técnica indolor, com galeria de fotos e vídeos |
| `sobre-nos.html` | O estúdio e os artistas |
| `tuzinho.html` | Página de um dos artistas |

## O que tem

- Site multipágina em HTML e CSS, com layout responsivo.
- **Carrossel** de imagens em JavaScript puro (avançar e voltar).
- **Galerias com modal** (jQuery) que ampliam fotos e vídeos ao clicar.
- Fontes próprias do estúdio (Bebas Neue e Bohemy) carregadas localmente.
- Estilos separados por página e por componente (`src/arq/css`).

## Como está organizado

```
*.html              páginas
src/arq/css/        estilos: basico/ (reset e globais), container/ (carrossel) e um arquivo por página
src/arq/js/         carrossel.js e modal-galeria.js
src/font/           fontes do estúdio
src/img/            fotos e vídeos das galerias
```

## Tecnologias

HTML5, CSS3, JavaScript, jQuery e Bootstrap 4.1.3 (via CDN).

## Rodar localmente

Não há etapa de build. Abra o `index.html` no navegador, ou:

```bash
npx serve .
```

## Observações

- O repositório tem cerca de 80 MB, a maior parte em fotos e vídeos das galerias. Uma otimização natural é converter as imagens para WebP e comprimir os vídeos.
- Esta versão está só em português e não tem agendamento integrado.
