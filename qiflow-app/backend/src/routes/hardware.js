const router = require('express').Router();
router.post('/connect', (req, res) => res.json({ ok:true, device:{ connected:true, protocol:'BLE5.3', latencyMs:35 } }));
router.post('/button', (req, res) => {
  const action=(req.body||{}).action||'single_click';
  res.json({ ok:true, mappedAction: action==='double_click'?'switch_scene':'pause_or_resume' });
});
module.exports = router;
