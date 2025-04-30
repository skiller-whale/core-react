# Skiller Whale: Core React Exercises

This repository contains the exercise code for Skiller Whale's sessions on Core React.

To use this you'll need to be part of a live Skiller Whale coaching session, and have Docker installed on your computer.

Then:

- Copy your attendance ID for the session into the file called `attendance_id`.
- Run `docker compose up --build`.
  (Note: if you are familiar with Dev Containers, you can use that instead of docker compose.)
- Point your browser at http://localhost:3500.
  You should see a page with a banner saying, "Hello Whale! It looks like you're all set up."
- Open up the `src_js` or `src_ts` directory in your code editor of choice.
  When you edit and save any of the files in these directories, the local development server should reload automatically, and your coach should be able to see your changes.
- If you are using TypeScript and VSCode, you might find that the TypeScript highlighting for non-install dependencies is distracting.
  There are two options:
  - You can open a Dev Container and complete the exercises from there, where the dependencies will be installed.
    This means you won't need to have Node installed locally at all.
  - You can use Node and run `npm install` in the command line to install the various dependencies yourself.
