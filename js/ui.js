const UI = (function(){
  function init(){
    document.querySelectorAll('.btn-hamburger').forEach(function(btn){
      btn.addEventListener('click', function(){
        var id = btn.getAttribute('aria-controls') || 'nav-list';
        var nav = document.getElementById(id) || document.querySelector('.nav-list');
        if(nav) nav.classList.toggle('open');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
      });
    });

    document.body.addEventListener('click', function(e){
      if(e.target.matches('[data-close-modal]') || e.target.closest('.modal-close')){
        const modal = e.target.closest('.modal');
        if(modal) closeModal(modal.id);
      }
      if(e.target.matches('.modal')){ const modal = e.target; closeModal(modal.id); }
    });
  }

  function openModal(id){
    const modal = document.getElementById(id);
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id){ const modal = document.getElementById(id); if(!modal) return; modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }

  function showToast(message, type='success', timeout=4000){
    const area = document.getElementById('toast-area'); if(!area) return;
    const toast = document.createElement('div'); toast.className = 'toast ' + (type==='danger' ? 'danger' : 'success');
    toast.innerHTML = '<div class="toast-message">'+message+'</div>';
    area.appendChild(toast); setTimeout(()=>{ toast.classList.add('visible'); }, 20);
    setTimeout(()=>{ toast.classList.remove('visible'); setTimeout(()=>toast.remove(),300); }, timeout);
  }

  return { init, openModal, closeModal, showToast };
})();
