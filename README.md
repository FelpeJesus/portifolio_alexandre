# 🧠 Portfólio & Landing Page - Alexandre Teixeira (Psicólogo Clínico)

Portfólio simples, direto, acolhedor e profissional desenvolvido para **Alexandre Teixeira do Nascimento Silva** (**CRP 13/14462**).

Estruturado de forma limpa e objetiva, com suporte a **Modo Claro e Modo Escuro (Dark Mode)**, **Foto Profissional** e links diretos para **WhatsApp** e **Instagram**.

---

## 📁 Estrutura do Projeto

```text
portifolio_alexandre/
│
├── index.html            # Estrutura principal com foto, tema e redes sociais
├── README.md             # Documentação e instruções de uso
│
├── css/
│   └── style.css         # Design adaptativo (Modo Claro & Escuro + Instagram)
│
├── js/
│   ├── config.js         # ⭐ Configurações (Nome, CRP, Foto, WhatsApp, Instagram e Endereço)
│   └── script.js         # Interatividade, tema e integração com WhatsApp
│
└── assets/
    ├── perfil.jpeg       # Foto oficial do psicólogo
    ├── infor.jpeg        # Cartão oficial de identificação do psicólogo
    ├── logo.svg          # Símbolo da ampulheta com o Psi (Ψ)
    └── avatar.svg        # Ilustração/Placeholder alternativo
```

---

## 📸 Foto do Psicólogo

A sua foto já está conectada em [`assets/perfil.jpeg`](file:///home/felipe-jesus/Downloads/portifolio_alexandre/assets/perfil.jpeg) e configurada no arquivo [`js/config.js`](file:///home/felipe-jesus/Downloads/portifolio_alexandre/js/config.js):

```javascript
fotoUrl: "assets/perfil.jpeg",
```

---

## 📱 Como Configurar Seu Instagram

No arquivo [`js/config.js`](file:///home/felipe-jesus/Downloads/portifolio_alexandre/js/config.js), personalize com seu usuário e link:

```javascript
instagramUsuario: "@alexandreteixeira.psi", // Seu @ de exibição
instagramUrl: "https://instagram.com/seu_usuario", // Link direto para o perfil
```

O Instagram aparecerá automaticamente:
1. No **cabeçalho** (botão com ícone no topo direito)
2. Na **seção de contato** (botão com gradiente oficial do Instagram)
3. Na **tabela de informações** e no **rodapé**

---

## 🌓 Modo Claro e Modo Escuro (Dark Mode)

- O portfólio inclui um botão no cabeçalho com ícones de **Sol ☀️ e Lua 🌙**.
- O tema escolhido pelo visitante é **salvo automaticamente no navegador** (`localStorage`).
- Caso o visitante nunca tenha escolhido manualmente, o site detecta automaticamente a preferência do sistema operacional ou celular dele.

---

## 🚀 Como Visualizar no Navegador

- Dê um duplo clique no arquivo [`index.html`](file:///home/felipe-jesus/Downloads/portifolio_alexandre/index.html) para abrir no seu navegador.
- Ou execute um servidor local se preferir:
  ```bash
  python3 -m http.server 8000
  ```
  E acesse: `http://localhost:8000`
