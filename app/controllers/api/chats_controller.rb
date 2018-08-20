class Api::ChatsController < ApplicationController

    def show
        @chat = Chat.find(params[:id])
        render "api/chats/show"
    end

    def create
        @chat = Chat.new
        if @chat.save
            render "api/chats/show"
        else
            render json: ["nahhhhhh"], status: 404
        end
    end
end
