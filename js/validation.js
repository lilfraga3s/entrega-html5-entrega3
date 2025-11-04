const Validation = (function(){
  function isValidCPF(cpf){
    if(!cpf) return false;
    cpf = cpf.replace(/\D/g,'');
    if(cpf.length !== 11) return false;
    if(/^(\d)\1+$/.test(cpf)) return false;
    const calc = (t)=>{
      let sum=0; for(let i=0;i<t;i++) sum += parseInt(cpf[i]) * ((t+1)-i);
      let res = 11 - (sum % 11); return res >= 10 ? 0 : res;
    };
    return calc(9) === parseInt(cpf[9]) && calc(10) === parseInt(cpf[10]);
  }

  function attachForm(form){
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const cpf = form.querySelector('#cpf');
      const email = form.querySelector('#email');
      let valid = true;
      if(cpf && !isValidCPF(cpf.value)){ valid = false; UI.showToast('CPF inválido!', 'danger'); cpf.setAttribute('aria-invalid','true'); }
      else if(cpf){ cpf.removeAttribute('aria-invalid'); cpf.classList.add('valid'); }
      if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ valid = false; UI.showToast('E-mail inválido!', 'danger'); email.setAttribute('aria-invalid','true'); }
      else if(email){ email.removeAttribute('aria-invalid'); email.classList.add('valid'); }
      form.querySelectorAll('[required]').forEach(function(inp){
        if(!inp.value){ valid = false; inp.setAttribute('aria-invalid','true'); UI.showToast('Preencha todos os campos obrigatórios.', 'danger'); }
      });
      if(valid){
        UI.showToast('Cadastro validado com sucesso!', 'success');
        const data = {};
        ['nome','email','cpf','telefone','nascimento','endereco','cep','cidade','estado'].forEach(k=>{ const el=form.querySelector('#'+k); if(el) data[k]=el.value; });
        try{ localStorage.setItem('cadastro', JSON.stringify(data)); }catch(e){}
      }
    });
  }

  return { attachForm, isValidCPF };
})();
