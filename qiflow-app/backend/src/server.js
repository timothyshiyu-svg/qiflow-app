const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { initDb } = require('./db/init');

const app = express();
const PORT = process.env.PORT || 8787;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));

initDb();

app.get('/api/health', (req, res) => res.json({ ok: true, app: 'QiFlow', ts: Date.now() }));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/sensing', require('./routes/sensing'));
app.use('/api/analysis', require('./routes/analysis'));
app.use('/api/constitution', require('./routes/constitution'));
app.use('/api/audio', require('./routes/audio'));
app.use('/api/hardware', require('./routes/hardware'));
app.use('/api/scenario', require('./routes/scenario'));
app.use('/api/report', require('./routes/report'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, message: '服务器异常，请稍后重试' });
});

app.listen(PORT, () => console.log(`QiFlow backend running on http://localhost:${PORT}`));
