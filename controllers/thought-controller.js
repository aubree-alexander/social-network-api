const { User, Thought } = require('../models')

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find().select('-__v')
        .then((thoughtData) => {res.json(thoughtData)})
        .catch((err) => {res.json(err)}) 
    },

    //get thoughts by ID
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .populate('reactions')
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                  return res.status(404).json({ message: 'No thought with this id!' });
                }
                res.json(dbThoughtData);
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    //add new thought
    addThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                res.json(dbThoughtData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //update existing thought
    updateThought(req, res) {
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$set: req.body}, {new: true, runValidators: true})
          .then(thoughtData => res.status(200).json(thoughtData))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

    //delete existing thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.thoughtId})
          .then(thoughtData => res.status(200).json(thoughtData))
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
    },

    //add new reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$push: {reactions: req.body}}, {new: true})
          .then(thoughtData => res.status(200).json(thoughtData))
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
      },


    //delete existing reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: req.params.reactionId}}, {new: true})
        .then(thoughtData => res.status(200).json(thoughtData))
              .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    }
    
}

module.exports = thoughtController






