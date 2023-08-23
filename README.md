<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Nest CLI

**Command Umum :**
new (bisa disingkat jadi n saja)
generate (bisa di singkat jadi g saja)
Selengkapnya bisa cek di cli usages

```
$ nest n namaprojek
$ nest g mo namamodule (otomatis generate module)
$ nest g co namacontroller (otomatis generate controller)
$ nest g s nama service (otomatis generate service)

```

Setelah kita membuat fungsi/logic di service, kita **Inject Service** nya ke Controller, contoh :

"**getLatihan()**"

Maka kita buat juga **getLatihan** di **Controller** nya (dengan catatan disini si service yang bakal nge return).

## Service Provider

Service provider digunakan agar class yang dimasukan dalam service provifes bisa di inject melalui constructor class lain, tanpa perlu membuat Object.

Service provider berfungsi untuk menampung service-service atau class-class supaya bisa digunakan menggunakan Dependency Injection.

## Create API

Kita bisa tambahkan Fungsi Create pada Service dan Controller dengan method POST, lalu panggil dari controller:

**task.service.ts**
```
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    async createTask(){
        return 'Membuat Tugas baru dari Ayana';
    }
}
```

Kita pakai fitur async di atas.

**ts.controller.ts**
```
import { Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService){}

    @Post()
    async createTask(){
        return await this.taskService.createTask;
    }
}

```

Kita pakai method asyn dan await di atas, lalu pakai Decorator **@Post()**, lalu bisa di test di Postman untuk method POST nya.

Karena disini route nya adalah task, maka kita bisa test POST terus localhost:3000/task

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

**Open Localhost:**
```
localhost:3000/
localhost:3000/hello2
localhost:3000/latihan
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
