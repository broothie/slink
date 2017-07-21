@channels.each do |channel|
  json.set! channel.id do
    json.merge! channel.attributes
  end
end
