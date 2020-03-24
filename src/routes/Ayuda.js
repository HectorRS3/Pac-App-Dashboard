const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Ayuda = require('../models/Ayuda');


router.get("/", async function (req,res) {
    try {
        const {token} = req.headers;
        await jwt.verify(token, process.env.SECRET, {algorithm:'HS256'});
        const ayudas = await Ayuda.findAll();
        res.send(ayudas);
    } catch (error) {
        console.error(error.message, error.stack);
    }
});

router.get("/:id", async function (req, res) {
    try {
        const {token} = req.headers
        const {id} = req.params;
        await jwt.verify(token, process.env.SECRET, {algorithm: 'HS256'});
        const ayuda = await Ayuda.find({ where: { id: id } });
        res.send(ayuda);
    } catch (error) {
        console.error(error.message, error.stack);
    }
});

router.post("/create", async function (req, res) {
    try {
        const {token} = req.headers;
        const {title, number, links} = req.body;
        await jwt.verify(token, process.env.SECRET, {algorithm: 'HS256'});
        const nuevaAyuda = new Ayuda({title: title, number: number, links: links});
        nuevaAyuda.save();
        res.send({ message: "La base de datos ha sido actualizada!"});
    } catch(error) {
        console.error({message: "Algo malo ha ocurrido. Por favor, intentalo de nuevo.", stack: error.stack});
    }
});

router.put("/update/:id", async function (req, res){
    try {
        const { token } = req.headers;
        const {id} = req.params;
        const {title,number,link} = req.body;

        await jwt.verify(token,process.env.SECRET, {algorithm: 'HS256' });
        const ayuda = Ayuda.find({where: { id:id} });
        ayuda.title = title;
        ayuda.number = number;
        ayuda.link = link;
        await ayuda.save();
        res.send({message: "Ayuda ha sido actualizada!", ayuda: ayuda });

    } catch(error) {
        console.error(error.message, error.stack);
    }
});

router.delete("delete/:id", async function (req,res) {
    try {
        const {token} = req.headers;
        const {id} = req.params;
        await jwt.verify(token, process.env.SECRET, {algrithm = "HS256"});
        const ayuda = await ayuda.find({ where: {id: id}});
        await ayuda.remove();
        res.send({ message: "Esa ayuda ha sido removida, pongase a trabajar." });
    } catch (error) {
        console.error(error.message, error.stack);
    }
});

module.exports = router;