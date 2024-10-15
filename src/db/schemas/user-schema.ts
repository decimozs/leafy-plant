import { integer, pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const userTable = pgTable('user_table', {
    id: text('id').primaryKey().notNull(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
    gender: text('gender').notNull(),
    role: text('role').notNull(),
    organization: text('organization').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
})

export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;

export const userAddressTable = pgTable('user_address_table', {
    id: text('id').primaryKey().notNull(),
    street: text('street').notNull(),
    barangay: text('barangay').notNull(),
    city: text('city').notNull(),
    zipCode: text('zip_code').notNull(),
    userId: text('user_id').notNull().references(() => userTable.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
})
