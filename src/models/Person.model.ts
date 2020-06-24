import {Model} from 'objection';

export class Person extends Model {
  firstName!: string;
  children!: Person[];

  static get tableName() {
    return 'person';
  }

  static get relationMappings() {
    return {
      children: {
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
