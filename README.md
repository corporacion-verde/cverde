# Dockerized DjangoRest React project template
Template repository for dockerized Django Rest API with React client. The main idea of this template is to have a quickstart and begin developins as fast as posible. Enjoy!

## Project structure
```
|
+-> backend: main folder of the Api
|
+-> frontend: main folder of the React client
```

## Commits policy
This repository uses semantic commits in order to keep it easy to read and update.

Format:  `<type>(<scope>): <subject>`

`<scope>` is optional


### Example
```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)


Because the client and api are stored in the same repository it`s better if you follow this suggestions when uploading changes.

## Initial commands
To create the project the following commands were run:

###  Backend
```bash
docker build -t backend:latest backend
docker run -v $PWD/backend:/app/backend backend:latest django-admin startproject api .
```

###  Frontend
```bash
docker build -t frontend:latest frontend
docker run -v $PWD/frontend:/app/frontend frontend:latest npx create-react-app client
mv frontend/client/* frontend/client/.gitignore frontend/ && rmdir frontend/client
```

## Getting started
First copy and rename `secrets-example.json` to `secrets.json` and fill the credentials.

Then type the following commands to achieve a fresh start. The docker-compose file initialize 3 services, the database (postgres), the backend (DjangoRest) and the frontend (React).

```bash
docker-compose build --no-cache
docker-compose up
```

Then you can open localhost:3000 to check the client and localhost:8000 for the api.

# References
- [C. Franklin. Creating an app with Docker Compose, Django, and Create React App](https://dev.to/englishcraig/creating-an-app-with-docker-compose-django-and-create-react-app-31lf)