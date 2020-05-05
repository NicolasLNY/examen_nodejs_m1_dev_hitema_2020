const crypto = require('crypto');

function sha1Encode(data) {
    return crypto.create('sha1').update(data).digest('hex')
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    const encod = authorization.replace('Basic', '';
    const decod = Buffer.from(encod, 'base64').toString('utf8');
    const auth = decod.split(':');
    const isValid = authentification[0] === 'node' && authentification[1] === sha1Encode('password');
    isValid ? next() : response.sendStatus(401);


}


