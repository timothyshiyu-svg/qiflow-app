const dict = {
  'zh-CN': {
    home:'首页', sound:'声波', fav:'收藏', products:'产品', aiGuide:'AI引导', qiCycle:'气循环', dashboard:'仪表盘', aiAssistant:'AI助手', community:'社区', about:'简介', me:'我的', login:'登录', privacy:'隐私',
    welcome:'QiFlow 五音通脉疗愈', subtitle:'东方智慧 × AI 身心疗愈'
  },
  'en-US': {
    home:'Home', sound:'Sound', fav:'Favorites', products:'Products', aiGuide:'AI Guide', qiCycle:'Qi Cycle', dashboard:'Dashboard', aiAssistant:'AI Assistant', community:'Community', about:'About', me:'Me', login:'Login', privacy:'Privacy',
    welcome:'QiFlow Healing', subtitle:'Eastern Wisdom × AI Wellness'
  }
};
function t(k){ const l=localStorage.getItem('locale')||'zh-CN'; return (dict[l]&&dict[l][k])||k; }
function setLocale(l){ localStorage.setItem('locale', l); location.reload(); }
