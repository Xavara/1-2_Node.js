const os = require('os');

console.log("Sistema operativo:", os.platform());
console.log("Versión:", os.release());
console.log("Memória libre:", os.freemem(),"bytes");
console.log("Memória total:", os.totalmem(),"bytes");