json.extract! channel, :id, :private
json.ownerScreenname channel.owner.screenname
json.messages []
json.users do
  json.array! channel.users do |user|
    json.partial! 'api/users/user', user: user
  end
end

if channel.private
  name = channel.users.reject do |user|
    user.id == current_user.id
  end.map(&:screenname).join(', ')
  json.name name
else
  json.name channel.name
end
