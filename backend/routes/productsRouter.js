const Router = require('express');
const router = new Router();
const ProductController = require('../controllers/productController');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', ProductController.create);
router.delete('/:id', ProductController.delete);
router.patch('/:id', ProductController.update);

module.exports = router;