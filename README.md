# 💼 Finance Leads Landing (Fullstack)

Landing page moderna para captação de leads com painel administrativo integrado.

## 🌐 Acesse o projeto

🔗 **Landing Page:**
https://finance-leads-landing.vercel.app/

🔗 **Painel Admin (leads):**
https://finance-leads-landing.vercel.app/admin.html

🔗 **API (backend):**
https://finance-leads-backend.onrender.com/leads

---

## 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de simular um fluxo real de captação de leads:

* Usuário preenche formulário na landing page
* Dados são enviados para uma API
* Leads são armazenados em banco de dados
* Painel admin consome a API e exibe os dados

---

## 🚀 Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Node.js
* Express
* SQLite

### Deploy

* Frontend: Vercel
* Backend: Render

---

## 📊 Funcionalidades

### Landing Page

* Formulário de captura de leads
* Feedback de envio (sucesso/erro)
* Tema dark/light persistido com localStorage
* Layout responsivo

### Backend (API REST)

* Recebimento de leads via POST `/leads`
* Validação de campos obrigatórios
* Armazenamento no SQLite
* Listagem de leads via GET `/leads`

### Painel Admin

* Consumo da API em produção
* Listagem de leads em tempo real
* Contador total de leads
* Botão de atualização manual

---

## ⚙️ Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/HainerPS/finance-leads-landing.git
```

### 2. Backend

```bash
cd backend
npm install
node server.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

### 3. Frontend

Abra o arquivo:

```
frontend/index.html
```

Ou utilize Live Server.

---

## 📁 Estrutura do projeto

```bash
finance-leads-landing/
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── database.sqlite
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── admin.html
│   ├── script.js
│   ├── admin.js
│   ├── style.css
│   └── admin.css
│
└── README.md
```

---

## 🧠 Aprendizados

* Integração entre frontend e backend
* Criação de API REST com Express
* Manipulação de banco SQLite
* Deploy de aplicações (Vercel + Render)
* Consumo de API com fetch
* Tratamento de erros no frontend

---

## 🔮 Possíveis melhorias

* Autenticação no painel admin
* Paginação de leads
* Filtro e busca
* Integração com CRM
* Deploy com banco externo (PostgreSQL)

---

## 👨‍💻 Autor

Desenvolvido por **Hainer Soares**
🔗 GitHub: https://github.com/HainerPS
🔗 LinkedIn: https://www.linkedin.com/in/hainer-soares-b4487818b/

---
