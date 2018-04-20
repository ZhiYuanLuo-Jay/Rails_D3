class UsersController < ApplicationController
  def index
  end

  def edit

  end

  def new
  end

  def update
    # usr = User.find(params[:id])
    current_user.update(user_edit_params)
    redirect_to "/events"
  end 

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to "/events"
    else
      flash[:errors] = @user.errors.full_messages 
      redirect_to "/"
    end
  end 

  def logout
    # Log User out
    session[:user_id] = nil
    redirect_to "/"
  end


private
def user_params
  params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :location, :state)
end

def user_edit_params
  params.require(:user).permit(:first_name, :last_name, :email, :location, :state)
end



end