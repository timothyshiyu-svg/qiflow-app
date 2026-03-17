const navItems = [
  ['sound','sound.html'],['home','../index.html'],['fav','favorites.html'],['products','products.html'],
  ['aiGuide','ai-guide.html'],['qiCycle','qi-cycle.html'],['dashboard','dashboard.html'],['aiAssistant','ai-assistant.html'],
  ['community','community.html'],['about','about.html'],['me','me.html'],['login','login.html']
];
function renderNav(containerId='bottomNav', inPages=false){
  const c=document.getElementById(containerId); if(!c) return;
  const path=location.pathname.split('/').pop();
  const base = inPages ? '' : 'pages/';
  const items = [['home','../index.html'],['dashboard','dashboard.html'],['community','community.html'],['me','me.html']];
  c.innerHTML = `<div class="grid grid-cols-4 gap-1 text-xs">${items.map(([k,u])=>{
    const href = inPages ? (u==='../index.html'?'../index.html':u) : (u==='../index.html'?'index.html':u);
    const active = (k==='home' && (path==='index.html'||path==='')) || (href.endsWith(path));
    return `<a class='py-2 text-center rounded ${active?'bg-amber text-white':'text-slate-700'}' href='${href}'>${t(k)}</a>`;
  }).join('')}</div>`;
}
