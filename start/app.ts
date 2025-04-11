/*
|--------------------------------------------------------------------------
| Application bootstrap
|--------------------------------------------------------------------------
|
| This file is used to boot the AdonisJS application and start the HTTP
| server. You should never modify this file.
|
*/

import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone'

new Ignitor(__dirname)
  .httpServer()
  .start()
  .catch(console.error)
