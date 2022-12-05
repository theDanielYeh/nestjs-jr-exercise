# Introduction

This project is set up with [NestJS](https://nestjs.com), which will be the primary back-end framework you will be working with.

Your abilities will be tested in the following:
- Typescript
- NodeJS
- MongoDB
- REST API
- Detail Orientation

When you are done with your project, please push to your personal github account, and share the link with the person who is administering this test.

## Description

Your tasks will consist of the following:

- [Introduction](#introduction)
  - [Description](#description)
    - [Set Up](#set-up)
      - [Install NodeJS](#install-nodejs)
      - [Clone project](#clone-project)
    - [Install Mongo](#install-mongo)
    - [Create "users" collection](#create-users-collection)
    - [Generate new "Users API"](#generate-new-users-api)
    - [Seed Test Users](#seed-test-users)
    - [Search Endpoint](#search-endpoint)
    - [Validation](#validation)
  - [Resources](#resources)

### Set Up

#### Install NodeJS

Before getting started, you will need to be running NodeJS version 12 or 14.

I recommend installing [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) or NVM for short.

Please google steps for installing for your environment (ie. mac, windows, linux, etc.).

Once installed, please install node v12 and set as your default.

```
nvm install 12.22.12
```

Then set as your default node version

```
nvm alias default 12.22.12
```

Confirm you are running version 12

```
node -v
```

#### Clone project

```
git clone
```

Install dependencies

```
cd <project_folder>
npm install
```

### Install Mongo

Download and install the community edition of MongoDB from https://www.mongodb.com/docs/manual/installation/.

Next, download and install [Studio 3T](https://robomongo.org). This is a GUI for connecting to your Mongo database, and will allow you to query your database for easier debugging and troubleshooting.

### Create "users" collection

### Generate new "Users API"

### Seed Test Users

Seed test data from [users.csv](./seed-data/users.csv) using for loop and CRUD methods

### Search Endpoint

Add a new HTTP POST method "search" endpoint
   1. Given a "username", this endpoint should return the users email if found
   2. If NOT found, a 404 HTTP Exception should be thrown

### Validation

Add class validators for all properties

## Resources
1. https://docs.nestjs.com