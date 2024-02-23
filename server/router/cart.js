const express = require("express")
const db = require("../database/db")
const utils = require("../utils")

const router = express.Router()

router.get("/", (request, response) => {

    const sql = `select
                    c.cartId, p.image, p.pname, p.price, c.qty, p.cid, p.sid, c.total
                from 
                    cart c, products p 
                where 
                    c.pid = p.pid`
    db.query(sql, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post("/", (request, response) => {
    const { pid } = request.body
    const sql =
        `INSERT INTO cart (pid) VALUES (?)`
    db.query(sql, [pid], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.put("/:cartId", (request, response) => {
    const { cartId } = request.params
    const { qty, price, total } = request.body
    const sql =
        `update cart 
        set
            qty = ?, 
            price = ?, 
            total = ?
        where   
        cartId = ?`
    db.query(sql, [qty, price, total, cartId], (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete("/:cartId", (request, response) => {
    const { cartId } = request.params
    const sql =
        `delete from cart 
        where   
        cartId = ?`

    db.query(sql, [cartId], (error, data) => {

        response.send(utils.createResult(error, data));
    });
});

module.exports = router