class Event < ActiveRecord::Base
  belongs_to :user

  has_many :comments, dependent: :destroy
  has_many :schedules
  has_many :users, through: :schedules, source: :user

  validates :name,  :presence => true
end
