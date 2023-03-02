const fs = require('fs/promises')
const { FileService } = require('./file.service')

class FileController {
    constructor() {
        this.filePath = 'src/data/mock.csv'
    }

    async handle() {
        const fileService = new FileService()
        return fileService.csvToJSON( await this.getFile() )
    }

    async getFile() {
        try {
            const data = await fs.readFile( this.filePath, { encoding: 'utf8' })
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = { FileController }