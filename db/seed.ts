import { db, Hero } from 'astro:db';

// https://astro.build/db/seed

export default async function seed() {
  db.insert(Hero).values([
    {
      id: 1,
      name: 'Adão Bruxo',
      rol: 'Suport de Donald Trump',
      health: 250,
      speed: 50,
      damage: 50000000,
    },
    {},
  ]);
}
