import express, { request, Request, Response } from "express";
import bcrypt from "bcryptjs";
import {user as User } from "../../models/index.js";

const router = express.Router();

// In your signup route
router.post("/signup", async (req: Request, res: Response): Promise<any> => {

    console.log("Recieved signup Request", request.body)

    try {
        const { firstname, lastname, email, username, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: "Email is already in use." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("password encrypted");
        
        const newUser = await User.create({
            firstname,
            lastname,
            email,
            username,
            password: hashedPassword,
        });

        console.log(newUser);

        return res.status(201).json({
            message: "User created successfully!",
            user: {
                id: newUser.user_id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                username: newUser.username,
            },
        });

    

    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ error: "Internal server error." });
    }
});



export {router as SignUprouter};
