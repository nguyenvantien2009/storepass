#!/usr/bin/env node

require('yargs')
  .scriptName("pass")
  .usage('$0 <cmd> [args]')
  .command('search [searchKey]', 'Search account with regex.', (yargs) => {
    yargs.positional('searchKey', {
      type: 'string',
      describe: 'keyword with regex.'
    })
  }, function (argv) {
    const keys = argv.searchKey.toLowerCase();
    console.log('hello', keys, 'welcome to yargs!');
  })
  .help()
  .argv
