const Home = (props) => {
  return (
    <section class="hero is-primary fullheight">
      <div class="hero-body mt-6">
        <div class="container has-text-centered">
          <h2 class="subtitle">Seu assistente administrativo virtual</h2>
          <form action="/processar" method="POST" enctype="multipart/form-data">
            <div class="file has-name is-centered">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="pdfFile"
                  accept=".pdf"
                  required
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Escolher arquivo PDF</span>
                </span>
                <span class="file-name">Nenhum arquivo selecionado</span>
              </label>
            </div>
            <button class="button is-primary is-rounded mt-4" type="submit">
              Enviar PDF
            </button>
            <a
              href="#/chat"
              class="button is-primary is-rounded mt-4"
              type="submit"
            >
              Chat
            </a>
          </form>

          <div class="columns is-multiline is-centered mt-6">
            <div class="column is-one-third">
              <div class="card">
                <div class="card-content">
                  <h4 class="subtitle has-text-primary">Grátis</h4>
                  <ul>
                    <li>Upload de um PDF</li>
                    <li>Limite de 10 perguntas</li>
                    <del>
                      <li>Suporte técnico</li>
                    </del>
                    <del>
                      <li>Suporte prioritário</li>
                    </del>

                    <del>
                      <li>Gerenciamento de usuários</li>
                    </del>
                  </ul>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item button is-primary">
                    Testar
                  </a>
                </footer>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-content">
                  <h4 class="subtitle has-text-primary">Basic R$ 49/mês</h4>
                  <ul>
                    <li>Upload de X megabytes</li>
                    <li>Limite de X perguntas</li>
                    <li>Suporte técnico</li>
                    <del>
                      <li>Suporte prioritário</li>
                    </del>
                    <del>
                      <li>Gerenciamento de usuários</li>
                    </del>
                  </ul>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item button is-primary">
                    Assinar
                  </a>
                </footer>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="card">
                <div class="card-content">
                  <h4 class="subtitle has-text-primary">
                    Business - Entre em contato
                  </h4>
                  <ul>
                    <li>Upload de X megabytes</li>
                    <li>Limite personalizado perguntas</li>
                    <li>Suporte técnico</li>
                    <li>Suporte prioritário</li>
                    <li>Gerenciamento de usuários</li>
                  </ul>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item button is-primary">
                    Entre em contato
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
