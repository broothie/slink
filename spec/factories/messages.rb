FactoryBot.define do
  factory :message do
    body { Faker::TvShows::BojackHorseman.quote }
    author factory: :user
    channel
  end
end
