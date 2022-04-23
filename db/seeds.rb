[Channel, Message, Subscription, User].each(&:destroy_all)

# smarter_child = User.create(screenname: 'SmarterChild', password: 'drowssap')
demo_user = User.create(screenname: 'demoUser', password: '123456')

# Create world chat
world_chat = Channel.create(name: 'World Chat', owner_id: demo_user.id)
world_chat.users << demo_user
world_chat.users << smarter_child

# Create some users
20.times do
  u = User.create(
    screenname: Faker::Pokemon.unique.name,
    password: Faker::Cat.unique.breed
  )
  u.channels << world_chat
end

# Create messages for World Chat
50.times do
  Message.create(
    body: Faker::Hipster.sentence,
    author_id: world_chat.users.sample.id,
    channel_id: world_chat.id,
    timestamp: DateTime.now
  )
end

# Define channel builder
def build_channel(channel_name, user)
  channel = Channel.create(name: channel_name, owner_id: user.id)

  5.times do
    new_user = User.all.sample
    channel.users << new_user unless channel.users.include?(new_user)
  end

  50.times do
    Message.create(
      body: yield,
      author_id: channel.users.sample.id,
      channel_id: channel.id,
      timestamp: DateTime.now
    )
  end
end

# Build a bunch of channels
build_channel('#ChuckNorris', demo_user) { Faker::ChuckNorris.fact }
build_channel('Beer', demo_user) { Faker::Beer.style }
build_channel('HPFans', demo_user) { Faker::HarryPotter.quote }
build_channel('STAR WARS', demo_user) { Faker::StarWars.quote }
build_channel('AA 2017-05-29-sf', demo_user) { Faker::Company.bs }
