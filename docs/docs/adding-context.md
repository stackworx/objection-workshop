---
id: adding-context
title: Adding Context
---

In any application we often want to add _context_ to database operations operations (for auditing purposes, for instance). We can pass typed contexts to our ORM objects which can in turn help perform tedious tasks we don't want to do behind the scenes, such as adding the id of the creator of new database entries, or keeping track of who changed entries.
