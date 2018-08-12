class MessageBroadcastJob < ApplicationJob
#   queue_as :default

#   def perform(message)
#     payload = {
#       room_id: message.chat.id,
#       body: message.body,
#       sender: message.sender,
#       participants: message.chat.users.collect(&:id)
#     }
#     ActionCable.server.broadcast(build_room_id(message.chat.id), payload)
#   end
  
#   def build_room_id(id)
#     "ChatRoom-#{id}"
#   end
end
