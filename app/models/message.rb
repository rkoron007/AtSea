class Message < ApplicationRecord
    belongs_to :chat
    belongs_to :sender, foreign_key: 'sender_id', class_name: :User

    validates_presence_of :body

    after_create_commit do
    ActionCable.server.broadcast "chats-#{chat_id}:messages",
      id: id,
      body: body,
      sender_id: sender_id
    end
end
