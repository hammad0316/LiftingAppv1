module Api::V1
    class UsersController < ApplicationController
        def index
            @user = User.all
            render :json => {:user => @user.all}
        end
        def create 
            @user = User.create(email: params[:data][:user][:email], username: params[:data][:user][:username], password: params[:data][:user][:password])
            render :create
         end

    private
    def fruit_params
        params.require(:email).permit(:username, :password)
    end
end
end
