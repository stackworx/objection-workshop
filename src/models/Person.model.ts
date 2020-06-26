import { Model } from 'objection';

export class Person extends Model {
  // every column (property) in the table should be typed
  id!: number
  name!: string;
  age!: number
  surname!: string;
  // but their relations to other entities as well
  pets: any
  //TODO: add type pet relation type

  static get tableName() {
    return 'person';
  }

  static get relationMappings() {
    return {
      name: {
        relation: Model.HasManyRelation,
        modelClass: Person,
        join: {
          from: 'person.id',
          to: 'person.parentId',
        },
      },
    };
  }
}

//footnote: valuable builtinmethods can handle important checks autonomously without having to deal with it everywhere
