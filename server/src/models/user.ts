import bcrypt from 'bcryptjs';


import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type Sequelize,
} from 'sequelize';

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare user_id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;

  // Instance method to compare the entered password with the stored hash
  public async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  // Instance method to hash the password before saving it
  public static async hashPassword(user: User) {
    if (user.changed('password')) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }

  // Method to set the email to lowercase before saving
  async setEmailToLowerCase() {
    this.email = await this.email.toLowerCase();
  }
}

export function UserFactory(sequelize: Sequelize) {
  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter a password',
          },
        },
      },
    },
    {
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
    }
  );

  return User;
}
