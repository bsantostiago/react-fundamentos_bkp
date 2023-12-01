# Fundamentos de React

## 06-props

São parâmetros ou argumentos passados para os componentes React, normalmente usados para injeção de dados dinâmicos. As props funcionam como um objeto, e cada prop criada por você passa a ser uma propriedade deste objeto.

As props são criadas manualmente, embora também exista a prop 'children' que permite ler/transmitir o conteúdo entre as tags de abertura/fechamento de um componente.

- Artigo Prop children
- Outras props
- Desestruturação
- Props pra imagem (talvez) - ajuste index.css

- Exercicios (Conteudo e Artigo)
  1. Crie um array com o nome de 3 responsaveis
  2. Dentro das chamadas dos artigos, passe uma nova prop chamada responsavel.
  3. O primeiro artigo deve receber/mostrar o primeiro responsavel; o segundo deve receber/mostrar o nome do segundo e o terceiro do terceiro.

---

## 05-styled-components

- npm install styled-components
- import styled from "styled-components"
- Styled[Componentes]
- extensão vscode-styled
- talvez:
  - styled global
  - arquivo/módulo com componentes styled
  - import dos componentes

---

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

## 04-estilos

### CSS in JS

- CSS inline: aplicado via atributo style da tag usando sintaxe JS, ou seja, objeto com propriedades.

- CSS externo e global

---

## 00-projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx
