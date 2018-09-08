module Api::V1
    class UserLiftsController < ApplicationController
        def index
            # @userLifts = UserLift.all
            render :json => {:userLifts => UserLift.all}
        end

        def destroy
            UserLift.destroy(params[:id])
        end

        def show 
            @userLifts = UserLift.where( :workoutid => params[:id])
            render :json => {:userLifts => @userLifts.all}
        end
    end
end
