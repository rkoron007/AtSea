namespace :test do
  desc "My first rake task!"
  task :say_hello => :environment do
    puts "Hello World"
  end

end