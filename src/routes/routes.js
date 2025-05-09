const express = require('express'); 
const router = express.Router(); 

const MensagensController = require('../controllers/mensagens'); 

router.get('/mensagens', MensagensController.listarMensagens); 
router.post('/mensagens', MensagensController.cadastrarMensagens); 
router.patch('/mensagens', MensagensController.editarMensagens); 
router.delete('/mensagens', MensagensController.apagarMensagens); 


module.exports = router;