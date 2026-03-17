const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { db } = require('../db/init');
router.post('/login', (req, res) => {
  const { email, name = 'QiFlow用户', locale = 'zh-CN' } = req.body || {};
  if (!email) return res.status(400).json({ ok: false, message: 'email必填' });
  const id = uuid();
  db.run('INSERT OR IGNORE INTO users(id,email,name,locale,created_at) VALUES(?,?,?,?,?)', [id, email, name, locale, Date.now()]);
  res.json({ ok: true, token: `demo-${id}`, user: { id, email, name, locale } });
});
module.exports = router;
