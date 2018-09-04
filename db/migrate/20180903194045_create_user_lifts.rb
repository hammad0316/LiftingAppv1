class CreateUserLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_lifts do |t|
      t.integer :lift
      t.integer :weight
      t.integer :reps

      t.timestamps
    end
  end
end
