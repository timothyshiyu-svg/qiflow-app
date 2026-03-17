const router = require('express').Router();

const SCENES = {
  sleep: { fiveTone: '羽', bpm: 60, naturalSound: 'stream', guide: '放松肩颈，缓慢呼气8秒' },
  anxiety: { fiveTone: '角', bpm: 80, naturalSound: 'rain', guide: '4-6呼吸法，先短吸后长呼' },
  fatigue: { fiveTone: '宫', bpm: 72, naturalSound: 'forest', guide: '坐直脊柱，缓慢深呼吸' },
  mood: { fiveTone: '商', bpm: 68, naturalSound: 'river', guide: '觉察情绪，不评判，随声流动' }
};

router.get('/:type', (req, res) => {
  const t = req.params.type;
  const data = SCENES[t];
  if (!data) return res.status(404).json({ ok:false, message:'场景不存在' });
  res.json({ ok: true, scene: t, plan: data });
});

module.exports = router;
