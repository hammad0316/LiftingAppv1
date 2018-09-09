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
            @user = @userLifts.map do |user|
                    name = Lift.find(user.lift).name
                    lift = { "id":user.id, "lift": name, "weight": user.weight, "reps": user.reps, "workoutid": user.workoutid }
                    lift
            end

            # @lifts = Lift.where(:id => UserLift.where( :user => params[:id]))
            @lifts = Lift.where(:id => UserLift.select("lift").where(:user => params[:id]))
            @lifts.map do |lift|
                lift.muscle_groups.map! do |muscleGroup|
                    MuscleGroup.find(muscleGroup).name
                end
            end


            # @lifts = Lift.where(:lift => UserLift.where(:user => params[:id]))

            # im trying to return all the lifts and their name as a @lifts variable,
            # and same with muscle groups and users over all

            render :json => {:lifts => @lifts,
                             :users => @user,
                             :muscle_groups => MuscleGroup.all
                            }
        end
    end
end
