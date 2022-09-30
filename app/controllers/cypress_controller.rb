class CypressController < ApplicationController
  skip_before_action :verify_authenticity_token

  def force_login
    if params[:email].present?
      user = User.find_by!(email: params.require(:email))
    else
      user = User.first!
    end
    sign_in(user)

    redirect_to root_path
  end
end