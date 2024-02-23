const express = require("express")
const db = require("../database/db")
const utils = require("../utils")
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the directory where uploaded files will be stored

const router = express.Router()

router.get("/", (request, response) => {
    const sql = "select * from products";
    db.query(sql, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post("/", upload.single('image'), (request, response) => {
    const { pname, price, cid, sid } = request.body;
    const image = request.file; // Get the uploaded file
    const sql = "INSERT INTO products (pname, price, image, cid, sid) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [pname, price, image.path, cid, sid], (error, data) => {
        response.send(utils.createResult(error, data));
    });
});

// router.post("/", (request, response) => {
//     const { pname, price } = request.body
//     const sql = 
//         "insert into products( pname, price ) values(?,?)"
//     db.query(sql, [pname, price], (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

router.put("/:pid", (request, response) => {
    const pid = request.params.pid;
    const { price } = request.body;
    const sql = 
        "UPDATE products SET price=? WHERE pid=?";
    db.query(sql, [price, pid], (error, data) => {
        response.send(utils.createResult(error, data));
    });
});

router.delete("/:pid", (request, response) => {
    const pid = request.params.pid;

    const sql = 
        "DELETE FROM products WHERE pid=?";

    db.query(sql, [pid], (error, data) => {

        response.send(utils.createResult(error, data));
    });
});

module.exports = router