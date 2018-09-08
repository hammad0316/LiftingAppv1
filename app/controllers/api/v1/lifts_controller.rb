module Api::V1
  class LiftsController < ApplicationController
      def index
          @lifts = Lift.all

          @lifts.map do |lift|
              lift.muscle_groups.map! do |muscleGroup|
                  MuscleGroup.find(muscleGroup).name
              end
          end

          render :json => {:lifts => @lifts}

          # @muscleGroups = MuscleGroup.all

          # @users = User.all

          # @users.map do |user|
          #     user.onerepmax.map! do |max|
          #       max["lift"] = Lift.find(max["lift"]).name
          #       max
          #     end
          #     user.lifts.map! do |userLift|
          #       userLift = UserLift.find(userLift)
          #       name = Lift.find(userLift.lift).name
          #       lift = { "id": userLift.id, "name": name, "weight": userLift.weight, "reps": userLift.reps }
          #       lift
          #     end
          # end


          # render :json => {:lifts => @lifts,
          #                  :muscle_groups => @muscleGroups,
          #                  :users => @users}

      end

      def create
        userId = request.raw_post["userId"]
        liftData = request.raw_post["liftData"]
        logger.debug userId
        logger.debug liftData

        # @lift = UserLift.create(lift_params)
        # render json: lift
      end

      def destroy
        UserLift.destroy(params[:id])
      end

      def update
        @lift = Lift.find(params[:id])
        lift.update_attributes(fruit_params)
        render json: lift
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
