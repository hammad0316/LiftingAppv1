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
MuscleGroup.create name: 'Quadriceps', area: 'lower'

Lift.destroy_all

Lift.create name: 'Bench Press', muscle_groups: [chest.id, triceps.id]
Lift.create name: 'Hammer Curl', muscle_groups: [biceps.id]