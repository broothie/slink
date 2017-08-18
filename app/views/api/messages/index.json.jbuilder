json.array! @messages.order(timestamp: :desc).limit(25).reverse do |message|
  json.partial! 'api/messages/message', message: message
end
