const router = require('express').Router()
const apiRoutes = require('./api')

//adds /api to endpoint, gives access to apiroutes
router.use('/api', apiRoutes)

//error handling
router.use((req, res) => {
    return res.send('Something went WRONG.')
})

module.exports = router;

