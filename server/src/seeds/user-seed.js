import { user } from "../models/index.js";
export const seedUsers = async () => {
    try {
        await user.bulkCreate([
            {
                username: "Paul",
                email: "PAUL@example.com",
                password: "securePass123",
            },
            {
                username: "Jae",
                email: "JAE@example.com",
                password: "myPassword456",
            },
            {
                username: "Jessica",
                email: "Jessica@example.com",
                password: "pass789!",
            },
            {
                username: "Jennifer",
                email: "Jennifer@example.com",
                password: "superSecurePass!",
            },
        ], { individualHooks: true });
        console.log("Users seeded successfully!");
    }
    catch (error) {
        console.error("Error seeding users:", error);
    }
};
