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

  resolveProfilesByName(firstName) {
    try {
      const profiles = this.profiles.filter(p => p.firstName.toUpperCase() === firstName.toUpperCase());
      return { results: profiles };
    } catch (error) {
      throw error
    }
  }

  resolveProfilesByDocNumber(docNumber) {
    try {
      const profiles = this.profiles.filter(p => p.docNumber === docNumber);
      return { results: profiles };
    } catch (error) {
      throw error
    }
  }

  resolveProfilesByCreatedAt(createdAt) {
    try {

      // console.l
      console.log(this.profiles[0]);

      const profiles = this.profiles.filter(p => p.createdAt.toString() === createdAt.toString());
      return { results: profiles };
    } catch (error) {
      throw error
    }
  }

}

const profileController = new PROFILE();

export default profileController;