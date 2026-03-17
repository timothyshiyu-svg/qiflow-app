const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { db } = require('../db/init');
router.post('/capture', (req, res) => {
  const { userId, hrv, heartRate, motionLevel, emotion } = req.body || {};
  if (!userId) return res.status(400).json({ ok: false, message: 'userId必填' });
  db.run('INSERT INTO sensing_logs(id,user_id,hrv,heart_rate,motion_level,emotion,created_at) VALUES(?,?,?,?,?,?,?)', [uuid(), userId, hrv||null, heartRate||null, motionLevel||'low', emotion||'calm', Date.now()]);
  res.json({ ok: true });
});
module.exports = router;
