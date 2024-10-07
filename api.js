app.post('/activate', async (req, res) => {
    const { sim_number } = req.body;

    let simCard = await SimCard.findOne({ sim_number });
    if (!simCard) {
        return res.status(404).send('SIM card not found');
    }

    if (simCard.status === 'active') {
        return res.status(400).send('SIM card is already active');
    }

    simCard.status = 'active';
    simCard.activation_date = new Date();
    await simCard.save();

    res.send('SIM card activated');
});
