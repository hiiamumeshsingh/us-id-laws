
function runSearch(value){
  const q=(value||'').trim().toLowerCase();
  const box=document.getElementById('searchResults');
  if(!box)return;
  if(!q){box.style.display='none';return;}
  const results=[];
  const states=window.SITE_STATES||[];
  const guides=window.SITE_GUIDES||[];
  const posts=window.SITE_POSTS||[];
  states.forEach(s=>{if((s[0]+' '+s[1]).toLowerCase().includes(q))results.push(['../states/'+s[0].toLowerCase().replaceAll(' ','-')+'/',s[0]+' ID Laws','State guide']);});
  guides.forEach(g=>{if((g[1]+' '+g[2]).toLowerCase().includes(q))results.push(['../guides/'+g[0]+'/',g[1],'Guide']);});
  posts.forEach(p=>{if((p[1]+' '+p[2]).toLowerCase().includes(q))results.push(['../blog/'+p[0]+'/',p[1],'Blog']);});
  if(q.includes('real'))results.unshift(['../real-id/','REAL ID explained','Federal standard']);
  box.innerHTML=results.slice(0,7).map(r=>`<a class="search-result" href="${r[0]}"><b>${r[1]}</b> · ${r[2]}</a>`).join('')||'<div class="search-result">No exact match. Try a state name or topic.</div>';
  box.style.display='block';
}
