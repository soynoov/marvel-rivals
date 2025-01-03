import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Hero = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    rol: column.number({ references: () => Rol.columns.id }), //FK
    health: column.number({ unique: true }),
    speed: column.number({ unique: true }),
    damage: column.number({ unique: true }),
  },
});

const Rol = defineTable({
  columns: {
    id: column.number(),
  },
});

const TeamUp = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    descripcion: column.text(),
    activator_hero_id: column.number({ references: () => Hero.columns.id }), //FK
    affected_heroes: column.number(),
  },
});

const Ability = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    heroe_id: column.number({ references: () => Hero.columns.id }), //FK
    passives: column.json(),
  },
});

// export

export default defineDb({
  tables: {
    Hero,
    Rol,
    TeamUp,
    Ability,
  },
});
