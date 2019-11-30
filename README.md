# namespace

[![NPM version](https://badge.fury.io/js/%40iyuo%2Fnamespace.svg)](https://www.npmjs.com/package/@iyuo/namespace)
[![License](https://img.shields.io/github/license/iyuo/namespace)](https://github.com/iyuo/namespace/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnamespace)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnamespace)

The TypeScript plugin for @iyuo/context ecosystem.

# Install

Node:

[![https://nodei.co/npm/@iyuo/namespace.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@iyuo/namespace.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@iyuo/namespace)

```shell
npm install @iyuo/namespace
```

[Browser](//iyuo.github.io/namespace/dist/namespace.js)

```html
<script src="//iyuo.github.io/namespace/dist/namespace.min.js"></script>
```

## Import package to the project

TypeScript:

```typescript
import { namespace } from "@iyuo/namespace";
```

or JavaScript:

```javascript
var iyuo = require("@iyuo/namespace");
var namespace = iyuo.namespace;
```

# Documentation

Link: [https://iyuo.github.io/namespace/docs/index.html](https://iyuo.github.io/namespace/docs/index.html)

# Sample

```ts
let obj: any = {};
let c = new Context(obj);
c.use("uno.dos.tres")
  .map(namespace)
  .use("quatro.cinco.seis")
  .map(namespace);

console.log(obj.uno.dos.tres.quatro.cinco.seis);
```

# Rights and Agreements

License [Apache-2.0](https://github.com/iyuo/namespace/blob/master/LICENSE)

Copyright 2019 Oleksandr iyuo
