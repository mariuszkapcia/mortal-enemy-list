# Mortal enemy list server

Purpose of this sample application is to show how to create very granular API for task-based UI.

There are no tests in this project. If you want to see how this type of architecture can be tested check out my other projects.

## Local environment setup

### Ruby version

2.5.0

### Install gems

```ruby
bundle install --path vendor/bundle
```

### Setup database
```ruby
bundle exec rake db:create
bundle exec rake db:migrate
```

### Start development server
```ruby
bundle exec rails s -p 3010
```
### Deployment

From main repository directory:

```bash
git subtree push --prefix mortal-enemy-list-server heroku master
```
