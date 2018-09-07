class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :userid
      t.timestamp :start
      t.timestamp :end

      t.timestamps
    end
  end
end
