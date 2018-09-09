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
                    muscleGroups = Lift.find(user.lift).muscle_groups
                    names = muscleGroups.map do |mg|
                        MuscleGroup.find(mg).name
                    end
                    lift = { "id":user.id, "lift": name, "weight": user.weight, "reps": user.reps, "workoutid": user.workoutid, "muscle_groups": names }
                    lift
            end

            # @lifts = Lift.where(:id => UserLift.where( :user => params[:id]))


            # @lifts = Lift.where(:lift => UserLift.where(:user => params[:id]))

            # im trying to return all the lifts and their name as a @lifts variable,
            # and same with muscle groups and users over all

            render :json => {#:lifts => @lifts,
                             :userLifts => @user,
                             #:muscle_groups => MuscleGroup.all
                            }
        end
    end
end
