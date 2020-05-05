const fs = requrie('fs');

    module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
                let encode = fs.readFileSync(filePath, 'utf8');
                let response = Buffer.from(encode, 'hex').toString('utf8');
                resolve(response);
    });
}
