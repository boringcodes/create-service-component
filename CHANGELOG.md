# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.9.1](https://github.com/boringcodes/create-service-component/compare/v1.9.0...v1.9.1) (2021-06-07)

## [1.9.0](https://github.com/boringcodes/create-service-component/compare/v1.8.0...v1.9.0) (2021-02-15)

### Features

- **generators:** create new app :with-postgres-prisma ([87952b8](https://github.com/boringcodes/create-service-component/commit/87952b820477d1b1ab14824cab1a68203d17b9ee))
- **generators/with-mongo:** pluralize RESOURCE const & model name ([13d017e](https://github.com/boringcodes/create-service-component/commit/13d017e5ce70e1d07b55024be987ad5e90d14591))
- **generators/with-postgres:** rename app to with-postgres-sequelize, pluralize model name & RESOURCE const ([2cd0c11](https://github.com/boringcodes/create-service-component/commit/2cd0c11a8d37840840c7769e8f909e43f5aadf03))
- **generators/with-postgres-prisma:** add pluralize module, pluralize RESOURCE const instead of hardcoded ([65f3224](https://github.com/boringcodes/create-service-component/commit/65f3224bdf01e30784c46be913418041d4e05322))
- **generators/with-postgres-typeorm:** add pluralize module, pluralize model name ([ff389c5](https://github.com/boringcodes/create-service-component/commit/ff389c567da9bb259d38a7099bcae7dd5b6b63a4))
- **generators/with-postgres-typeorm:** set comp interface name prop optional ([fe87de7](https://github.com/boringcodes/create-service-component/commit/fe87de7999327ffdcea9b303e4982b784e19cac7))

## [1.8.0](https://github.com/boringcodes/create-service-component/compare/v1.7.0...v1.8.0) (2021-02-14)

### Features

- **generators/with-mongo/templates:** change implementation of model creattion, get model from mongoose in repository for usage ([2a363d3](https://github.com/boringcodes/create-service-component/commit/2a363d3db1f25467ee8b98b328a3644f545495c4))
- **generators/with-postgres/templates:** change implementation of repository & model ([71bdf36](https://github.com/boringcodes/create-service-component/commit/71bdf3627d916c1e8d0c35af57db300d6b8af00e))
- **generators/with-postgres/templates:** refactor repository & model ([d7b33ee](https://github.com/boringcodes/create-service-component/commit/d7b33ee13e083d614fde50bddcc3c238010cc6c0))

## [1.7.0](https://github.com/boringcodes/create-service-component/compare/v1.6.0...v1.7.0) (2021-02-13)

### Features

- **generators:** create new app :with-postgres-typeorm ([391f4b3](https://github.com/boringcodes/create-service-component/commit/391f4b310be9caeee5d3961d2d34e32dca2771ce))
- **generators:** rename updatePartial to update & remove PUT update ([26e8d0d](https://github.com/boringcodes/create-service-component/commit/26e8d0d4a125a754471e0b95a863f8afabab6a7f))

## [1.6.0](https://github.com/boringcodes/create-service-component/compare/v1.5.0...v1.6.0) (2021-02-13)

### Features

- **generators:** create new app with-postgres ([bad9a93](https://github.com/boringcodes/create-service-component/commit/bad9a933b9839736f021ca5f25bdedf43e0ec0c9))
- **generators/with-mongo:** refactor type def in types, controller & repository ([7204334](https://github.com/boringcodes/create-service-component/commit/720433444c0e09d4220656d1b6f614e466f54621))

## [1.5.0](https://github.com/boringcodes/create-service-component/compare/v1.4.0...v1.5.0) (2021-02-12)

### Features

- **generators:** create new app :with-mongo ([c3d7697](https://github.com/boringcodes/create-service-component/commit/c3d7697d02fa7777747a8c91c15fd1f95e591500))
- **generators/app:** refactor template & add types.ts that contains entity type def ([cbb30cf](https://github.com/boringcodes/create-service-component/commit/cbb30cf87a1c5e8d6ed0bda8ec5853ed0aec7417))

## [1.4.0](https://github.com/boringcodes/create-service-component/compare/v1.3.1...v1.4.0) (2021-02-10)

### Features

- **lint-staged:** update glob pattern to ignore /templates dir ([ffc2b4b](https://github.com/boringcodes/create-service-component/commit/ffc2b4b46f72c3588f3e605094eeb62eb60dc2d6))

### Bug Fixes

- **templates:** eslint errors ([09d6c16](https://github.com/boringcodes/create-service-component/commit/09d6c16917c1cffbc3a8c77089ca655fc3816528))

### [1.3.1](https://github.com/boringcodes/create-service-component/compare/v1.3.0...v1.3.1) (2021-01-11)

## [1.3.0](https://github.com/boringcodes/create-service-component/compare/v1.2.0...v1.3.0) (2021-01-11)

### Features

- **templates:** update http-status-codes import ([371a224](https://github.com/boringcodes/create-service-component/commit/371a2244bc857371b16804d7cf9d563c672cf1e7))

## [1.2.0](https://github.com/boringcodes/create-service-component/compare/v1.1.1...v1.2.0) (2020-08-26)

### Features

- **generators:** simplify generator props using singular & plural comp name; replace NAME & PLURAL_NAME consts with ENTITY & RESOURCE; remove count api & rename patch api to updatePartial; refactor controller ([55d6b70](https://github.com/boringcodes/create-service-component/commit/55d6b700df9ca5e21e495c71782df8aa7c890868))

### [1.1.1](https://github.com/boringcodes/create-service-component/compare/v1.1.0...v1.1.1) (2020-03-28)

## [1.1.0](https://github.com/boringcodes/create-service-component/compare/v1.0.0...v1.1.0) (2020-03-26)

### Features

- **package:** add prettier & husky ([f6d31d8](https://github.com/boringcodes/create-service-component/commit/f6d31d8e17fd68f49908aad35ff0124acf951569))
- **template:** update controller create, patch & update ([7156a2c](https://github.com/boringcodes/create-service-component/commit/7156a2c25a604eed62ff9d29d7c4b335a5beca5b))

## 1.0.0 (2020-03-23)

### Features

- **close #1:** init source ([#2](https://github.com/boringcodes/create-service-component/issues/2)) ([224243e](https://github.com/boringcodes/create-service-component/commit/224243e3094769880b7a62d0677c9c56cffff064)), closes [#1](https://github.com/boringcodes/create-service-component/issues/1)
- **generator:** add change-case to generate correct component resource & dir names ([03f9a92](https://github.com/boringcodes/create-service-component/commit/03f9a927b37e5d8d2b5d8117c4bcb911879c59da))
