import 'reflect-metadata'
import { install } from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

install({ handleUncaughtExceptions: false })

new Ignitor(__dirname)
  .httpServer()
  .start()
  .catch(console.error)
