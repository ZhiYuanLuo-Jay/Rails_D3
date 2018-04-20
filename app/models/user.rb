class User < ActiveRecord::Base
  has_secure_password
  has_many :schedules, dependent: :destroy #
  has_many :comments, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :have_events, through: :schedules, source: :event
  

  validates :state, length: { is: 2}
  validates :first_name, :last_name, :state, :location,  presence: true
  validates :email,  :presence => true, uniqueness: { case_sensitive: false }, length: { in: 5..100 }

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  # validates :branch, :street, :city,  :state, presence: true
  # validates :age, presence: true, numericality: true
  # validates_numericality_of :age, greater_than: 10, less_than:150
end
