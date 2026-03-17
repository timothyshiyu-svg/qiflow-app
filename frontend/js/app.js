const API='http://localhost:8787/api';
const cards=['焦虑','失眠','疲惫','平静','低落','烦躁'];
let selected='焦虑';
const box=document.getElementById('emotionCards');
cards.forEach(c=>{const b=document.createElement('button');b.className='border rounded-lg py-2 text-sm';b.textContent=c;b.onclick=()=>{selected=c;[...box.children].forEach(x=>x.classList.remove('bg-amber','text-white'));b.classList.add('bg-amber','text-white')};box.appendChild(b)});
if(box.firstChild) box.firstChild.classList.add('bg-amber','text-white');

async function runAnalysis(retry=1){
  try{
    const emotion=selected==='焦虑'?'anxious':selected==='失眠'?'insomnia':'fatigue';
    const r=await fetch(`${API}/analysis/run`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({hrv:46,emotion,constitution:'肝郁气滞'})});
    if(!r.ok) throw new Error('HTTP '+r.status);
    document.getElementById('analysis').textContent=JSON.stringify(await r.json(),null,2);
  }catch(e){
    if(retry>0) return runAnalysis(retry-1);
    document.getElementById('analysis').textContent='分析失败：'+e.message;
  }
}
document.getElementById('runBtn').onclick=()=>runAnalysis(1);
