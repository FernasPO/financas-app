# 🪙 **OfNances – App de Controle Financeiro**

Aplicativo mobile desenvolvido em React Native com Expo para ajudar no controle de receitas e despesas diárias. Este projeto foi criado como parte da disciplina de **Programação para Dispositivos Móveis (UTFPR)**.

[🔗 Repositório no GitHub](https://github.com/FernasPO/financas-app)

---

## ✅ Funcionalidades

* Login e Cadastro de usuários (mockado)
* Registro de receitas e despesas
* Visualização de saldo, entradas e saídas do dia
* Filtro por data via calendário
* Navegação entre telas com menu lateral (drawer)
* Interface adaptada com base em protótipo do Figma

---

## 💻 Tecnologias utilizadas

* React Native (com Expo)
* Firebase (autenticação e banco de dados - comentado temporariamente)
* Styled-components
* React Navigation
* AsyncStorage
* Date-fns
* React Native Calendars

---

## 🎨 Protótipo (Figma)

Você pode visualizar o layout base usado para o projeto neste link:

[🔗 Figma - OfNances](https://www.figma.com/design/C2wIBFKFYcQU99wy9EbAuF/OfNances)

* Cores escolhidas:

  * Verde: representa entradas (feedback positivo)
  * Vermelho: representa saídas/despesas (alerta)
  * Branco: visual limpo e moderno

* Telas criadas:

  * SignIn (Login)
  * SignUp (Cadastro)
  * Home (Dashboard com cards de saldo e histórico)
  * Registrar (Entrada ou Despesa)
  * Perfil
  * Alterar Dados
  * Filtro por data (Calendário)

---

## ⚙️ Estrutura do projeto

```
src/
├── assets/
├── components/
├── contexts/
├── pages/
├── routes/
├── services/
└── Firebase/ (comentado)
```

---

## 🛠️ Dificuldades encontradas

* Problemas de versão entre bibliotecas (react-native, expo, firebase)
* Conflito de dependências e limitações com o Firebase no Expo Go
* Expo Go não suporta bibliotecas nativas exigidas pelo Firebase
* Erro de resolução de pacotes ao instalar Firebase e dependências relacionadas
* Falta de tempo para migração para Expo Dev Client ou app nativo
* Inicialmente tentado rodar no emulador Android, mas não funcionou (máquina com limitações)

---

## 🔄 Fluxo de uso (telas e lógica)

* 🔐 Login e Cadastro com validações básicas (mockado)
* 📊 Home com cards de saldo de receitas e despesas
* 📅 Filtro de movimentações por data (funcional mesmo com dados mockados)
* ➕ Registro de entradas e saídas
* 👤 Perfil e edição de dados

As informações simulam uma base real com controle por data, somatório por tipo e listagem de movimentações.

---

## 🧪 Mock de dados e controle de login

### Onde modificar:

```js
// Arquivo:
src/pages/routes/index.js

// Linha para alternar o fluxo:
const mockSigned = true; // ou false
```

* `mockSigned = false` → mostra as telas de login/cadastro
* `mockSigned = true` → simula usuário logado, acessando as demais rotas diretamente

---

## 🔥 Tentativa de integração com Firebase

* Projeto Firebase configurado (auth + firestore)
* Contexto de autenticação (`auth.js`) e acesso ao banco (`Firebase/index.ts`) prontos
* Códigos foram comentados devido aos seguintes problemas:

  * Incompatibilidade do Expo Go com bibliotecas nativas do Firebase
  * Tempo insuficiente para usar Expo Dev Client ou ejectar para app nativo
* A lógica do Firebase está mantida para futuras ativações
* Podemos demonstrar o Firebase online na apresentação se necessário

---
