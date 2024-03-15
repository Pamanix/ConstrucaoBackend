const express = require('express');

const router = express.Router();

router.get("/produtos", function(req, res){
    res.json([]);
});

router.get("/produtos/produtosId", function(req, res){
    if(req.params.produtoId == 1){
        res.json({});
    } else {
        res.status(404),json({msg:"Produto não encontrado"});
    }
});

router.post("/produtos", function(req, res){
    if(req.body && req.body.nome && req.body.preco){
        res.status(201).json({});
    } else {
        res.status(422)
        //.json
    }
});

route.put("/produtos/:produtosId", function(req, res){
    if(req.params.produtoId == 1){
        res.json({});
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }
});

route.delete("/produtos/:produtoId", function(re, res){
    res.status(204).end();
});

module.exports = router;

