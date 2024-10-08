---
authorname: Aysegul Karadan

title: "Relation public.profiles does not exist supabase  "
img: /img/supabase/supabase.png
date: 2023-09-29
description: "Discover how to troubleshoot the 'Database error saving new user', 'Failed to invite user: failed to make invite request: Database error saving new user'  or 'relation public.profiles does not exist supabase' error in Supabase. "
head:
  meta:
    - name: "keywords"
      content: "Nuxt3, Supabase, Nuxt.js, Database error saving new user, Failed to invite user, failed to make invite request, Database error saving new user, relation public.profiles does not exist, Supabase troubleshooting, Supabase SQL editor, User management in Supabase, Relation errors in Supabase, Supabase database issues, Supabase error handling, Nuxt3 integration with Supabase, Supabase user authentication, Supabase schema issues, Supabase relational database, Nuxt.js Supabase integration, Supabase error messages, Supabase database management, Supabase configuration errors, Supabase table not found, Supabase profile management, Supabase SQL queries, Supabase API errors, Supabase user invites, Supabase error debugging, Nuxt3 and Supabase user management, Supabase connection issues, Supabase relational errors, Supabase database setup, Supabase project configuration, Nuxt.js and Supabase troubleshooting, Supabase data storage, Supabase authentication errors, Supabase table schema, Supabase data integrity, Supabase development tools, Supabase SQL troubleshooting, Nuxt3 Supabase integration issues, Supabase user role management, Supabase relation troubleshooting, Supabase error logs, Supabase API integration, Supabase invite request failure, Supabase database connection errors, Supabase relational database errors, Supabase and Nuxt3 setup, Supabase user management issues, Supabase schema migration, Supabase data saving errors, Supabase invite request issues, Supabase relational schema, Supabase configuration troubleshooting, Supabase SQL syntax errors, Nuxt3 and Supabase data handling, Supabase error reporting, Supabase table relationship errors, Supabase database queries, Supabase development errors, Nuxt3 database integration, Supabase invite user error, Supabase user database issues, Supabase data consistency issues, Supabase table management, Supabase relation issues resolution, Supabase data access errors, Supabase troubleshooting guide, Supabase SQL management, Supabase project errors, Supabase and Nuxt3 configuration, Supabase error solutions"



    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/database-error-saving-new-usersupabase
---

# Troubleshooting the "Database error saving new user" in Supabase

Discover how to troubleshoot the 'Database error saving new user', 'Failed to invite user: failed to make invite request: Database error saving new user' or 'relation public.profiles does not exist supabase' error in Supabase. Our step-by-step guide helps you pinpoint the issue, review SQL code, and resolve conflicts. Perfect for developers looking to overcome this common challenge.

<h2>Step 1: Review Supabase Logs</h2>

To identify the cause of the error in Supabase, follow these steps:

1. Log in to your Supabase account.
2. Access the "Logs" section.
3. Click on the "Auth" category.
4. In the "Auth" logs, filter by "severity."
5. Look for the error message related to the missing relation.

This step will help you pinpoint the specific error message and its context.

<div class="flex gap-4 flex-wrap">   <img src="/img/supabase/supabase.png" width="400" height="400">
  <img src="/img/supabase/supabase2.png" width="400" height="400">
</div>

In this case, i got error: 'relation public.profiles does not exist'

## Step 2: Examine SQL Editor

Inspect your SQL code in the Supabase SQL editor to ensure your User Manager Starter code or any related queries for creating the "profiles" table are correct:

1. Open the SQL editor in Supabase.
2. Execute the SQL code responsible for creating the "profiles" table.
3. Check for any warnings or errors.

If there are issues in your SQL code, this step will help you identify and address them.

## Step 3: Delete Problematic Functions

In certain cases, functions or triggers might conflict with your database setup. If you've identified issues related to functions like "handle_new_user, or create trigger on_auth_user_created" consider deleting them:

```
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

or run these new queries

```

DROP FUNCTION IF EXISTS public.handle_new_user();

```

```

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

```

By removing conflicting functions and triggers, you can resolve potential conflicts and retest your database setup.
After all steps I am able to create a new user and send links.

I hope this post will be helpul to you too.
Happy coding!

<br>
