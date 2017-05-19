import fs from 'fs'
import marked from 'marked'

const content = marked(fs.readFileSync('README.md').toString())
const output =
`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="initial-scale=1">
<meta name="description" content="Anti Cpp Cpp Club">
<meta name="author" content="ACCC">
<title>Anti Cpp Cpp Club</title>
<style>
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  margin: 0 auto;
  padding: 8px;
}

h1 {
  text-align: center;
  font-family: Courier New, Courier, monospace;
}
@media screen and (min-width: 640px) { body { max-width: 50%; } }
</style>
</head>
<body>
${content}
</body>
</html>`

fs.writeFileSync('index.html', output)
