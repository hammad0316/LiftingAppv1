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

          render :json => {:lifts => @lifts,
                           :muscle_groups => @muscleGroups}

      end

      def create
        @lift = Lift.create(lift_params)
        render json: lift
      end

      def destroy
        Lift.destroy(params[:id])
      end

      def update
        @lift = Lift.find(params[:id])
        lift.update_attributes(fruit_params)
        render json: fruit
      end

      def show
        @lift = Lift.find(params[:id])
      end
      
  end

  private
  def lift_params
    params.require(:lift).permit(:name)
  end

end
