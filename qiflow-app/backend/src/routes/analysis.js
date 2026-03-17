const router = require('express').Router();
const { runAnalysis } = require('../services/analysisEngine');
router.post('/run', (req, res) => {
  const result = runAnalysis(req.body || {});
  res.json({ ok: result.latencyMs <= 500, result });
});
module.exports = router;
