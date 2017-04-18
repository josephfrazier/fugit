#!/usr/bin/env node

const cp = require('child_process')
const stableSort = require('stable')

const command = process.argv[2]
const commandArray = command ? [command] : []

const args = process.argv.slice(3)
const shouldSwap = (a, b) => !a.startsWith('-') && b.startsWith('-')
const sortedArgs = stableSort(args, shouldSwap)

const { status } = cp.spawnSync('git', commandArray.concat(sortedArgs), {
  stdio: 'inherit'
})

process.exit(status)
