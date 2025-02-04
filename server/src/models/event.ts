import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from "sequelize";

export class Event extends Model<
  InferAttributes<Event>,
  InferCreationAttributes<Event>
> {
  declare event_id: CreationOptional<number>;
  declare event_name: string;
  declare event_price: number;
  declare category_id: number;
  declare event_lon: number;
  declare event_lat: number
  declare event_date: number;
  declare event_time: number;
}
export function EventFactory(sequelize: Sequelize): typeof Event {
  Event.init(
    {
        event_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        event_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        event_lat: {
          type: DataTypes.DECIMAL(10, 6), // More precise for latitude
          allowNull: false,
        },
        event_lon: {
          type: DataTypes.DECIMAL(10, 6), // More precise for longitude
          allowNull: false,
        },
        event_price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        category_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        event_date: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        event_time: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      
    {
      sequelize,
      // Manually define the table name
      tableName: "rsvp",
      // Set to false to remove the `created_at` and `updated_at` columns
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Event;
}
