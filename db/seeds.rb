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
squats = Lift.create name: 'Squats', muscle_groups: [quads.id, hamstrings.id, glutes.id]
liftsArr = [benchpress, hammercurl, squats]

names = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth", "George", "Joshua", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Stephen", "Jonathan", "Larry", "Justin", "Scott", "Brandon", "Frank", "Benjamin", "Gregory", "Raymond", "Samuel", "Patrick", "Alexander", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Henry", "Jose", "Douglas", "Peter", "Adam", "Nathan", "Zachary", "Walter", "Kyle", "Harold", "Carl", "Jeremy", "Gerald", "Keith", "Roger", "Arthur", "Terry", "Lawrence", "Sean", "Christian", "Ethan", "Austin", "Joe", "Albert", "Jesse", "Willie", "Billy", "Bryan", "Bruce", "Noah", "Jordan", "Dylan", "Ralph", "Roy", "Alan", "Wayne", "Eugene", "Juan", "Gabriel", "Louis", "Russell", "Randy", "Vincent", "Philip", "Logan", "Bobby", "Harry", "Johnny", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret", "Karen", "Nancy", "Lisa", "Betty", "Dorothy", "Sandra", "Ashley", "Kimberly", "Donna", "Emily", "Carol", "Michelle", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Helen", "Sharon", "Cynthia", "Kathleen", "Amy", "Shirley", "Angela", "Anna", "Ruth", "Brenda", "Pamela", "Nicole", "Katherine", "Samantha", "Christine", "Catherine", "Virginia", "Debra", "Rachel", "Janet", "Emma", "Carolyn", "Maria", "Heather", "Diane", "Julie", "Joyce", "Evelyn", "Joan", "Victoria", "Kelly", "Christina", "Lauren", "Frances", "Martha", "Judith", "Cheryl", "Megan", "Andrea", "Olivia", "Ann", "Jean", "Alice", "Jacqueline", "Hannah", "Doris", "Kathryn", "Gloria", "Teresa", "Sara", "Janice", "Marie", "Julia", "Grace", "Judy", "Theresa", "Madison", "Beverly", "Denise", "Marilyn", "Amber", "Danielle", "Rose", "Brittany", "Diana", "Abigail", "Natalie", "Jane", "Lori", "Alexis", "Tiffany", "Kayla"]
counter = 1;

User.destroy_all
UserLift.destroy_all
Workout.destroy_all

while counter <= 20 do
  username = names.sample + counter.to_s
  benchMax = (Random.rand(3) + 7) * 25
  hammercurlMax = (Random.rand(3) + 7) * 25
  newUser = User.create username: username, password_digest: 'password', email: username + '@email.com',
    onerepmax: [{"lift": benchpress.id, "max": benchMax}, {"lift": hammercurl.id, "max": hammercurlMax}]
    newCounter = 0
    workOutCounter = 0
      while workOutCounter <= 10 do 
        workOut = Workout.create userid: newUser.id
            liftsArr.each do |lift|
              weightLifted = Random.rand(8) * 25
              repsDone = Random.rand(9) + 3
              UserLift.create lift: lift.id, weight: weightLifted, reps: repsDone, user: newUser.id, workoutid: workOut.id
            end
        workOutCounter = workOutCounter + 1
      end
  newCounter = newCounter + 1
  counter = counter + 1
end

# user1 = User.create username: 'johnjacob', password: 'password', email: 'johnjacob@email.com',
# onerepmax: [{"lift": benchpress.id, "max": "1000"}, {"lift": hammercurl.id, "max": "300"}]
# user2 = User.create username: 'benfranklin', password: 'password', email: 'benfranklin@email.com',
# onerepmax: [{"lift": benchpress.id, "max": "100"}, {"lift": hammercurl.id, "max": "60"}]


# lift1 = UserLift.create lift: benchpress.id, weight: 225, reps: 5
# lift2 = UserLift.create lift: hammercurl.id, weight: 40, reps: 5
# lift3 = UserLift.create lift: squat.id, weight: 225, reps: 5