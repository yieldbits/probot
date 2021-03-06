## [1.4.3](https://github.com/nestjs-shared/probot/compare/v1.4.2...v1.4.3) (2022-02-22)


### Bug Fixes

* **utils:** rename craeteOctokit to initOctokit ([948b717](https://github.com/nestjs-shared/probot/commit/948b717e70e7e270e3459774245936c300489ab1))

## [1.4.2](https://github.com/nestjs-shared/probot/compare/v1.4.1...v1.4.2) (2021-10-20)


### Bug Fixes

* **config:** set default github url ([c56c56e](https://github.com/nestjs-shared/probot/commit/c56c56eb552f3dafe7badbeda30452581378b93d))

## [1.4.1](https://github.com/nestjs-shared/probot/compare/v1.4.0...v1.4.1) (2021-10-20)


### Bug Fixes

* **types:** export Octokit from defaults ([bbe402d](https://github.com/nestjs-shared/probot/commit/bbe402d8f739c56906dbd48d0c4efcf166293b5c))

# [1.4.0](https://github.com/nestjs-shared/probot/compare/v1.3.1...v1.4.0) (2021-10-20)


### Features

* **octokit:** add ability to pass auth options ([6729375](https://github.com/nestjs-shared/probot/commit/67293752d3116a5ad7736bf7e36d8b6968b5d42e))

## [1.3.1](https://github.com/nestjs-shared/probot/compare/v1.3.0...v1.3.1) (2021-10-20)


### Bug Fixes

* **proxy:** start smee client on WEBHOOK_PROXY presence ([b77d42e](https://github.com/nestjs-shared/probot/commit/b77d42e4db21ad07a7e4f4177de9c6c36097a24b))

# [1.3.0](https://github.com/nestjs-shared/probot/compare/v1.2.3...v1.3.0) (2021-10-20)


### Features

* **octokit:** add utils to create probot, octokit, smee objects ([c4f4470](https://github.com/nestjs-shared/probot/commit/c4f447026d913b1e7b1c8957c30fabd50c23a229))

## [1.2.3](https://github.com/nestjs-shared/probot/compare/v1.2.2...v1.2.3) (2021-10-20)


### Bug Fixes

* **loadconfig:** add github.com as default for GH_URL ([21a504c](https://github.com/nestjs-shared/probot/commit/21a504cfc429d03e6166303be596d7c996656a22))

## [1.2.2](https://github.com/nestjs-shared/probot/compare/v1.2.1...v1.2.2) (2021-10-20)


### Bug Fixes

* **config:** revert config loader to defaults ([161a93e](https://github.com/nestjs-shared/probot/commit/161a93e6ea16a57111d8602cf0a32e22c39171e8))

## [1.2.1](https://github.com/nestjs-shared/probot/compare/v1.2.0...v1.2.1) (2021-10-19)


### Bug Fixes

* **config:** inject missing hook providers ([e0fc386](https://github.com/nestjs-shared/probot/commit/e0fc386cddb1308e0f305bf269e5fbfbe505ca60))

# [1.2.0](https://github.com/nestjs-shared/probot/compare/v1.1.1...v1.2.0) (2021-10-19)


### Features

* **config:** add option to load module as global ([bd52afd](https://github.com/nestjs-shared/probot/commit/bd52afde00a895fe70ba1d6d148801e376aac71a))

## [1.1.1](https://github.com/nestjs-shared/probot/compare/v1.1.0...v1.1.1) (2021-10-19)


### Bug Fixes

* **config:** add async config providers ([011e205](https://github.com/nestjs-shared/probot/commit/011e2053489bc2154b4c2faf3e6d199444a7b24c))

# [1.1.0](https://github.com/nestjs-shared/probot/compare/v1.0.0...v1.1.0) (2021-10-19)


### Features

* **lib:** add ability to pass config during init ([1c7f57e](https://github.com/nestjs-shared/probot/commit/1c7f57e74fb81117bf7de373e5d0d0934fe0c482))

# 1.0.0 (2021-10-03)


### Bug Fixes

* **ci:** build before release ([766837d](https://github.com/nestjs-shared/probot/commit/766837dceac7b8ef5901262beec0a21863b1dcf2))
* **publish:** change access to public ([fc4c0d6](https://github.com/nestjs-shared/probot/commit/fc4c0d6796a460343c422ac6174d418d5343cafc))
* **yarn:** setup release files for publish ([d705c25](https://github.com/nestjs-shared/probot/commit/d705c2567a5643040cdbb89676c0e7bae874ae41))


### Features

* **lib:** add hook decorators to receive github events ([22b3485](https://github.com/nestjs-shared/probot/commit/22b34856d380babc2d953a62a794d1e469ed324c))
* **probot:** add support for using smee client ([8aa207f](https://github.com/nestjs-shared/probot/commit/8aa207f808072a37f9bba639c172c688d970d063))
* **source:** add nestjs lib template ([af95339](https://github.com/nestjs-shared/probot/commit/af9533994ab6166f2ec7d9e898d53ba636cab92d))

# [1.0.0-alpha.6](https://github.com/nestjs-shared/probot/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2021-10-03)


### Features

* **probot:** add support for using smee client ([8aa207f](https://github.com/nestjs-shared/probot/commit/8aa207f808072a37f9bba639c172c688d970d063))

# [1.0.0-alpha.5](https://github.com/nestjs-shared/probot/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2021-10-03)


### Bug Fixes

* **ci:** build before release ([766837d](https://github.com/nestjs-shared/probot/commit/766837dceac7b8ef5901262beec0a21863b1dcf2))

# [1.0.0-alpha.4](https://github.com/nestjs-shared/probot/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2021-10-03)


### Features

* **lib:** add hook decorators to receive github events ([22b3485](https://github.com/nestjs-shared/probot/commit/22b34856d380babc2d953a62a794d1e469ed324c))

# [1.0.0-alpha.3](https://github.com/nestjs-shared/probot/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-10-03)


### Bug Fixes

* **publish:** change access to public ([fc4c0d6](https://github.com/nestjs-shared/probot/commit/fc4c0d6796a460343c422ac6174d418d5343cafc))

# [1.0.0-alpha.2](https://github.com/nestjs-shared/probot/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-10-03)


### Bug Fixes

* **yarn:** setup release files for publish ([d705c25](https://github.com/nestjs-shared/probot/commit/d705c2567a5643040cdbb89676c0e7bae874ae41))

# 1.0.0-alpha.1 (2021-10-03)


### Features

* **source:** add nestjs lib template ([af95339](https://github.com/nestjs-shared/probot/commit/af9533994ab6166f2ec7d9e898d53ba636cab92d))
