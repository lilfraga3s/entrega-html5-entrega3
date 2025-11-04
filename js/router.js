const Router = (function(){
  const routes = {
    home: Templates.home,
    projetos: Templates.projetos,
    cadastro: Templates.cadastro
  };

  function navigateTo(route){
    const view = document.getElementById('app');
    if(!view) return;
    // apply fade-out by toggling view classes
    view.classList.remove('fade-in');
    view.classList.add('fade-out');
    setTimeout(()=>{
      view.innerHTML = routes[route]();
      // after injecting, trigger fade-in on container
      view.classList.remove('fade-out');
      view.classList.add('fade-in');
      initPageScripts(route);
    }, 260);
  }

  function initPageScripts(route){
    if(route === 'cadastro'){
      Validation.attachForm(document.getElementById('form-cadastro'));
    }
    // bind modal triggers to UI.openModal
    document.querySelectorAll('[data-open-modal]').forEach(b=>{ b.addEventListener('click', ()=>UI.openModal(b.getAttribute('data-open-modal'))); });
  }

  function handleLinks(e){
    const link = e.target.closest('[data-link]');
    if(link){
      e.preventDefault();
      const target = link.getAttribute('data-link');
      navigateTo(target);
      document.querySelectorAll('.nav-list').forEach(n=>n.classList.remove('open'));
    }
  }

  function init(){
    document.body.addEventListener('click', handleLinks);
    navigateTo('home');
  }

  return { init, navigateTo };
})();
