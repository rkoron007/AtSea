
json.set! @message.id do 
    json.extract! @message, :body, :id
end