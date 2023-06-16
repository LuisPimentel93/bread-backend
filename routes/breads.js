const router = require('express').Router()
const{
    getAllBread,
    getBreadById,
    createBread,
    deleteBreadById,
    updateBreadById
} = require('../controllers/bread')

// GET / get all bread
router.get('/', getAllBread)
// GET / get all bread by id
router.get('/:id', getBreadById)
// POST / create bread
router.post('/', createBread)

router.put('/:id', updateBreadById)
// GET / get all bread by id
router.delete('/:id', deleteBreadById )
// GET / get all bread by id


module.exports = router