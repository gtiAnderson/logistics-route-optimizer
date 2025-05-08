# 🚚 Otimizador de Rota de Entrega

Projeto desenvolvido como parte do **Desafio 1 - Backend Development - Node.js - AWS da Compass UOL**. O objetivo é criar um algoritmo capaz de encontrar a rota mais eficiente para um caminhão visitar todos os pontos de entrega e retornar ao ponto de partida, minimizando a distância total percorrida.

---

## 📌 Descrição

Você é um desenvolvedor backend em uma empresa de logística. Sua missão é construir um otimizador de rotas. Dado um conjunto de pontos de entrega com coordenadas X e Y, o sistema retorna a ordem de visitação mais eficiente usando o algoritmo do Vizinho Mais Próximo (Nearest Neighbor).

---

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── index.ts       # Arquivo principal com a lógica do algoritmo
├── README.md          # Documentação do projeto
├── package.json       # Dependências e scripts
└── tsconfig.json      # Configuração do TypeScript
```

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript

---

## ✅ Funcionalidades

- Entrada de pontos de entrega com `id`, `x`, e `y`
- Seleção de ponto inicial aleatório
- Otimização da rota com o algoritmo Nearest Neighbor
- Cálculo da distância total percorrida
- Tratamento de erros para dados inválidos

---

## 🧾 Exemplo de Entrada

```ts
const pontos: PontoEntrega[] = [
  { id: 1, x: 0, y: 0 },
  { id: 2, x: 10, y: 5 },
  { id: 3, x: 5, y: 12 },
  { id: 4, x: 8, y: 3 },
  { id: 5, x: 2, y: 8 },
];
```

---

## 📤 Saída Esperada

```ts
Ordem da rota: [ 4, 2, 1, 5, 3, 4 ]
Distância total: 33.22
```

---

## 🔐 Tratamento de Erros

- Pontos com campos ausentes ou inválidos são detectados
- Erros são lançados com mensagens descritivas
- Para testar a validação, a tipagem `any[]` foi usada propositalmente para burlar o TypeScript e simular dados inválidos em tempo de execução

---

## ▶️ Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Rode o projeto:

```bash
npx ts-node src/index.ts
```

---


Desenvolvido por **Anderson Moreira Amaral - Compass UOL**