import faker from 'faker';

faker.locale = 'es';

export const defaultProfile = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    docNumber: faker.random.number({ min: 1000000, max: 9999999 }),
    location: faker.address.city(),
    career: faker.name.jobType(),
    experience: [
        {
            enterprise: faker.company.companyName(),
            start: faker.date.past(),
            end: faker.date.future()
        },
        {
            enterprise: faker.company.companyName(),
            start: faker.date.past(),
            end: faker.date.future()
        },
        {
            enterprise: faker.company.companyName(),
            start: faker.date.past(),
            end: faker.date.future()
        }
    ],
    education: [
        {
            career: faker.name.jobTitle(),
            studyCenter: faker.address.county()
        }
    ],
    createdBy: faker.name.findName(),
    updatedAt: faker.date.recent(),
    createdAt: faker.date.recent()
}