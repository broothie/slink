class Api::UsersController < ApplicationController
  def index
    @users = User.where(
      'lower(screenname) LIKE ?',
      "%#{user_query_params[:name_query].downcase.chars.join('%')}%"
    )

    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.channels << Channel.find_by(name: 'World Chat')
      sign_on!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:screenname, :password)
  end

  def user_query_params
    params.require(:user).permit(:name_query)
  end
end
