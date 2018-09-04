class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.integer :lifts, array:true, default:[]
      t.string :email

      t.timestamps
    end
  end
end
