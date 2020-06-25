
import { Person } from '../models'
// import { Transaction, } from 'objection'

interface Pet {
    name: string
}

export interface PersonCreateOptions {
    name: string;
    surname: string;
    age: number;
    pets?: Pet[]
}

// When making multiple calls dependent one one another, ensure you wrap in a transaction
export default class PersonService {
    public static async create({ name, surname, age, pets }: PersonCreateOptions): Promise<Person> {
        try {
            // Because our relations are well defined, objection is smart enough to handle id's for us
            const newPerson = await Person.query().insertGraphAndFetch({
                name,
                surname,
                age,
                // same name as relationMapping property
                pets
            });
            return newPerson
        } catch (ex) {
            throw new Error(ex)
        }
    }
}

//TODO non nullable 
//TODO basic context that we can pull through
//TODO transactions