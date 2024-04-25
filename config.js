const crypto =require('crypto')
const cry =crypto.createHash;
crypto.createHash=algorithm=>cry(algorithm=="md4"?"sha256":algorithm);