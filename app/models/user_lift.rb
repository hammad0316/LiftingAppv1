class UserLift < ApplicationRecord
    has_one :Lift
    has_one :User
    has_one :Workout
end
