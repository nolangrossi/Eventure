import sequelize from '../config/connection.js';
import { RsvpFactory} from './rsvp.js';
import { UserFactory } from './user.js';
import { EventFactory } from './event.js';


const rsvp = RsvpFactory(sequelize);

const user = UserFactory(sequelize);

const event = EventFactory(sequelize);

export { rsvp, user,event, sequelize };
