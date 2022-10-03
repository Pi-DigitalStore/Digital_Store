var express = require('express');
var router = express.Router();
var ConfirmacaoController = require('../controllers/ConfirmacaoController');
var FemininaController = require('../controllers/FemininaController');
var InfantilController = require('../controllers/InfantilController');
var MasculinaController = require('../controllers/MasculinaController');
var PagamentoController = require('../controllers/PagamentoController');
var ProdutoController = require('../controllers/ProdutoController');
var SacolaController = require('../controllers/SacolaController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/confirmacao', ConfirmacaoController.index);
router.get('/feminina', FemininaController.index);
router.get('/infantil', InfantilController.index);
router.get('/masculina', MasculinaController.index);
router.get('/pagamento', PagamentoController.index);
router.get('/produto', ProdutoController.index);
router.get('/sacola', SacolaController.index);




module.exports = router;
