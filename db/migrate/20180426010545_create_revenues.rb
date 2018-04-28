class CreateRevenues < ActiveRecord::Migration
  def change
    create_table :revenues do |t|
      t.string :month
      t.string :revenue
      t.string :profit

      t.timestamps null: false
    end
  end
end
