function saveUser(user){ localStorage.setItem('qiflow_user', JSON.stringify(user)); }
function getUser(){ try{return JSON.parse(localStorage.getItem('qiflow_user')||'null')}catch{return null} }
function isLogin(){ return !!getUser(); }
function logout(){ localStorage.removeItem('qiflow_user'); location.href='../pages/login.html'; }
function saveReport(data){ localStorage.setItem('qiflow_report', JSON.stringify(data)); }
function getReport(){ try{return JSON.parse(localStorage.getItem('qiflow_report')||'null')}catch{return null} }
