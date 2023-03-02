const fs = require('fs/promises')

class FileService {
    constructor(){}
    
    async validateCSV(content) {
        
    }
    
    async csvToJSON( fileContent ) {
        const contentLines = fileContent.toString().split('\n')
        
        const header = contentLines[0].replace('\r', '').split(',')

        let contentData = []
        for(let index = 1; index < contentLines.length; index++) {
            let data = {}
            const currentLine = contentLines[index].replace('\r', '').split(', ')

            currentLine.forEach(( item, index ) => {
                data[header[index]] = item
            })
            contentData.push(data)
        }
        
        await this.writeJSONFile(__dirname + '/../data/output.json', contentData)
    }

    async writeJSONFile( directoryFolder, contentData ) {
        try {
            const content = JSON.stringify(contentData, null, 4)
            console.log(content)
            await fs.writeFile( directoryFolder, content )
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = { FileService }