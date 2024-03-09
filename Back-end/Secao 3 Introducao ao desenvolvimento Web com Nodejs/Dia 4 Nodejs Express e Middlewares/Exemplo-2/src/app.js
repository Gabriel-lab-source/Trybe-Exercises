const express = require('express');

const path = require('path'); 

const fs = require('fs').promises;

const app = express();

app.use(express.json());

app.get('/teams', async (req, res, next) => {
  try {
    const jsonData = await fs.readFile(path.resolve('./teams.json'));
    const teamsData = JSON.parse(jsonData);
    return res.status(200).json({ teamsData });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

module.exports = app;