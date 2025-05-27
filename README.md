# 💸 OfNances - App de Controle Financeiro

Aplicativo mobile desenvolvido em React Native com Expo para ajudar no controle de receitas e despesas diárias. Este projeto foi criado como parte da disciplina de **Programação para Dispositivos Móveis (UTFPR)**.

## 📱 Funcionalidades

- Login e Cadastro de usuários
- Registro de receitas e despesas
- Visualização de saldo, entradas e saídas do dia
- Filtro por data via calendário
- Navegação entre telas com menu lateral (drawer)
- Interface adaptada com base em protótipo do Figma

## 🔧 Tecnologias utilizadas

- React Native (com Expo)
- Firebase (autenticação e banco de dados - opcional ou futura)
- Styled-components
- React Navigation
- AsyncStorage
- Date-fns
- React Native Calendars

## 🖥️ Protótipo

Você pode visualizar o layout base usado para o projeto neste link:  
[Figma - OfNances](https://www.figma.com/design/C2wIBFKFYcQU99wy9EbAuF/OfNances)

## 📂 Estrutura do projeto

```
src/
├── assets/
├── components/
├── contexts/
├── pages/
├── routes/
├── services/
└── styles/
```

## ▶️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ofnances-app.git
   cd ofnances-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie com Expo:
   ```bash
   npx expo start
   ```

4. Abra no celular (via app Expo Go) ou emulador.

> ⚠️ Certifique-se de que o Node.js e o Expo CLI estão instalados.

## 📌 Observações para teste

No arquivo `src/routes/index.js` você pode alternar o tipo de rota para teste:

```js
// Para forçar entrada direto no app (sem login)
return <AppRoutes />;

// Para exigir autenticação (produção)
return signed ? <AppRoutes /> : <AuthRoutes />;
```

## 👨‍💻 Autor

- Nome do aluno: **Fernando Pacheco Oliveira**
- RA: **2152916**
- Professor: **Marlon Marcon**
- Disciplina: **Programação para Dispositivos Móveis - UTFPR 2025/1**