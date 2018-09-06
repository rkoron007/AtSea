class Api::ChatsController < ApplicationController

    def show
        @chat = Chat.find(params[:id])
        render "api/chats/show"
    end

    def index
        @chats = Chat.all
        render "api/chats/index"
    end

    def create
        @chat = Chat.new(chat_params)
        
        if @chat.save
            render "api/chats/show"
        else
            render json: ["nahhhhhh"], status: 404
        end
    end


    def chat_params
        params.require(:chat).permit(:title)
    end
end
