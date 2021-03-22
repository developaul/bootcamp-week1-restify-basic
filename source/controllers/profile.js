import { generateProfiles } from '../utils';

class PROFILE {

  constructor() {
    this.profiles = generateProfiles(100);
  }

  resolveFullProfileById(id) {
    try {
      const profile = this.profiles.find(p => p.id === id);
      return profile;
    } catch (error) {
      throw error
    }
  }

  resolveBasicProfileById(id) {
    try {
      const profile = this.profiles.find(p => p.id === id);
      const { firstName, lastName, docNumber } = profile;

      return {
        firstName,
        lastName,
        docNumber
      }
    } catch (error) {
      throw error
    }
  }

  resolveInfoProfileById(id) {
    try {
      const profile = this.profiles.find(p => p.id === id);
      const { createdBy, createdAt, updatedAt } = profile;

      return {
        createdAt,
        createdBy,
        updatedAt
      }
    } catch (error) {
      throw error
    }
  }
}


const profileController = new PROFILE();

export default profileController;