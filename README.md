# SQ-Calculator

> Wrap de calculos para estatisticas da Squid.

<!-- TOC -->

- [SQ-Calculator](#sq-calculator)
  - [Instalação](#instalação)
  - [Uso](#uso)

<!-- /TOC -->

## Instalação

> Adicionar ```sq-calculator: squidit/sq-calculator``` no package.json e rodar ```npm install```.

## Uso

Após a instalação use `require` para trazer o pacote:

```js
const Calculator = require('sq-calculator').Calculator
```

Crie uma nova instancia da classe:

```js
const Calculator = require('sq-calculator').Calculator
const calc = new Calculator(posts, followers)
```

Onde:

```js
var posts
```
> Array de posts do usuário que deve estar no seguinte formato: ```js[{upvotes: 0, comentarios: 0}]```


```js
var followers
```
> O Inteiro de seguidores do usuário

Isso vai liberar 10 propriedades. As propriedades podem ser acessadas da seguinte forma:

> get
  ```js
  calc.packageName
  ```

> set
```js
  calc.packageName = newName
  ```

### `calc.posts[get, set]`

Busca ou seta o array de posts atual.

### `calc.followers[get, set]`

Busca ou seta o intero do número de seguidores.

### `calc.likesCount[get, set]`

Busca ou seta o intero do número total de likes.

### `calc.commentsCount[get, set]`

Busca ou seta o intero do número total de comentários.

### `calc.likesAverage[get, set]`

Busca ou seta o float da média de likes.

### `calc.commentssAverage[get, set]`

Busca ou seta o float da média de comentários.

### `calc.reach[get, set]`

Busca ou seta o float da taxa de alcance do usuário.

### `calc.engagementRate[get, set]`

Busca ou seta o float da taxa de engajamento do usuário.

### `calc.packageName[get, set]`

Busca ou seta o nome do pacote atual.

### `calc.packageVersion[get, set]`

Busca ou seta a versão do pacote no formato `0.0.0`.
