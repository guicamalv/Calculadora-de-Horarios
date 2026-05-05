# ⏱ AjustaHora

> Calculadora de ajuste de horários para câmeras e dispositivos com relógio incorreto.

[![PWA Ready](https://img.shields.io/badge/PWA-ready-6750A4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Material You](https://img.shields.io/badge/Design-Material%20You-4A90E2?style=flat-square&logo=google&logoColor=white)](https://m3.material.io/)
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)](LICENSE)
[![HTML puro](https://img.shields.io/badge/Stack-HTML%20%2B%20CSS%20%2B%20JS-orange?style=flat-square&logo=html5&logoColor=white)]()

---

## 📋 Sobre

**AjustaHora** é uma aplicação web progressiva (PWA) para calcular e corrigir diferenças de horário entre o tempo real e o horário registrado por dispositivos com relógio incorreto — como câmeras de segurança, DVRs e equipamentos de vigilância.

Com ela você consegue:

- Calcular com precisão a diferença entre dois horários (anos, meses, dias, horas, minutos e segundos)
- Converter qualquer timestamp de horário errado para o horário real correspondente, e vice-versa
- Usar o app offline, instalado diretamente no celular ou desktop como um app nativo

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🔢 Cálculo de diferença | Compara horário real vs. horário do dispositivo e exibe o offset completo |
| 🔄 Conversão bidirecional | Converte de "horário real → errado" ou de "horário errado → real" |
| 📲 Instalável (PWA) | Instala no Android, iOS, Windows e macOS sem loja de aplicativos |
| 🌙 Modo escuro | Detecta automaticamente a preferência do sistema |
| 📴 Modo offline | Funciona sem internet após o primeiro acesso |
| ♿ Acessível | Semântica HTML correta, foco visível e contraste Material You |

---

## 🖼 Interface

O design segue o sistema **Material You (Material Design 3)** do Google, com:

- Paleta de cores dinâmica com tokens CSS (`--md-primary`, `--md-surface`, etc.)
- Modo escuro automático via `prefers-color-scheme`
- Cards com bordas arredondadas e elevação sutil
- Animações de entrada suaves
- Snackbar no lugar de `alert()` nativos
- FAB (botão flutuante) para resetar rapidamente

---

## 🗂 Estrutura de arquivos

```
ajustahora/
├── index.html       # App principal (HTML + CSS + JS — zero dependências de build)
├── manifest.json    # Web App Manifest (nome, ícones, tema)
├── sw.js            # Service Worker (cache offline, stale-while-revalidate)
├── icon-192.png     # Ícone PWA 192×192 px  ← você fornece
├── icon-512.png     # Ícone PWA 512×512 px  ← você fornece
└── README.md
```

> **Nota:** os ícones não estão incluídos no repositório. Veja a seção [Ícones](#-ícones) abaixo.

---

## 🚀 Como usar

### Opção 1 — GitHub Pages (recomendado)

1. Faça um fork ou clone este repositório
2. Vá em **Settings → Pages → Source: Deploy from branch → `main` / `root`**
3. Acesse `https://<seu-usuario>.github.io/<repo>/`
4. No celular, toque em **"Instalar"** ou **"Adicionar à tela inicial"**

### Opção 2 — Servidor local

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Acesse `http://localhost:8080` no navegador.

> ⚠️ O Service Worker (e portanto o PWA) **só funciona em HTTPS ou `localhost`**. Não abrindo direto como arquivo (`file://`).

---

## 🔧 Como funciona

### 1. Calcular a diferença

Informe o **Horário Real** (o horário correto, verificado em uma fonte confiável) e o **Horário Errado** (o que o dispositivo registrou). O app calcula o offset exato.

### 2. Converter um timestamp

Com a diferença calculada, insira qualquer data/hora e selecione se ela é real ou errada. O app devolve o horário correspondente na outra escala.

**Exemplo prático:**

```
Horário real:   2024-03-15 14:32:00
Horário errado: 2024-03-15 11:47:00
Diferença:      2h 45min (dispositivo atrasado)

Nova data (errada): 2024-03-10 08:15:00
→ Horário real:     2024-03-10 11:00:00
```

---

## 📱 Instalação como app

### Android (Chrome / Edge)
1. Acesse o site pelo navegador
2. Toque no botão **"Instalar"** na barra superior, ou
3. Menu (⋮) → **"Adicionar à tela inicial"**

### iOS (Safari)
1. Acesse o site pelo Safari
2. Toque no botão de compartilhar (□↑)
3. **"Adicionar à Tela de Início"**

### Desktop (Chrome / Edge)
1. Clique no ícone de instalação na barra de endereços (lado direito), ou
2. Menu → **"Instalar AjustaHora"**

---

## 🎨 Ícones

Os ícones PWA (`icon-192.png` e `icon-512.png`) precisam ser gerados por você e colocados na raiz do projeto.

Ferramentas recomendadas:

- **[maskable.app](https://maskable.app)** — crie ícones com área segura para Android
- **[Favicon.io](https://favicon.io)** — gera múltiplos tamanhos a partir de texto ou imagem
- **[RealFaviconGenerator](https://realfavicongenerator.net)** — gerador completo para todas as plataformas

> Os ícones devem ser **quadrados**, em formato **PNG**, e idealmente no estilo *maskable* para exibição correta no Android.

---

## 🛠 Tecnologias

- **HTML5** semântico
- **CSS3** — variáveis, `color-mix()`, `@media prefers-color-scheme`, `safe-area-inset`
- **JavaScript** vanilla (ES2020+) — sem frameworks, sem dependências de build
- **Service Worker API** — cache offline com estratégia *network-first* + *stale-while-revalidate*
- **Web App Manifest** — instalação nativa PWA
- **Google Fonts** — Nunito + Material Symbols Outlined
- **Material Design 3 (Material You)** — sistema de design e tokens

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para mudanças significativas, abra uma *issue* primeiro para discutir o que você gostaria de alterar.

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/minha-melhoria`
3. Commit: `git commit -m 'feat: adiciona minha melhoria'`
4. Push: `git push origin feature/minha-melhoria`
5. Abra um Pull Request

---

<p align="center">Feito com ☕ e Material You</p>
