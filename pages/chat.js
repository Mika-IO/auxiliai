const Chat = (props) => {
  const { useState } = React;
  const [message, setMessage] = useState("");
  const [conversations, setConversations] = useState({});
  const [currentConversationId, setCurrentConversationId] = useState(null);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        content: message,
      };

      let updatedConversation;

      if (conversations[currentConversationId]?.length === 0) {
        // Primeira mensagem da conversa é um PDF enviado pelo usuário
        updatedConversation = [newMessage];
      } else {
        updatedConversation = [
          ...conversations[currentConversationId],
          newMessage,
        ];
      }

      const updatedConversations = {
        ...conversations,
        [currentConversationId]: updatedConversation,
      };

      setConversations(updatedConversations);
      setMessage("");
    }
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleConversationSelection = (conversationId) => {
    setCurrentConversationId(conversationId);
  };

  const handleNewConversation = () => {
    const conversationId = Date.now().toString();
    setCurrentConversationId(conversationId);
    setConversations({
      ...conversations,
      [conversationId]: [],
    });
  };

  const currentConversation = conversations[currentConversationId] || [];

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="box">
              <div className="content" id="chat-content">
                {currentConversation.length === 0 ? (
                  <div>Selecione uma conversa ou inicie uma nova.</div>
                ) : (
                  currentConversation.map((message, index) => (
                    <div key={message.id}>
                      {index === 0 ? (
                        <strong>{message.content}</strong>
                      ) : (
                        message.content
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Digite sua mensagem"
                  id="message-input"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  className="button is-primary"
                  id="send-button"
                  onClick={handleSendMessage}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <aside className="menu">
              <p className="menu-label">Conversas</p>
              <ul className="menu-list">
                {Object.keys(conversations).map((conversationId) => {
                  const conversation = conversations[conversationId];
                  const firstMessage =
                    conversation.length > 0
                      ? conversation[0].content
                      : "Nova Conversa";
                  const createdAt = new Date(
                    parseInt(conversationId)
                  ).toLocaleDateString();

                  return (
                    <li
                      key={conversationId}
                      onClick={() =>
                        handleConversationSelection(conversationId)
                      }
                    >
                      <a>
                        {firstMessage} ({createdAt})
                      </a>
                    </li>
                  );
                })}
              </ul>
              <button
                className="button is-primary"
                id="new-conversation-button"
                onClick={handleNewConversation}
              >
                Nova Conversa
              </button>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
