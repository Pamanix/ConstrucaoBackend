const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
res.send("Hello World");
});


app.listen(PORT, () => {
    console.log("Sevidor está ouvindo na porta ${PORT}");
});

module.exports = app; // Exporta a instância da aplicação Express