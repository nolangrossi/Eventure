"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
exports.EventFactory = EventFactory;
const sequelize_1 = require("sequelize");
class Event extends sequelize_1.Model {
}
exports.Event = Event;
function EventFactory(sequelize) {
    Event.init({
        event_id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        event_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        event_lat: {
            type: sequelize_1.DataTypes.DECIMAL(10, 6), // More precise for latitude
            allowNull: false,
        },
        event_lon: {
            type: sequelize_1.DataTypes.DECIMAL(10, 6), // More precise for longitude
            allowNull: false,
        },
        event_price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        category_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        event_date: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        event_time: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        // Manually define the table name
        tableName: "event",
        // Set to false to remove the `created_at` and `updated_at` columns
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });
    return Event;
}
