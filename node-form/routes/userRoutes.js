import express from "express"
import User from "../models/user.js"
// import { Router } from "express"
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("get")
    try {
        const users = await User.find({})
        res.send(users)
        console.log(users, "iiiiiiiii")
    } catch (err) {
        console.log("registration Errorr", err)
    }
})


router.post('/register', async (req, res) => {
    console.log("post")
    const { name, age, email, phone, adress } = req.body;
    try {
        const users = await User.create({ name, age, email, phone, adress })
        res.send(users)
        console.log(users, "KOoo")
    } catch (err) {
        console.log("registration Errorr", err)
    }
})

router.put('/updateUser/:id', async (req, res) => {
    console.log(req.body, "put")
    const userId = req.params.id
    const { name, age, email, phone, adress } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { name, age, email, phone, adress },
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        } else {
            res.status(200).send(updatedUser)
        }
        console.log(updatedUser, "Updated")
    } catch (err) {
        console.error("Updation Error", err);
        res.status(500).send({ message: "Internal server error" })
    }
})

router.delete('/userDelete/:id', async (req, res) => {
    const userId = req.params.id
    console.log("delete")
    const deletedUser = await User.findOneAndDelete(userId)
    try {
        if (!userId) {
            return res.status(400).json({ message: "User not found" })
        }
        res.json({ message: "User deleted successfully", data: deletedUser })
        console.log(deletedUser)
    } catch {
        console.log("Error while deleting user")
        res.status(500).json({ message: "Server error" })
    }

})

export default router;