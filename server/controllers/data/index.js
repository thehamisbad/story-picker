const express = require('express');
const router = express.Router();

const storyTypes = require('../../../data/story-types.json');
const settings = require('../../../data/settings.json');

router.get('/story-types', (req, res) => {
    res.json(storyTypes);
});

router.get('/settings', (req, res) => {
    res.json(settings);
});

module.exports = router;