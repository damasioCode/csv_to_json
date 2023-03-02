const { 
    FileController 
} = require('./src/file/file.controller')


const run = async () => {
    const file = new FileController()
    file.handle()
}

run()
