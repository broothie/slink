class Api::SubscriptionsController < ApplicationController
  def index
    @channels = current_user.channels.includes(:messages)
    render :index
  end
end
