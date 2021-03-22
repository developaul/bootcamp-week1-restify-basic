import { defaultProfile } from '../datasets/default';

class PROFILE {
  resolveProfile() {
    return defaultProfile
  }
  resolveFullProfile() {
    try {
      let updatedAt = new Date()
      const profile = this.resolveProfile()

      return {
        ...profile,
        updatedAt
      }
    } catch (error) {
      throw error
    }
  }

  resolveBasicProfile() {
    try {
      const profile = this.resolveProfile()
      const { firstName, lastName, docNumber } = profile

      return {
        firstName,
        lastName,
        docNumber
      }
    } catch (error) {
      throw error
    }
  }

  resolveInfoProfile() {
    try {
      const profile = this.resolveProfile()
      const { createdBy, createdAt, updatedAt } = profile

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

export default PROFILE;