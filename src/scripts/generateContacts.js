import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    await writeContacts(newContacts);
    return newContacts;
  } catch (error) {
    console.log('error: ', error.message);
  }
};

generateContacts(5);
