const router = require('express').Router();

// 九型体质简版打分（MVP）
const TYPES = ['平和质','气虚质','阳虚质','阴虚质','痰湿质','湿热质','血瘀质','气郁质','特禀质'];

router.post('/assess', (req, res) => {
  const { answers = [] } = req.body || {};
  if (!Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({ ok: false, message: 'answers必填' });
  }
  const score = new Array(9).fill(0);
  answers.forEach((a, i) => { score[i % 9] += Number(a) || 0; });
  const maxIdx = score.indexOf(Math.max(...score));
  return res.json({ ok: true, result: { type: TYPES[maxIdx], score, suggestion: `建议优先使用${maxIdx===7?'角音':'羽音'}方案，连续7天观察。` } });
});

module.exports = router;
