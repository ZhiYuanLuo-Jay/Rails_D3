# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#  Star Revenue data
data =[
	{
		"month": "January",
		"revenue": "13432",
		"profit": "8342"
	},
	{
		"month": "February",
		"revenue": "19342",
		"profit": "10342"
	},
	{
		"month": "March",
		"revenue": "17443",
		"profit": "15423"
	},
	{
		"month": "April",
		"revenue": "26342",
		"profit": "18432"
	},
	{
		"month": "May",
		"revenue": "34213",
		"profit": "29434"
	},
	{
		"month": "June",
		"revenue": "50321",
		"profit": "45343"
	},
	{
		"month": "July",
		"revenue": "54273",
		"profit": "47452"
	}
]


# data.each do |dict|
#     p dict[:month]
#     p dict[:revenue]
#     p dict[:profit]
# end 
# Student.create(first_name:"Yuan", last_name:"Luo", email:"zyl@gmail.com", dojo:Dojo.find(3))

data.each do |dict|
    # Revenue.create(month:dict[:month], revenue:dict[:revenue], profit:dict[:profit])
end


# Highest building data

buildings = [{
	"name": "Burj Khalifa",
	"height": "828"
},
{
	"name": "Shanghai Tower",
	"height": "623"
},
{
	"name": "Abraj Al-Bait Clock Tower",
	"height": "601"
},
{
	"name": "Ping An Finance Centre",
	"height": "599"
},
{
	"name": "Lotte World Tower",
	"height": "544.5"
},
{
	"name": "One World Trade Center",
	"height": "541.3"
},
{
	"name": "Guangzhou CTF Finance Center",
	"height": "530"
}
]

buildings.each do |dict|
    Building.create(name:dict[:name], height:dict[:height])
end