#!/usr/bin/env node
import { createApp } from './server'

async function main() {
  // Configuration
  const target = process.env.TARGET ?? 'https://xdai.fairdatasociety.org'
  const port = process.env.PORT ?? '3149'

  // eslint-disable-next-line
  console.log('proxy config', { target, port })

  const app = createApp(target)

  // Start the Proxy
  app.listen(port, () => {
    // eslint-disable-next-line
    console.log(`starting gateway-proxy at ${port}`)
  })
}

main()
