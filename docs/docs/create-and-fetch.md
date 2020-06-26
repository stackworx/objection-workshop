---
id: create-and-fetch
title: Create and fetch services
---

Let's use this model we built to perform to basic operations on a `Person`. We'll create a PersonService class with stati methods to encompass this logic

### 1. Create

- Complete the create method to allow creation of a user, and two related pets by extending `Person.query()`

### 2. Fetch

- Complete the `fetchByName()` method to return a user, or otherwise return undefined
- Stretch goal: Modify the function to return the linked pets of a user

```typescript
import {Person} from '../models';

interface Pet {
  name: string;
}

export interface PersonCreateOptions {
  name: string;
  surname: string;
  age: number;
  pets?: Pet[];
}

// When making multiple calls dependent one one another, ensure you wrap in a transaction
export default class PersonService {
  public static async create({
    name,
    surname,
    age,
    pets,
  }: PersonCreateOptions): Promise<Person> {
    try {
      const newPerson = await Person.query();
      //complete
      return newPerson;
    } catch (ex) {
      throw new Error(ex);
    }
  }

  public static async fetchByName(name: string): Promise<Person | undefined> {
    const person = await User.knex();
    //complete;
  }
}
```
