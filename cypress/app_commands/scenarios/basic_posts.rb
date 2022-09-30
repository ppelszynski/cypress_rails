# You can setup your Rails state here
# MyModel.create name: 'something'
user = User.first

Post.create!(title: 'Post 1', body: 'body 1', user: user)
Post.create!(title: 'Post 2', body: 'body 2', user: user)