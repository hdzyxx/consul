import { validatePresence, validateLength } from 'ember-changeset-validations/validators';
export default {
  Name: [validatePresence(true), validateLength({ min: 1 })],
  Rules: validatePresence(true),
};
