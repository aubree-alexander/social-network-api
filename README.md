# social-network-api

## Built with
* Express.js
* MongoDB 
* Mongoose
* Javascript

# Description/Purpose
* Challenge for UW Extensions Coding Bootcamp.
* Functionality: Back end for a social network API. User can invoke the application with "npm start" or using Nodemon and can test routes in Insomnia. User can create, update, and delete posts, comments and reactions; and user can add and delete friends.


## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Walkthrough Video

* A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.

### Bonus: +10 Points
* Application deletes a user's associated thoughts when the user is deleted.

## Contribution
Aubree Alexander