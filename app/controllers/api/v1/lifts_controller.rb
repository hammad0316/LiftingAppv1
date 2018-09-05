module Api::V1
  class LiftsController < ApplicationController
      def index
          @lifts = Lift.all

          @lifts.map do |lift|
              lift.muscle_groups.map! do |muscleGroup|
                  MuscleGroup.find(muscleGroup).name
              end
          end

          @muscleGroups = MuscleGroup.all

          @users = User.all

          @users.map do |user|
              user.onerepmax.map! do |max|
                max["lift"] = Lift.find(max["lift"]).name
                max
              end
              user.lifts.map! do |userLift|
                userLift = UserLift.find(userLift)
                name = Lift.find(userLift.lift).name
                lift = { "lift": name, "weight": userLift.weight, "reps": userLift.reps }
                lift
              end
          end


          render :json => {:lifts => @lifts,
                           :muscle_groups => @muscleGroups,
                           :users => @users}

      end
  end
end
