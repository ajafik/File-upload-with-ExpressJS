const fse = require('fs-extra')

try {
    fse.copySync('uploads/games/file/file.apk', './uploads/games/art/test.apk')
    console.log('success!')
} catch (err) {
    console.error(err)
}