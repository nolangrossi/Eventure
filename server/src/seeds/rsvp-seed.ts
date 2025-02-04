import { rsvp } from '../models/index.js';

export const seedRsvp = async () => {
  await rsvp.bulkCreate([
    {
      rsvp_id: 1,
      user_id: 1,
      event_id:1

    }, 
    {
      rsvp_id: 2,
      user_id: 2,
      event_id:2
    }, 
    {
      rsvp_id: 3,
      user_id: 3,
      event_id:3
    },
    {
      rsvp_id: 4,
      user_id: 4,
      event_id:4
    }
  ], { individualHooks: true})
}
