# RocketPets

Este é o **RocketPets**, um projeto FrontEnd desenvolvido para o programa **RocketLab 2025**, em parceria com a **Visagio**.

O objetivo foi criar uma aplicação web moderna utilizando **React**, **TypeScript**, **Vite** e **styled-components**, simulando uma pequena loja online de pets com funcionalidades completas como carrinho persistente, sistema de filtros, modais e gerenciamento de estado via contextos.


## Tecnologias utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- React Icons
- React Router DOM
- LocalStorage API


## Funcionalidades principais

- Adicionar/remover pets do carrinho
- Visualizar o carrinho e “finalizar compra”
- Filtros por espécie com modal dedicado
- Estado persistente mesmo após atualizar a página (via localStorage)
- Interface responsiva
  

## Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/mariabdma/rocketpets.git
cd rocketpets
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```bash
http://localhost:5173
```


## Estrutura do repositório
```bash
src/
│
├── components/        # Componentes reutilizáveis (Header, Modal, CartCard etc.)
├── context/           # Contextos (ShoppingCart, Filter)
├── data/              # Dados estáticos dos pets
├── pages/             # Páginas principais (Home)
├── utils/             # Funções utilitárias (ex: formatAge)
```


## Contato
Email: mariabdma@gmail.com

LinkedIn: [linkedin.com/in/mariabdma](https://linkedin.com/in/seu-usuario)

GitHub: [github.com/mariabdma](github.com/mariabdma)
