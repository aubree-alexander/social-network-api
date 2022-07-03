const { User } = require('../models')

const userController = {
    //get all existing users
    getAllUsers(req, res) {
        User.find().select('-__v')
        .then((userData) => {res.json(userData)})
        .catch((err) => {res.json(err)}) 
    },

    //get single user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('friends')
          .populate('thoughts')
          .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      // create a new user
      createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => {
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      //update existing user 
      updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {new: true, runValidators: true})
          .then(userData => res.status(200).json(userData))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      //delete existing user
      deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userId})
          .then(userData => res.status(200).json(userData))
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
      },


      //add friend
      addFriend(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, {$push: {friends: req.params.friendId}}, {new: true})
          .then(userData => res.status(200).json(userData))
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
      },

      //delete friend
      deleteFriend(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}}, {new: true})
        .then(userData => res.status(200).json(userData))
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
      }
}




module.exports = userController