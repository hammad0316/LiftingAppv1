class CreateUserLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_lifts do |t|
      t.integer :lifts
      t.integer :weight
      t.integer :reps
      t.integer :userid
      t.integer :workoutid

      t.timestamps
    end
  end
end
