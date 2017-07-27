json.extract! channel, :id, :name, :private
json.ownerScreenname channel.owner.screenname
json.messages []
json.users do
  json.array! channel.users do |user|
    json.partial! 'api/users/user', user: user
  end
end
