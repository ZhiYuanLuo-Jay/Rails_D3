class EventsController < ApplicationController
  def index
    usrState = current_user.state
    @events_usr = Event.where(state: usrState)
    @events_oth = Event.where.not(state: usrState)
  end

  def login
    # p params[:user][:email] return "zhiyuan!@g.com"
    # p params[:email] return nil, params is a dictionary
    @usr = User.find_by_email(params[:user][:email]).try(:authenticate, params[:user][:password])
    if @usr 
      session[:user_id] = @usr.id
      redirect_to "/events"
    else
      flash[:errors] = ['Invalid Combination']
      redirect_to "/"
    end 
  end 

  def show
    @event = Event.find(params[:id])
    @people = @event.users
    @comments = Comment.where(event_id: params[:id])
  end 

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    unless @event.save
      flash[:errors] = @event.errors.full_messages 
    end 
    redirect_to "/events"
  end 

  def delete
    # fail
    @event = Event.find(params[:id])
    @event.destroy
    redirect_to "/events"
  end 


end

private
# def user_params
#   params.require(:user).permit(:email, :password)
# end

def event_params
  params.require(:event).permit(:name, :date, :location, :state)
end