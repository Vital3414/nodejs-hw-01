import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const contacts = await fs.readFile(PATH_DB);
  return contacts ? JSON.parse(contacts) : [];
};
