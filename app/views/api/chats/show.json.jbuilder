json.messages({})
json.messages do
    @chat.messages.each do |message|
        json.set! message.id do 
            json.partial! 'api/messages/message', message: message 
        end
    end
end 


json.chat do
    json.extract! @chat, :id, :title
end 
