import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Heroe = defineTable({
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

// export

export default defineDb({
  tables: {},
});
