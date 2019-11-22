import { FormControl } from '@angular/forms';

// This woud come from an external service prob. Ill just hardcoded since its about the concept
export const DB_OF_BAD_WORDS = ['fuck', 'joder'];

export function invalidWordValidator(control: FormControl) {
  let query = control.value;
  if (DB_OF_BAD_WORDS.includes(query)) {
      return {
        badWords: true
      }
  }
  return null;
}
