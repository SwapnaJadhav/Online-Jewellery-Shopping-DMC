const express = require("express")
const db = require("../database/db")
const utils = require("../utils")

const router = express.Router()

router.get("/", (request, response) => {
    const sql = "select * from products";
    db.query(sql, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

// router.get("/cid/:cid", (request, response) => {
//     const sql = "SELECT * FROM products WHERE cid=?"
//     db.query(sql, [request.params.cid], (error, data) => {
//       response.send(utils.createResult(error, data))
//     })
//   })

router.get("/cid/:cid", (request, response) => {
  const sql = "SELECT * FROM products WHERE cid = ?";
  db.query(sql, [request.params.cid], (error, data) => {
    if (error) {
      console.error("Error fetching products:", error);
      response.status(500).send("Internal Server Error");
    } else {
      response.send(utils.createResult(null, data));
    }
  });
});


router.get("/sid/:sid", (request, response) => {
   const sql = "SELECT * FROM products WHERE sid=?"
   db.query(sql, [request.params.sid], (error, data) => {
     response.send(utils.createResult(error, data))
   })
 })

module.exports = router