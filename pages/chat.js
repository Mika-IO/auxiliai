const { useState } = React;

const Message = ({ content, user }) => {
  return (
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
};

const Chat = ({ file, date, content }) => {
  return (
    <article className="menu">
      <div className="level mb-6 menu-label">
        <ul>
          <a href="#">
            <li className="box mb-1 full-width has-background-white">
              <div className="content">
                <h4 className="has-text-dark">{file}</h4>
                <small className="has-text-grey-dark"> {date} </small>

                <br />
                <p className="has-text-grey-dark">{content}</p>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </article>
  );
};

const BaseLayout = ({ children }) => {
  return (
    <main className="container is-fluid my-4">
      <div className="columns">{children}</div>
    </main>
  );
};

const Chats = () => {
  return (
    <section className="column is-3-desktop is-12-mobile is-12-tablet">
      <div className="box has-background-light">
        <article className="panel has-background-white">
          <div className="panel-block">
            <p className="control has-icons-left">
              <input
                className="input is-primary"
                type="text"
                placeholder="Pesquisar"
              />
              <span className="icon is-left">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </article>

        <section className="chats box">
          <Chat
            file="Porto Seguros - Vida.pdf"
            date="07-08-2023"
            content=" Qual o limite de idade para o seg..."
          />
        </section>
        <button className="button mt-4 mr-2">Nova Conversa</button>
        <button className="button mt-4">Limpar Conversa</button>
      </div>
    </section>
  );
};

const NavBar = () => {
  return (
    <article className="level">
      <div className="level-left">
        <div className="level-item">
          <div>
            <div className="navbar-brand">
              <a className="navbar-item ml-6" href="/">
                <div>
                  <svg
                    width="160"
                    height="50"
                    viewBox="0 0 350 113.45406608062449"
                    className="css-1j8o68f"
                  >
                    <defs id="SvgjsDefs1416"></defs>
                    <g
                      id="SvgjsG1417"
                      featurekey="nameFeature-0"
                      transform="matrix(2.7450763567708876,0,0,2.7450763567708876,-2.3058619406441383,-30.744857290160994)"
                      fill="#111111"
                    >
                      <path d="M16.04 30 c-0.16 -2.92 -1.48 -4.64 -4.52 -4.64 c-0.84 0 -1.56 0.12 -2.16 0.36 c-1.84 0.84 -2.52 2.4 -2.52 4.32 c0 0.64 0.08 1.24 0.28 1.76 c0.6 2.08 2.4 2.84 4.4 2.84 c3.04 0 4.52 -1.64 4.52 -4.64 z M23.64 40 l-6 0 c-0.4 -1 -0.76 -2 -1 -3.04 c-1.36 2.24 -3.44 3.24 -6 3.24 c-5.72 0 -9.8 -4.8 -9.8 -10.28 c0 -6.32 4.72 -10.12 10.68 -10.12 c6.36 0 10.36 4.08 10.52 10.2 c0.04 0.52 0.04 1.12 0.04 1.84 c0 2.8 0.44 5.6 1.56 8.16 z M39.32299999999999 20 l6 0 l0 10 c0 6.12 -4.24 10.2 -10.2 10.2 c-6.12 0 -10.2 -4.28 -10.2 -10.2 l0 -10 l6 0 l0 10 c0 2.68 1.36 4.64 4.2 4.64 c2.92 0 4.2 -1.92 4.2 -4.64 l0 -10 z M57.205999999999996 34.24 l-4.2 5.76 l-6.6 0 l7.52 -10.28 l-7.12 -9.72 l6.6 0 l3.8 5.2 l3.8 -5.2 l6.6 0 l-7.08 9.72 l7.48 10.28 l-6.6 0 z M69.289 20 l6 0 l0 20 l-6 0 l0 -20 z M72.289 18.12 c-2.04 0 -3.48 -1.44 -3.48 -3.48 c0 -2.08 1.44 -3.44 3.48 -3.44 c2.08 0 3.44 1.36 3.44 3.44 c0 2.12 -1.32 3.48 -3.44 3.48 z M78.372 12 l6 0 l0 28 l-6 0 l0 -28 z M87.575 20 l6 0 l0 20 l-6 0 l0 -20 z M90.575 18.12 c-2.04 0 -3.48 -1.44 -3.48 -3.48 c0 -2.08 1.44 -3.44 3.48 -3.44 c2.08 0 3.44 1.36 3.44 3.44 c0 2.12 -1.32 3.48 -3.44 3.48 z M112.418 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M105.37800000000001 29.48 l5.08 0 l-2.52 -7.12 z M122.34100000000001 15.52 l6 0 l0 24.48 l-6 0 l0 -24.48 z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [isPdfSelected, setIsPdfSelected] = useState(false); // Estado para verificar se um PDF foi selecionado

  const addMessage = (message) => {
    if (message.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const messageInput = event.target.elements["message-input"];
    const pdfInput = event.target.elements["pdf-input"];

    // nao enviar mensagens vazias
    const message = messageInput.value;

    if (isFirstMessage && pdfInput.files.length === 0) {
      return; // Retorna sem fazer nada se nenhum arquivo PDF estiver selecionado
    }

    if (isFirstMessage && pdfInput.files.length > 0) {
      const pdfFile = pdfInput.files[0];

      const fileElement = (
        <p key={messages.length}>Arquivo PDF: {pdfFile.name}</p>
      );
      setMessages((prevMessages) => [...prevMessages, fileElement]);

      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const blob = new Blob([arrayBuffer], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);

        const pdfPreview = (
          <embed
            key={messages.length + 1}
            src={blobUrl}
            width="100%"
            height="500px"
          />
        );
        setMessages((prevMessages) => [...prevMessages, pdfPreview]);
      };
      reader.readAsArrayBuffer(pdfFile);

      setIsPdfSelected(true); // Define o estado para true quando um PDF é selecionado
    }
    if (message) {
      const messageElement = <div key={messages.length}>{message}</div>;
      setMessages((prevMessages) => [...prevMessages, messageElement]);
    }

    messageInput.value = "";

    if (isFirstMessage) {
      setIsFirstMessage(false);
    }
  };

  const handlePdfInputChange = (event) => {
    const pdfInput = event.target;
    setIsPdfSelected(pdfInput.files.length > 0);
  };

  return (
    <section className="column">
      <div className="box has-background-light">
        <NavBar />
        <article className="box chats">
          {messages.map((message, index) => (
            <Message user="@usuário" content={message} />
          ))}
        </article>
        <article className="level">
          <form
            className="chat-input-box"
            id="chat-form"
            onSubmit={handleFormSubmit}
          >
            <div
              className="control has-icons-left mb-4"
              style={{ display: isFirstMessage ? "none" : "" }}
            >
              <input
                id="message-input"
                class="input is-info is-centered"
                type="text"
                placeholder="Pergunte algo..."
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </div>
            <div
              className="field file control has-icons-left"
              style={{ display: isFirstMessage ? "block" : "none" }}
            >
              <input
                id="pdf-input"
                className="input is-primary "
                type="file"
                accept=".pdf"
                name="Selecione um PDF..."
                onChange={handlePdfInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-file-pdf"></i>
              </span>
            </div>

            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  className="button"
                  disabled={!isPdfSelected}
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

const AuxiliAI = () => {
  return (
    <BaseLayout>
      <Chats />
      <Messages />
    </BaseLayout>
  );
};
