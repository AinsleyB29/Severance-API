## Severance TV-Show API 🧠

A JSON API built with Mongoose, Express, Javascript, and RESTful routes that display episodic information from _Severance_, the popular Apple TV+ series.

## Description

The _Severance API_ utilizes a mongoose model and schema to structure the data into key-value pairs that contain the following information as it relates to the show: name of the episode, season, # of the episode, the date it aired, streaming platform, runtime, IMDB rating, cast, director, writers, a brief synopsis, genres, and a certificate to indicate the audience maturity level.

## Instructions

1. Clone down this repo.
2. Install dependencies.
3. Seed data to database.
4. Run server.
5. Have fun 🥳!

## Clone repository

```
git clone https://github.com/AinsleyB29/Severance-API.git
```

## Install Dependencies

```
npm install express mongoose
```

## Seed the data

`npm run db:seed`

## Connect to server

`node server.js`

## API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | /api         | This is the API root.   |
| GET    | /episodes    | Retrieves all episodes. |
| GET    | /episodes:id | Retrieves one episode.  |
| POST   | /episodes    | Creates one episode.    |
| PUT    | /episodes:id | Updates one episode.    |
| DELETE | /episodes:id | Deletes one episode.    |

## Contact

If you'd like to learn more, collaborate, or have suggestions for projects I can create feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/ainsleybrundage/).
