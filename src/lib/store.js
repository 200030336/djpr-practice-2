
// src/lib/store.js
import { writable } from 'svelte/store';

// Define the initial state of the users store
const initialUsers = [];

// Create a writable store for users
export const usersStore = writable(initialUsers);

// Define the initial state of the users store
const initialProducts = [];

// Create a writable store for users
export const productsStore = writable(initialProducts);