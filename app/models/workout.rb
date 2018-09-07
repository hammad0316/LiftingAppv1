class Workout < ApplicationRecord
    has_one :User
    has_many :UserLifts
end
