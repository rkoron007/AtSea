class Chat < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :senders, through: :messages, source: :sender
end
