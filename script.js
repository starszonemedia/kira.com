const tap=document.getElementById('tap');

function effect(e){
  const r=tap.getBoundingClientRect();
  const x=(e.clientX ?? r.left+r.width/2)-r.left;
  const y=(e.clientY ?? r.top+r.height/2)-r.top;

  const ripple=document.createElement('span');
  ripple.className='ripple';
  ripple.style.left=(x-10)+'px';
  ripple.style.top=(y-10)+'px';
  tap.appendChild(ripple);
  setTimeout(()=>ripple.remove(),800);

  const symbols=['✦','✧','♡','⋆','·'];
  for(let i=0;i<5;i++){
    const s=document.createElement('span');
    s.className='spark';
    s.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    s.style.left=x+'px';
    s.style.top=y+'px';
    s.style.setProperty('--x',(Math.random()*150-75)+'px');
    s.style.setProperty('--y',(-35-Math.random()*90)+'px');
    tap.appendChild(s);
    setTimeout(()=>s.remove(),1100);
  }

  if(navigator.vibrate) navigator.vibrate(10);
}
tap.addEventListener('pointerdown',effect);
