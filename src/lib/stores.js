import { writable } from "svelte/store";

export const challenge = writable('');
export const community = writable('');

export const calling = writable(0);
export const belonging = writable(0);
export const hope = writable(0);
export const power = writable(0);

export const powerList = writable('');
export const powerWants = writable('');
export const powerPeople = writable('');
export const powerUnique = writable('');

export const showResults = writable(false);

export function reset() {
  challenge.set('');
  community.set('');
  calling.set(0);
  belonging.set(0);
  hope.set(0);
  power.set(0);
  showResults.set(false);
}
