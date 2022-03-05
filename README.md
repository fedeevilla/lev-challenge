# Lev Challenge

_This project was developed with React, Typescript and Redux._

## Instructions 🚀

You should clone this repository using the following script:

```
git clone https://github.com/fedeevilla/lev-challenge.git
```

### Installation 🔧

Just run the following commands. It's easy!

```
npm install & npm run start
```

### Also, It has Cypress Tests

You should run this script and a new Cypress console will appear:

```
npm run test
```

![Screenshot](https://res.cloudinary.com/dml0ec1xe/image/upload/v1646418078/gxb7b1hwu5dhmhl9tx9u.png)

This is an example with all Tests Passed ✅ :

![Screenshot](https://res.cloudinary.com/dml0ec1xe/image/upload/v1646417893/j7zvdrn171nrdy5q1v8j.png)

Also, on every PR commit, a Github Action will run checking with theses tests the quality of the application:

![Screenshot](https://res.cloudinary.com/dml0ec1xe/image/upload/v1646417892/y4njmikhxycktwowughe.png)

### App State-preservation/restoration

I've added the possibility to save the Redux State into `localStorage`. So, if the user refreshes the page the data will be the same.

### Clean code

I've added Husky + Lint-staged flow, in order to keep safe our code. They check errors on pre-commit and pre-push events.

![Screenshot](https://res.cloudinary.com/dml0ec1xe/image/upload/v1646486266/pxtrkefcot52cxz5vfds.png)

## Deploy 📦

I've decided to use Netlify because it has a simple Installation and Configuration flow. Netlify allows us that on every commit into `main` a new deploy runs upgrading the Site page. Also it provides us Preview Deploys, like the followings:

- First-day work: https://deploy-preview-1--lev-challenge.netlify.app/
- Second-day work: https://deploy-preview-2--lev-challenge.netlify.app/
- Third-day work: https://deploy-preview-3--lev-challenge.netlify.app/
- Live demo on: https://lev-challenge.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b3fc7f9-5dc5-474b-9d76-fd9bbcfac191/deploy-status)](https://app.netlify.com/sites/lev-challenge/deploys)

## Build-with 🛠️

- React
- Typescript
- Redux
- Cypress
- ESLint
- Prettier

## Author ✒️

- **Federico Villa** - [fedeevilla](https://github.com/fedeevilla)
