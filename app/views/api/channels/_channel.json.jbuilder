json.extract! channel, :id, :private
json.ownerScreenname channel.owner.screenname
json.messages []

if channel.private?
  name = channel.users.reject do |user|
    user.id == current_user.id
  end.map(&:screenname).join(', ')
  json.name name
else
  json.name channel.name
end
