class Api::MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        @message.sender_id = current_user.id
        if @message.save
            # chat = params[:message][:chat_id]
            # ActionCable.server.broadcast "chats-#{chat}",
            # message: @message.body,
            # user: current_user.username
            # head :ok
            render :show
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :chat_id)
    end
end
