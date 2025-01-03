import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Heroe = defineTable({
  columns: {},
});

// export

export default defineDb({
  tables: {},
});
