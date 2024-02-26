const express = require('express');
const app = express();

// route d'acceuil
app.get('/', (req, res) => {
    res.send('Hello World ');
})

// ecoute du serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveur is running on port http://localhost:$(PORT)');
})