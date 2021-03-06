const router = require('express').Router()

const { 
    getAllUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller')

//assign methods that we'll use at /users
router.route('/').get(getAllUsers).post(createUser)

router.route('/:userId').get(getUserById)
.put(updateUser).delete(deleteUser)

//in order to add friend to user, we need another user and need to grab their id in order to add their id to your friends array.
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router;