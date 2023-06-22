const Router = require('express')
const router = new Router()
const ProductRouter = require('./productsRouter');
const UserRouter = require('./userRouter')

router.use('/products', ProductRouter);
router.use('/user', UserRouter);

module.exports = router;