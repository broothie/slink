class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:screenname],
      user_params[:password]
    )

    if @user
      sign_on!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid screenname/password combination'], status: 401
    end
  end

  def destroy
    if signed_in?
      sign_off!
      render json: nil
    else
      render json: ['Nobody signed in'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:screenname, :password)
  end
end
