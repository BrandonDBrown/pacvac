require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get auth" do
    get sessions_auth_url
    assert_response :success
  end

end
