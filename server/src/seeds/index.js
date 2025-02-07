import { seedRsvp } from './rsvp-seed.js';
import { seedUsers } from './user-seed.js';
import sequelize from '../config/connection.js';
import { seedEvents } from './events-seed.js';
const seedAll = async () => {
    console.log(process.env.DB_PASSWORD);
    try {
        await sequelize.sync();
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedRsvp();
        console.log('\n----- RSVPs SEEDED -----\n');
        await seedEvents();
        console.log('\n----- Events SEEDED -----\n');
        await seedUsers();
        console.log('\n----- Users SEEDED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll();
