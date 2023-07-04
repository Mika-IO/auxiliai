const { useState } = React;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const messageInput = event.target.elements["message-input"];
    const pdfInput = event.target.elements["pdf-input"];

    const message = messageInput.value;

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
    }

    const messageElement = <p key={messages.length}>{message}</p>;
    setMessages((prevMessages) => [...prevMessages, messageElement]);

    messageInput.value = "";

    if (isFirstMessage) {
      setIsFirstMessage(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <aside className="menu">
              <p className="menu-label">Conversas</p>
              <ul className="menu-list">
                <li>
                  <a>Arquivo PDF: Porto Seguros - Vida.pdf</a>
                </li>
              </ul>
              <button
                className="button is-primary"
                id="new-conversation-button"
              >
                Nova Conversa
              </button>
            </aside>
          </div>
          <div className="column is-three-quarters">
            <div className="content">
              <div id="message-container">{messages}</div>
            </div>
            <form id="chat-form" onSubmit={handleFormSubmit}>
              <div className="field">
                <div className="control">
                  <input
                    id="message-input"
                    className="input"
                    type="text"
                    style={{ display: isFirstMessage ? "none" : "block" }}
                    placeholder="Digite sua mensagem"
                  />
                </div>
              </div>
              <div id="pdf-field" className="field">
                <div className="control">
                  <input
                    id="pdf-input"
                    className="input"
                    type="file"
                    accept=".pdf"
                    style={{ display: isFirstMessage ? "block" : "none" }}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
