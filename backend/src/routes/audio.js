const router = require('express').Router();
router.post('/generate', (req, res) => {
  const { mode='quick', fiveTone='角', bpm=80, naturalSound='rain' } = req.body || {};
  res.json({ ok: true, audio: { fileUrl:`/audio/mock-${Date.now()}.mp3`, durationSec: mode==='quick'?5:900, meta:{ model:'MusicGen-ft-mock', fiveTone, bpm, naturalSound, spatial3D:true } } });
});
module.exports = router;
