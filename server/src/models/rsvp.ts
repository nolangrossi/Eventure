import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from 'sequelize';


export class Rsvp extends Model<
  InferAttributes<Rsvp>,
  InferCreationAttributes<Rsvp>
> {
  declare rsvp_id: CreationOptional<number>;
  declare user_id: number;
  declare event_id: number;
}
export function RsvpFactory(sequelize: Sequelize): typeof Rsvp {
  Rsvp.init(
    {
      rsvp_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users', // the name of the table you are referencing
          key: 'user_id', // the primary key in the users table
        },
        allowNull: false, // ensure user_id can't be null
      },
      event_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'events', // the name of the table you are referencing
          key: 'event_id', // the primary key in the events table
        },
        allowNull: false, // ensure event_id can't be null
      },
    },
    {
      sequelize,
      // Manually define the table name
      tableName: 'rsvp',
      // Set to false to remove the `created_at` and `updated_at` columns
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Rsvp;

}