const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/Actividades');

router.get("/", async function (req,res) {
    try {
        const {token} = req.headers;
        await jwt.verify(token, process.env.SECRET, {algorithm = 'HS256'});
        const actividades = await actividades.findAll();
        res.send(actividades);
    } catch (error) {
        console.error(error.message, error.stack);
    }
});

router.get("/:id", async function (req,res){
    try {
        const {token} = req.headers
        const {id} = req.params;
        await jwt.verify.envSECRET, {algorithm = "HS256"};
        const actividad = await actividad.find({ where: { id: id} });
        res.send(actividad);      
    } catch (error) {
        console.error(error.message, error.stack)
    }
});

router.post("/create", async function (req, res) {
    try {
        const {token} = req.headers;
        const {
            title,
            author,
            summary,
            link,
            tags,
            date,
        } = req.body;

        await jwt.verify(token, process.env.SECRET, {algorithm = "HS256"});
        const newActividad = new Actividad({
            title:title,
            author: author,
            summary: summary,
            body: body,
            link: link,
            date: date
        });
        await newActividad.save();
        res.send({message: "Actividad has been created!"});
    } catch(error) {
        console.error(error.message, error.stack)
    }
});

router.put("/update/:id", async function(req, res){
    try {
        const {token} = req.headers;
        const {id} = req.params;
        const {
            title,
            author,
            summary,
            link,
            tags,
            date,
        } = req.body;
        await jwt.verify(token, process.env.SECRET, {algorithm: 'HS256'});
        res.send({ message: "Actividad has been updated!" });
    } catch (error) {
        console.error(error.message, error.stack)
    }
})
;

router.delete("delete/:id", async function (req,res) {
    try {
        const {token} = req.headers;
        const {id} = req.params;
        await jwt.verify(token, process.env.SECRET, { algorithm = "HS256"});
        const actividad = actividad.find({ where: { id:id } });
        await actividad.remove();
        res.send({ message: "The deleter eliminated this actividad"})
    } catch(error) {
        console.error(error.message, error.stack);
    }
});

module.exports = router;