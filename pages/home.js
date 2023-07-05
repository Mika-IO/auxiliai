const Home = (props) => {
  return (
    <section class="hero  fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="subtitle">Seu assistente administrativo virtual</h2>
          <a
            href="#/chat"
            class="button is-primary is-rounded mt-4 mb-6"
            type="submit"
          >
            Iniciar conversa
          </a>
          <div>
            <iframe
              allow="autoplay; encrypted-media"
              allowfullscreen
              src="https://www.youtube.com/embed/fJ9rUzIMcZQ?controls=0"
            ></iframe>
          </div>

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
