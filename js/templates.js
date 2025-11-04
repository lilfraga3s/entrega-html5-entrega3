const Templates = (function(){
  function home(){ return `
    <section class="hero grid grid-12 fade">
      <div class="col-7">
        <h1 class="hero-title">Organização Exemplo — Tecnologia e impacto social</h1>
        <p class="lead">Construímos soluções e programas para transformar comunidades com dados, pessoas e tecnologia.</p>
        <div class="actions">
          <a class="btn primary" href="#" data-link="projetos">Conheça os projetos</a>
          <a class="btn ghost" href="#" data-link="cadastro">Quero ajudar</a>
        </div>
      </div>
      <div class="col-5">
        <figure class="hero-figure">
          <img src="img/projetos/projeto-exemplo.jpg" alt="Voluntários durante ação social">
          <figcaption>Voluntários em ação — Projeto Exemplo.</figcaption>
        </figure>
      </div>
    </section>
    <section class="cards-section fade">
      <h2>Projetos em destaque</h2>
      <div class="cards-grid">
        <article class="card">
          <img src="img/projetos/projeto-exemplo.jpg" alt="Projeto 1">
          <div class="card-body">
            <h3>Alfabetização Digital</h3>
            <p>Capacitação em habilidades digitais para jovens e adultos.</p>
            <div class="card-footer">
              <span class="badge">Tecnologia</span>
              <button class="btn small" data-open-modal="project1">Saber mais</button>
            </div>
          </div>
        </article>
        <article class="card">
          <img src="img/projetos/projeto-exemplo.jpg" alt="Projeto 2">
          <div class="card-body">
            <h3>Coleta Inteligente</h3>
            <p>Sistema de logística para distribuição de alimentos.</p>
            <div class="card-footer">
              <span class="badge secondary">Logística</span>
              <button class="btn small" data-open-modal="project2">Saber mais</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  `; }

  function projetos(){ return `
    <section class="section fade"><h1>Projetos Sociais</h1>
      <section id="voluntariado"><h2>Voluntariado</h2>
        <p>Participar como voluntário é uma forma direta de contribuir. Temos vagas em alfabetização, coleta de alimentos e apoio logístico.</p>
      </section>
      <section id="doar"><h2>Como doar</h2>
        <p>Você pode doar alimentos, roupas ou fazer doações financeiras por transferência ou cartão. Contatos: <a href="mailto:doacoes@exemplo.org">doacoes@exemplo.org</a>.</p>
      </section>
    </section>
  `; }

  function cadastro(){ return `
    <section class="section fade"><h1>Formulário de Cadastro</h1>
      <form id="form-cadastro" class="form" novalidate>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label for="nome">Nome completo</label>
          <input id="nome" name="nome" type="text" required minlength="3" maxlength="100" placeholder="Nome completo">

          <label for="email">E-mail</label>
          <input id="email" name="email" type="email" required placeholder="seu@exemplo.com">

          <label for="cpf">CPF</label>
          <input id="cpf" name="cpf" type="text" inputmode="numeric" required placeholder="000.000.000-00" maxlength="14">

          <label for="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" inputmode="tel" required placeholder="(00) 00000-0000" maxlength="15">

          <label for="nascimento">Data de nascimento</label>
          <input id="nascimento" name="nascimento" type="date" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço</label>
          <input id="endereco" name="endereco" type="text" required>

          <label for="cep">CEP</label>
          <input id="cep" name="cep" type="text" inputmode="numeric" required placeholder="00000-000" maxlength="9">

          <label for="cidade">Cidade</label>
          <input id="cidade" name="cidade" type="text" required>

          <label for="estado">Estado</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
          </select>
        </fieldset>

        <button type="submit" class="btn primary">Enviar cadastro</button>
      </form>
    </section>
  `; }

  return { home, projetos, cadastro };
})();
