# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Lift.create date: Date.today, liftname: 'Bench Press', ismetric: false, weightlifted: '220', repsperformed: '1', onerm: '1'

MuscleGroup.destroy_all

biceps = MuscleGroup.create name: 'Biceps', area: 'upper'
triceps = MuscleGroup.create name: 'Triceps', area: 'upper'
chest = MuscleGroup.create name: 'Chest', area: 'upper'
quads = MuscleGroup.create name: 'Quadriceps', area: 'lower'
hamstrings = MuscleGroup.create name: 'Hamstrings', area: 'lower'
glutes = MuscleGroup.create name: 'Glutes', area: 'lower'


Lift.destroy_all

benchpress = Lift.create name: 'Bench Press', muscle_groups: [chest.id, triceps.id]
hammercurl = Lift.create name: 'Hammer Curl', muscle_groups: [biceps.id]
squats = Lift.create name: 'Squats', muscle_groups: [quads.id, hamstring.id, glutes.id]

UserLift.destroy_all

lift1 = UserLift.create lift: benchpress.id, weight: 225, reps: 5
lift2 = UserLift.create lift: hammercurl.id, weight: 40, reps: 5
lift3 = UserLift.create lift: squat.id, weight: 225, reps: 5

User.destroy_all

User.create username: 'johnjacob', password: 'password', email: 'johnjacob@email.com', lifts: [lift1.id],
  onerepmax: [{"lift": benchpress.id, "max": "1000"}, {"lift": hammercurl.id, "max": "300"}]
User.create username: 'benfranklin', password: 'password', email: 'benfranklin@email.com', lifts: [],
  onerepmax: [{"lift": benchpress.id, "max": "100"}, {"lift": hammercurl.id, "max": "60"}]