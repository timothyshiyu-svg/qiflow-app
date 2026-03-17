function renderHeader(title, subtitle=''){
  return `<header class="bg-ink text-white p-4 rounded-b-3xl shadow"><h1 class="text-xl font-bold">${title}</h1><p class="text-xs opacity-90 mt-1">${subtitle}</p></header>`;
}
function injectHeader(id,title,subtitle=''){ const el=document.getElementById(id); if(el) el.innerHTML=renderHeader(title,subtitle); }
