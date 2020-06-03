class SessionsController < ApplicationController
    def new
        user = User.new
    end 

    def create
        user = User.find_by(email: params[:email])
        if user
           if user.authenticate(password: params[:password])
            session[:user_id] = user.id
           end 
        end 
    end 
    
end