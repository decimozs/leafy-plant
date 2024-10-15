import { integer, pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { userTable } from './user-schema';

export const authTable = pgTable('auth_table', {
    id: text('id').primaryKey().notNull(),
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    userId: text('user_id').notNull().references(() => userTable.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
        .notNull()
        .$onUpdate(() => new Date()),
});

export const sessionTable = pgTable("session_table", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});
