
json.chats do 
    @chats.each do |chat|
        json.set! chat.id do 
            json.extract! chat, :id, :title
        end
    end
end

