class Message < ApplicationRecord
    belongs_to :chat
    belongs_to :sender, class_name: :User, foreign_key: 'sender_id'

    validates_presence_of :body

    # after_create_commit { MessageBroadcastJob.perform_later(self) }
end
