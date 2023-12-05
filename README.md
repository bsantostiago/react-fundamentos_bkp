# Fundamentos de React

# 09-states-hooks

State é uma propriedade de um componente que pode ser alterada ao longo do tempo. Por exemplo, um componente que exibe um contador pode ter um state que representa o valor atual do contador.

Quando algo no seu aplicativo React precisa ser atualizado dinamicamente (como um contador que aumenta a cada clique em um botão), você usa um state para armazenar e gerenciar essa informação. Isso permite que o React reaja às mudanças no state e atualize automaticamente a interface do usuário para refletir essas mudanças.

## Exemplos de mudanças que podem ser gerenciadas por states

- Captura de dados de formulário
- Visibilidade de componentes
- Filtros e buscas de dados
- Contadores (likes por exemplo)
- Temas/Estilos
- Pontuação/vida de um jogador

## React Hooks

Hooks (ou 'ganchos') são funções especiais iniciadas com o prefixo 'use' que permitem gerenciar estados e outras funcionalidades do ciclo de vida de um componente. Os Hooks substituiram o gerenciamento de states através de classes (componentes de classe).

O React possui diversos tipos de hooks, mas os principais são os de gerenciamento de estados (useState) e o de gerenciamento de efeitos colaterais (useEffect), ou seja, ele permite controlar a execução de código (buscar dados, manipular o DOM) quando o componente é montado, atualizado ou desmontado.

### useState

Controla como as informações são armazenadas e gerenciadas em um componente.

### useEffect

Controla efeitos colaterais em componentes. Efeitos colaterais são operações que não estão diretamente relacionadas à renderização do componente, como buscar dados de uma API, manipular o DOM, ou subscrever-se a eventos externos.

---

## 07-props-com-dados-dinamicos

- Gerando os dados para props a partir de um array com objetos
- Uso do map para geração dos artigos com as props

---

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
