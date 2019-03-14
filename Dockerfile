
FROM node:11-alpine as build-stage

WORKDIR /myapp

COPY package.json package.json
RUN npm install
COPY . .
RUN npm run postinstall

# FROM ruby:2.5.3
FROM ruby:2.5.3-alpine
RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata

WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install

COPY --from=build-stage /myapp /myapp

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]