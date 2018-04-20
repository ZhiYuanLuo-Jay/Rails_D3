class SchedulesController < ApplicationController
  def index
  end

  def create
    p params[:id]
    Schedule.create(user_id: current_user.id, event_id: params[:id])
    redirect_to "/events"
  end

  def show
  end

  def delete
    # like = Like.find_by(secret: Secret.find(params[:id]), user: current_user )
    schedule = Schedule.find_by(event_id: params[:id].to_i, user_id: current_user.id)
    schedule.destroy
    redirect_to "/events"
  end 

end
