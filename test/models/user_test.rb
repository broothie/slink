# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  screenname      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  icon_url        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  online          :boolean          default(FALSE)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
