const fs = require("fs");
const yargs = require("yargs");

const crearArchivo = async (base = 5, list = false, hasta = 22) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${"x".red} ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log("===============");
      console.log(`===Tabla del ${base}===`);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-de-${base}.txt`, salida);

    return `tabla-${base}.txt creada`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
