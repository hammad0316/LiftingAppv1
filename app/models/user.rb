class User < ApplicationRecord
    has_many :UserLift
    has_many :Workout
end
