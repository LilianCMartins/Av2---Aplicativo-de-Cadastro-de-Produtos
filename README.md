# Avaliação Final - Frontend React CRUD Produtos

Este projeto é um frontend em React (Vite) que realiza operações de CRUD (Create, Read, Update, Delete) para produtos, utilizando a API pública disponível em [http://leoproti.com.br:8004/produtos](http://leoproti.com.br:8004/produtos).

![image](https://github.com/user-attachments/assets/b4b79c5a-9f1d-4946-844c-acc9c09a704a)


## Funcionalidades

- Listagem de produtos
- Cadastro de novo produto
- Edição de produto existente
- Exclusão de produto
- Interface moderna com Material-UI
- Controle de rotas com React Router

## Estrutura esperada do produto

```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material-UI (MUI)](https://mui.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## Instalação do Projeto

1. Instale as dependências principais (execute na pasta do projeto):

   ```bash
   npm install
   ```

2. Se for iniciar do zero ou faltar dependências, instale:

   ```bash
   npm install react react-dom
   npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled axios
   npm install --save-dev vite @vitejs/plugin-react
   ```

## Como rodar o projeto

```bash
npm run dev
```

Acesse [http://localhost:5174/](http://localhost:5174/) no navegador.

## Estrutura de Pastas Sugerida

- `src/pages` — Páginas principais (Listar, Criar, Editar)
- `src/components` — Componentes reutilizáveis (Formulário, Tabela, etc)
- `src/services` — Serviços para requisições HTTP (Axios)
- `src/routes` — Definição das rotas da aplicação

## Rotas da Aplicação

- `/` — Lista todos os produtos
- `/novo` — Formulário para cadastrar novo produto
- `/editar/:id` — Formulário para editar produto existente


## Solução de Problemas de Dependências

Se aparecer erro de importação para alguma biblioteca, execute o comando correspondente:

- **react-router-dom**  
  ```bash
  npm install react-router-dom
  ```

- **Material-UI**  
  ```bash
  npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
  ```

- **axios**  
  ```bash
  npm install axios
  ```

Depois, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## Para acessar o projeto 

Entre no link https://av2-aplicativo-de-cadastro-de-produ-liart.vercel.app/

## Erro comum: "Failed to resolve import 'react-router-dom'"

Esse erro indica que a dependência `react-router-dom` não está instalada.  
Execute:

```bash
npm install react-router-dom
```

Repita o comando para outras dependências se necessário, conforme mostrado acima.

## Autora

Lilian Martins

---

Siga as instruções acima para rodar e explorar o projeto!
