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
            @userLifts = UserLift.where( :user => params[:id])

            # @lifts = Lift.where(:id => UserLift.where( :user => params[:id]))
            @lifts = Lift.where(:id => UserLift.select("lift").where(:user => params[:id]))
            @muscle_groups = MuscleGroup.all

            # @lifts = Lift.where(:lift => UserLift.where(:user => params[:id]))

            # im trying to return all the lifts and their name as a @lifts variable,
            # and same with muscle groups and users over all

            render :json => {:lifts => @lifts.all,
                             :users => @userLifts.all,
                             :muscle_groups => MuscleGroup.all}
        end
    end
end
