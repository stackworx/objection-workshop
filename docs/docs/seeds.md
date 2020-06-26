---
id: seeds
title: Adding seeds
---

As a developer, you'll need seeds to test out your components. This is a perfect chance to test out your new PersonService static methods.

## 1. Create development seed file (completed)

- In `src/seeds/dev` run the following command:

  `npx knex seed:make init -x ts`

  `init.ts` should contain the following

```typescript
n;
```

## 2. Add contents

- Import and use the `UserService.create()` function to create a user with two pets
- `console.log()` the created Person object
