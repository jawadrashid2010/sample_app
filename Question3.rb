person1 = { :first => "Javed", :last => "Rashid" }
person2 = { :first => "Birjees", :last => "Rashid" }
person3 = { :first => "Jawad", :last => "Rashid" }

params = {}
params[:father] = person1
params[:mother] = person2
params[:child] = person3

params[:father][:first]
