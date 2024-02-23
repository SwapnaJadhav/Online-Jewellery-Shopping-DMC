const express = require("express")
const db = require("../database/db")
const utils = require("../utils")

const router = express.Router()

router.get("/", (request, response) => {

    const sql = `select
                    *
                from 
                    wishlist w, products p 
                where 
                    w.pid = p.pid`
    db.query(sql, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post("/", (request, response) => {
    const { pid } = request.body
    const sql =
        `INSERT INTO wishlist (pid) VALUES (?)`
    db.query(sql, [pid], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete("/:wid", (request, response) => {
    const { wid } = request.params
    const sql =
        `delete from wishlist 
        where   
            wid = ?`

    db.query(sql, [wid], (error, data) => {

        response.send(utils.createResult(error, data));
    });
});

module.exports = router