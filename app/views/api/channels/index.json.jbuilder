@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name
    json.ownerScreenname channel.owner.screenname
  end
end
