class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_on?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_on?
    !current_user.nil?
  end

  def sign_on!(user)
    session[:session_token] = user.reset_session_token!
    cookies.signed[:user_id] = user.id
  end

  def sign_off!
    current_user.reset_session_token!
    session[:session_token] = nil
    cookies.delete :user_id
  end

  def require_signed_on!
    render json: ['Nobody signed in'], status: 404 unless signed_on?
  end
end
