class Api::SubscriptionsController < ApplicationController
  def index
    @channels = current_user.channels
    render :index
  end
end
