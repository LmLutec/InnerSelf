class UsersController < ApplicationController
    def create
        user = User.create(email: params[:email], password: params[:password])
    end 


end
