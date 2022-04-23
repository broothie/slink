FactoryBot.define do
  factory :channel do
    name { Faker::Movie.title }
    owner factory: :user
  end
end
