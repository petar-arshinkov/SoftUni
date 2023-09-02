function extractFile(path){

    let lastSlashIndex = path.lastIndexOf('\\');
    let lastDotIndex = path.lastIndexOf('.');
    let filename = path.substring(lastSlashIndex + 1, lastDotIndex);
    let extension = path.substring(lastDotIndex+1);
    console.log(`Filename: ${filename}`);
    console.log(`File extension: ${extension}`);
}


extractFile('C:\\Internal\\training-internal\\Template.pptx')