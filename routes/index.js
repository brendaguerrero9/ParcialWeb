var express = require('express');
var router = express.Router();
var ObrasModel = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Creando ruta de agregar
router.post('/create',(req,res,next)=>{
  console.log(req.body);
  var newObra = new ObrasModel();
  newObra.id = req.body.id;
  newObra.nombre = req.body.nombre;
  newObra.precio = req.body.precio;
  newObra.año = req.body.año;

  newObra.save((error,obra)=>{
    if(error) return res.status(500).json({success:false, message: "No se guardo"});

    if(obra) return res.status(200).json({success:true, message:"Se guardo", obra});
  });
});

//Creando ruta para modificar
router.put('/update/:id', (req,res,next)=>{
  var obraId = req.params.id;
  var updateObra = req.body;

  ObrasModel.findByIdAndUpdate(obraId, updateObra,{new:true}, (error,obra)=>{
    if(error) return res.status(500).json({success:false, message: "No se guardo"});

    if(obra) return res.status(200).json({success:true, message:"Se guardo", obra});
  });
});

//Creando ruta para eliminar
router.delete('/delete/:id',(req,res,next)=>{
  var obraId = req.params.id;

  ObrasModel.findByIdAndDelete(obraId,(error,obra)=>{
    if(error) return res.status(500).json({success:false, message: "No se guardo"});

    if(obra) return res.status(200).json({success:true, message:"Se guardo", obra});
  });
});

//Creando ruta para mostrar una obra
router.get('/obra/:id', (req,res,next)=>{
  ObrasModel.findById(req.params.id, (error,obra)=>{
    if(error) return res.status(500).json({success:false, message: "No se guardo"});

    if(obra) return res.status(200).json({success:true, message:"Se guardo", obra});
  });
});

//Creando ruta para mostrar todas las obras
router.get('/getObras', (req,res,next)=>{
  ObrasModel.find({},(error,obras)=>{
    if(error) return res.status(500).json({success:false, message: "No se guardo"});

    if(obras) return res.status(200).json({success:true, message:"Se guardo", obra});
  });
});
module.exports = router;
