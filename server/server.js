const express = require("express")
const cors = require("cors")
const path = require('path');

const app = express()

const userRouter = require("./router/user")
const adminRouter = require("./router/admin")
const customerRouter = require("./router/customer")
const cartRouter = require("./router/cart")
const wishlistRouter = require("./router/wishlist")


app.use(cors("*"))
app.use(express.json())
app.use(express.static("uploads"))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/customer", customerRouter)
app.use("/cart", cartRouter)
app.use("/wishlist", wishlistRouter)


app.listen(7000, "0.0.0.0", () => {
  console.log("Server started on port 7000")
})
