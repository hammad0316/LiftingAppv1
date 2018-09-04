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

          logger.debug @lifts

          render :json => {:lifts => @lifts,
                           :muscle_groups => @muscleGroups}

      end
  end
end
