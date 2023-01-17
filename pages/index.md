---
title: Hello
trademark: Trademark
---

import styles from './style.module.sass';

# Hello

<button className={styles.button}>SASS, CSS modules, JSX inside Markdown</button>

Here are the current goals for fixing the layout of this repo:

1. Center the entire layout ✅
2. Make the header links collapse into a hamburger menu
3. Make header links show on all pages (or hamburger on mobile) ✅
4. Make footer show on all pages ✅

{/* Check out https://nextra.site/docs/guide/syntax-highlighting */}

```javascript filename="index.js" {1,4-5}
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
