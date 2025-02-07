"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.UserFactory = UserFactory;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    // Instance method to compare the entered password with the stored hash
    async comparePassword(password) {
        return bcryptjs_1.default.compare(password, this.password);
    }
    // Instance method to hash the password before saving it
    static async hashPassword(user) {
        if (user.changed('password')) {
            const salt = await bcryptjs_1.default.genSalt(10);
            user.password = await bcryptjs_1.default.hash(user.password, salt);
        }
    }
    // Method to set the email to lowercase before saving
    async setEmailToLowerCase() {
        this.email = await this.email.toLowerCase();
    }
}
exports.User = User;
function UserFactory(sequelize) {
    User.init({
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter a password',
                },
            },
        },
    }, {
        // When adding hooks via the init() method, they go below
        hooks: {
            // Hash the password before creating a user
            beforeCreate: async (newUserData) => {
                await User.hashPassword(newUserData); // Hash password before saving
                await newUserData.setEmailToLowerCase(); // Set email to lowercase
            },
            // Hash the password before updating a user
            beforeUpdate: async (updatedUserData) => {
                await User.hashPassword(updatedUserData); // Hash password before updating
                await updatedUserData.setEmailToLowerCase(); // Set email to lowercase
            },
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'users',
    });
    return User;
}
