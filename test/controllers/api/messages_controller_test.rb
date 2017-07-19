require 'test_helper'

class Api::MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_messages_create_url
    assert_response :success
  end

end
