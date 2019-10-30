const express = require('express');
const router = express.Router();

const storyTypes = require('../../../data/story-types.json');
const settings = require('../../../data/settings.json');
const plotPoints = require('../../../data/plot-points.json');

router.get('/story-types', (req, res) => {
    res.json(storyTypes);
});

router.get('/settings', (req, res) => {
    res.json(settings);
});

router.get('/plot-points', (req, res) => {
    res.json(plotPoints);
});

module.exports = router;