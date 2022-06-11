import express, { Application } from 'express'
import { createProxyMiddleware, Options } from 'http-proxy-middleware'

export const PROXY_ENDPOINTS = ['/*']
export const createApp = (target: string): Application => {
  const options: Options = {
    target,
    changeOrigin: true,
  }

  // Create Express Server
  const app = express()

  // Download file/collection/chunk proxy
  app.all(PROXY_ENDPOINTS, createProxyMiddleware(options))

  return app
}
