const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.join(__dirname, '../../qiflow.db');
const db = new sqlite3.Database(dbPath);
const run = (sql) => new Promise((resolve, reject) => db.run(sql, (e)=>e?reject(e):resolve()));

async function initDb() {
  await run(`CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY,email TEXT UNIQUE,name TEXT,locale TEXT DEFAULT 'zh-CN',created_at INTEGER)`);
  await run(`CREATE TABLE IF NOT EXISTS sensing_logs (id TEXT PRIMARY KEY,user_id TEXT,hrv INTEGER,heart_rate INTEGER,motion_level TEXT,emotion TEXT,created_at INTEGER)`);
  await run(`CREATE TABLE IF NOT EXISTS constitution_profiles (id TEXT PRIMARY KEY,user_id TEXT,constitution_type TEXT,score_json TEXT,created_at INTEGER)`);
  await run(`CREATE TABLE IF NOT EXISTS therapy_plans (id TEXT PRIMARY KEY,user_id TEXT,scene TEXT,five_tone TEXT,bpm INTEGER,natural_sound TEXT,guidance_text TEXT,created_at INTEGER)`);
  await run(`CREATE TABLE IF NOT EXISTS audio_records (id TEXT PRIMARY KEY,user_id TEXT,plan_id TEXT,duration_sec INTEGER,mode TEXT,file_url TEXT,created_at INTEGER)`);
  await run(`CREATE TABLE IF NOT EXISTS hardware_events (id TEXT PRIMARY KEY,user_id TEXT,device_id TEXT,event_type TEXT,detail TEXT,created_at INTEGER)`);
}
module.exports = { db, initDb };
