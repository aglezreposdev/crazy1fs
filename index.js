const fs = require('fs')
const data = require('./data')
// file creation
fs.writeFile('./files/file1.txt', JSON.stringify(data), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('the file called x was created')
    }
})
