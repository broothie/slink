# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          default(1), not null
#  private    :boolean          default(FALSE)
#

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
