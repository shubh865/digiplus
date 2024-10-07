app.post('/deactivate', async (req, res) => {
    const { sim_number } = req.body;

    let simCard = await SimCard.findOne({ sim_number });
    if (!simCard) {
        return res.status(404).send('SIM card not found');
    }

    if (simCard.status === 'inactive') {
        return res.status(400).send('SIM card is already inactive');
    }

    simCard.status = 'inactive';
    simCard.activation_date = null;
    await simCard.save();

    res.send('SIM card deactivated');
});
