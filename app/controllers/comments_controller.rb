class CommentsController < ApplicationController
  def create
    # fail
    @comment = Comment.new(cmt_params)
    @comment.user_id = current_user.id
    @comment.event_id = params[:id]
    @comment.save
    redirect_to "/events"
  end


  def cmt_params
    params.require(:cmt).permit(:comment)
  end

end
