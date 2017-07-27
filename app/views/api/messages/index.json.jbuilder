json.array! @messages.order(timestamp: :asc) do |message|
  json.partial! 'api/messages/message', message: message
end
