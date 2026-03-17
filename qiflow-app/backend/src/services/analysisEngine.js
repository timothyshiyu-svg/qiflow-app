function runAnalysis(input={}) {
  const t0 = Date.now();
  const emotion=input.emotion||'calm';
  const hrv=input.hrv||60;
  let rec={ fiveTone:'商', scene:'平衡调理', bpm:68, naturalSound:'river' };
  if (hrv < 50 || emotion==='anxious') rec={ fiveTone:'角', scene:'焦虑急救', bpm:80, naturalSound:'rain' };
  if (emotion==='insomnia') rec={ fiveTone:'羽', scene:'睡眠改善', bpm:60, naturalSound:'stream' };
  if (emotion==='fatigue') rec={ fiveTone:'宫', scene:'疲劳恢复', bpm:72, naturalSound:'forest' };
  return { latencyMs: Date.now()-t0, pressureIndex: Math.max(0,Math.min(100,100-hrv)), recommendation: rec };
}
module.exports = { runAnalysis };
