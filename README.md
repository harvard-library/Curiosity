spotlight
=========

[![Build Status](https://travis-ci.org/projectblacklight/spotlight.png?branch=master)](https://travis-ci.org/projectblacklight/spotlight) | [![Gem Version](https://badge.fury.io/rb/blacklight-spotlight.png)](http://badge.fury.io/rb/blacklight-spotlight) | [Release Notes](https://github.com/projectblacklight/spotlight/releases) | [Design Documents](https://github.com/projectblacklight/spotlight/releases/tag/v0.0.0)

Spotlight is open source software that enables librarians, curators, and other content experts to easily build feature-rich websites that showcase collections and objects from a digital repository, uploaded items, or a combination of the two. Spotlight is a plug-in for [Blacklight](https://github.com/projectblacklight/blacklight), an open source, Ruby on Rails Engine that provides a basic discovery interface for searching an Apache Solr index.

Read more about what Spotlight is, our motivations for creating it, and how to install and configure it in the [wiki pages](https://github.com/projectblacklight/spotlight/wiki). You might also want to take a look at our demo videos, especially the [tour of a completed Spotlight exhibit](https://www.youtube.com/watch?v=_A7vTbbiF4g) and the walkthrough of [building an exhibit with Spotlight](https://www.youtube.com/watch?v=qPJtgajJ4ic).

## Requirements

1. Ruby (2.3.0 or greater)
2. Rails (5.1 or greater)
3. Java (7 or greater) *for Solr*
4. ImageMagick (http://www.imagemagick.org/script/index.php) due to [carrierwave](https://github.com/carrierwaveuploader/carrierwave#adding-versions)

## Installation

To bootstrap a new Rails application:

```
$ rails new app-name -m https://raw.githubusercontent.com/harvard-library/spotlight/harvard_development/template.rb
```

or from an existing Rails application:

```
$ rake rails:template LOCATION=https://raw.githubusercontent.com/harvard-library/spotlight/harvard_development/template.rb
```

*During this process you will be prompted to enter an initial administrator email and password (this is a super-admin that can administer any exhibit in the installation).* If you choose not to create one, the first user will be given administrative privileges.

Change directories to your new application:

```
$ cd app-name
```

Run the database migrations:

```
$ rake db:migrate
```

Start Solr (possibly using `solr_wrapper` in development or testing):

```
$ solr_wrapper
```

and the Rails development server:

```
$ rails server
```

Go to http://localhost:3000 in your browser.

## Configuration

### Default ActionMailer configuration

Spotlight introduces functionality that depends on being able to send emails to exhibit curators and contacts. Be sure to configure your application's environments appropriately (see the Rails Guide for [Action Mailer Configuration](http://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)).

See the [Spotlight wiki](https://github.com/projectblacklight/spotlight/wiki) for more detailed information on configuring Spotlight.

# Developing Spotlight

Spotlight:

* is a Rails engine and needs to be used in the context of a Rails application. We use [engine_cart](https://github.com/cbeer/engine_cart) to create an internal test application at .internal_test_app/
* uses Solr as part of its integration tests. We use [solr_wrapper](https://github.com/cbeer/solr_wrapper) to manage the Solr instance used for development and test.

Our `$ rake ci` and `$ rake spotlight:server` tasks utilize Solr and the testing rails app automatically.

See more detailed instructions for development environment setup at ["Contributing to Spotlight"](https://github.com/projectblacklight/spotlight/wiki/Contributing-to-Spotlight)

## Developing React Assets

### Requirements

1. [Node.js](https://nodejs.org/en/) (10 or greater) and [Yarn](https://yarnpkg.com/en/docs/install) (package manager)

### Setup

1. With the above [requirements](#requirements-1) all dependencies can be installed by running `yarn`.

React assets are saved in `./app/web`, outside of the usual `./app/assets/javascripts` because they require additional build tools that Blacklight will not have enabled until [v7](https://github.com/projectblacklight/blacklight/wiki/Using-Webpacker-to-compile-javascript-assets).

To build the React assets for development, run `yarn start`. By default, the `views/layouts/spotlight/spotlight.html.erb` template will request the JavaScript bundle from http://localhost:8080/webpack_bundle.js.

To build the React assets for production and serve them through the host application, simply run `yarn build`. The resulting bundle will be pulled in through Sprockets when the application is run with the `RAILS_ENV=production` enviroment variable.

Configuration can be found in `webpack.config.js` and `package.json`. You might also want to adjust the environment variables in `.env`, `.env.development`, and/or `.env.development.local`. Don't commit `.env*.local` files to git.

## Tests

### Run all the tests:

```
$ rake
```

This utilizes Solr and the testing rails app automatically.

## Translations

Spotlight ships with [`i18n-tasks`](https://github.com/glebm/i18n-tasks) to help manage translations. To run a translation health check:

```sh
$ bundle exec i18n-tasks health
```

See [developer-facing instructions for enabling translation](https://github.com/projectblacklight/spotlight/wiki/Translations) on the wiki.

## Community


- Join us on the [code4lib Slack](https://code4lib.org/irc)
  - **#blacklight** - a developer-focused channel for discussing implementation, customization, and other software concerns in the larger [Blacklight community](http://projectblacklight.org/)
  - **#spotlight-service** - a service-focused channel for people who support exhibit-builders at institutions already using Spotlight
- Google Groups
  - [Blacklight Development Google group](https://groups.google.com/forum/#!forum/blacklight-development)
  - [Spotlight Community Group](https://groups.google.com/forum/#!forum/spotlight-community) (equivalent to #spotlight-service)
