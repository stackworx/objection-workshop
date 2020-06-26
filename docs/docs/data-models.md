---
id: data-models
title: Data Models and Relations
---

A few notes about ORMs:

- Object relational mappers are used to represent data entities and their relations.
- They are the workhorses of your backend services, especially with CRUD.
- A manner of representing SQL-related processes in an object-oriented fashion.
- Helps to abstract complexity of SQL interfacing with the database.
- A double-edged sword.

### 1. Create objection classes for person and pet

An objection class representing a standalone person has been created (see below)

```typescript
export class Person extends Model {
  // every column (property) in the table should be typed
  id!: number;
  name!: string;
  age!: number;
  surname!: string;
  pets: Array<Pet>;

  static get tableName() {
    return 'person';
  }

  static get relationMappings() {
    return {
      name: {
        relation: Model.HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'person.id',
          //knexSnakeCaseMappers plugin enables snakecase
          to: 'pet.personId',
        },
      },
    };
  }
}
```

- Create another file for `Pet` and specify a Pet's relation to it's owner.
- Create another class representing a pet (you can do it in the same file to spend less time importing).
- Set up the pets relation for the user class by specifying `relationMappings`.

#### Notes

- Not all relations have to be explicitly declared. If you only cared about querying the pets of specific owners (and not the owner of pets, declaring the `Pet to Owner` relation would not have been necessary).
- Objection automatically assumes the name of your table is the name of your class, unless indicated otherwise.
- Relations can be singular, plural, defined, or undefined depending on the relationships.
- Objection is (mostly) smart enough to tell you when you've specified the wrong types of relationships, but this is can be a likely bug source.
- This page always comes in handy when specifying relations between objection classes.
- Types of all relations have to be added to the top of the class.

#### References

- https://vincit.github.io/objection.js/
- http://blogs.tedneward.com/post/the-vietnam-of-computer-science/
