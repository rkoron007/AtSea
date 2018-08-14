class Api::ChatsController < ApplicationController

    def show
        @chat = Chat.find(params[:id])
        render "api/chats/show"
    end

    def create
        @chat = Chat.new
        render "api/chats/show"
    end
end
