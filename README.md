# Auxiliai

A GPT tool to analize pdf documents

### TODO

- Scrollbar in messages div
- Add chat
- Navegate between chats
- API integration

### API TODO

#### Endpoits

- POST -> PDF file
- POST -> Chat
- POST -> Message

- GET -> Token
- GET -> Chats
- GET -> Messages

#### Models

MESSAGE

```json
{
  "id": "d2e3293c-2bfc-4fc7-bf12-49f07c877b22",
  "content": "Olá, como você está?",
  "timestamp": "2023-07-05T10:30:00Z",
  "sender": "John"
}
```

CHAT

```json
{
  "id": "76d2e3293c-2bfc-4fc7-bf12-49f07c877b997",
  "name": "Chat de Exemplo",
  "participants": ["Auxiliai", "John"],
  "messages": [
    {
      "id": "d2e3293c-2bfc-4fc7-bf12-49f07c877b44",
      "content": "Olá, como você está?",
      "timestamp": "2023-07-05T10:30:00Z",
      "sender": "Auxiliai"
    },
    {
      "id": "d2e3293c-2bfc-4fc7-bf12-49f07c877b33",
      "content": "Estou bem, obrigado!",
      "timestamp": "2023-07-05T10:32:00Z",
      "sender": "John"
    },
    {
      "id": "d2e3293c-2bfc-4fc7-bf12-49f07c877b89",
      "content": "E você?",
      "timestamp": "2023-07-05T10:34:00Z",
      "sender": "John"
    }
  ]
}
```

ACCOUNT

```json
{
  "id": "e6e3293c-2bfc-4fc7-bf12-49f07c877b33",
  "email": "admin@example.com",
  "password_hash": "hashed_password",
  "role": "admin",
  "clients": [
    {
      "id": "e6e3293c-2bfc-4fc7-bf12-49f07c877b22",
      "email": "client1@example.com",
      "password_hash": "hashed_password",
      "role": "client"
    },
    {
      "id": "e6e3293c-2bfc-4fc7-bf12-49f07c877b99",
      "email": "client2@example.com",
      "password_hash": "hashed_password",
      "role": "client"
    }
  ]
}
```
