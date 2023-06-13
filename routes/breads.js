const router = require('express').Router()
const{
    getAllBread,
    getBreadById,
    createBread
} = require('../controllers/bread')

// GET / get all bread
router.get('/', getAllBread)
// GET / get all bread by id
router.get('/:id', getBreadById)
// POST / create bread
router.post('/', createBread)
// GET / get all bread by id
// GET / get all bread by id


module.exports = router