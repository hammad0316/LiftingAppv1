class Api::V1::WorkoutsController < ApplicationController
    def index
        @workOuts = Workout.all
        render :json => {:workOuts => @workOuts.all}
    end
end
