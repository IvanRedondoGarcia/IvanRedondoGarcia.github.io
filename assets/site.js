
(function(){
  var b=document.querySelector('.menu-btn'), n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    n.addEventListener('click',function(ev){if(ev.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
  document.querySelectorAll('[data-lang-pick]').forEach(function(a){a.addEventListener('click',function(){try{localStorage.setItem('lang',a.getAttribute('data-lang-pick'))}catch(e){}})});
})();
