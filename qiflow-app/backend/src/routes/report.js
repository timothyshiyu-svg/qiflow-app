const router = require('express').Router();

router.get('/dashboard/:userId', (req, res) => {
  res.json({
    ok: true,
    data: {
      pressureIndex: 43,
      heartRateRecovery: '+12% (7日)',
      trend: [72, 68, 61, 59, 57, 52, 49],
      sleepScore: [58, 62, 66, 71, 74, 79, 83],
      anxietyRelief: [20, 28, 35, 43, 56, 61, 69],
      summary: '压力指数持续下降，睡眠质量提升，建议保持“羽音+溪流”夜间方案。'
    }
  });
});

module.exports = router;
