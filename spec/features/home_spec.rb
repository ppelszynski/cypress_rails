# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Home' do
  scenario 'it displays sth...' do
    visit root_path

    expect(page).to have_content('Home page')
  end

  scenario 'user can log in and sign out' do
    user = create(:user, password: 'password')

    visit new_user_session_path

    fill_in :user_email, with: user.email
    fill_in :user_password, with: 'password'

    click_on('Log in')

    visit root_path
    click_on('sign out')

    expect(page).to have_content('sign in')
  end
end
