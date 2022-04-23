FactoryBot.define do
  factory :user do
    screenname { Faker::Internet.username(specifier: 6, separators: []) }
    password { Faker::Internet.password(min_length: 6) }
  end
end
