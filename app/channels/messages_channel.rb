class MessagesChannel < ApplicationCable::Channel  
  def subscribed
    # @chat = Chat.find(params[:chat_id])  
    stream_from "chats-#{params[:chat_id]}:messages"
  end
end  
