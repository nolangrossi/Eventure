"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rsvp = void 0;
exports.RsvpFactory = RsvpFactory;
const sequelize_1 = require("sequelize");
class Rsvp extends sequelize_1.Model {
}
exports.Rsvp = Rsvp;
function RsvpFactory(sequelize) {
    Rsvp.init({
        rsvp_id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: 'users', // the name of the table you are referencing
                key: 'user_id', // the primary key in the users table
            },
            allowNull: false, // ensure user_id can't be null
        },
        event_id: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: 'event', // the name of the table you are referencing
                key: 'event_id', // the primary key in the events table
            },
            allowNull: false, // ensure event_id can't be null
        },
    }, {
        sequelize,
        // Manually define the table name
        tableName: 'rsvp',
        // Set to false to remove the `created_at` and `updated_at` columns
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });
    return Rsvp;
}
