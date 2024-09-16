const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/pi', async (req, res) => {
    const digits = parseInt(req.query.digits);
    if (isNaN(digits) || digits < 1 || digits > 1000) {
        return res.status(400).json({ error: 'Please provide a number between 1 and 1000.' });
    }

    // Using external Pi API
    try {
        const response = await axios.get(`https://api.pi.delivery/v1/pi?start=0&numberOfDigits=${digits}`);
        res.json({ piValue: response.data.content });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pi value from external API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
