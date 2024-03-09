const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((t) => t.id === id)) next();
  else res.sendStatus(404).json({ message: 'Time não encontrado' });
};

const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório' });
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });
  next();
};

module.exports = {
  existingId,
  validateTeam,
};