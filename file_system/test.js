const fs = require('fs')

const content = 'Hello, World!'

try {
  const data = fs.writeFileSync('/Users/illia/programming/JS_Flavio_cources/file_system/test.txt', content)
} catch (err) {
  console.error(err)
}