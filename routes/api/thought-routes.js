const router = require('express').Router()

const { 
    //these will be created in user controller
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/user-controller')

router.route('/').get(getAllThoughts).post(addThought)

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;