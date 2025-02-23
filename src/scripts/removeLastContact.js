import * as fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) return console.log('Ніяких контактів не знайдено');

  const removeContacts = contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

  return removeContacts;
};

removeLastContact();
