const path = require('path');
const appPackage = require('../package.json');
const { runApp } = require('./scaffoldKit');

runApp({
  appName: 'Amur',
  description: appPackage.description,
  version: appPackage.version,
  rcFile: '.amurrc.json',
  appLevelCommandLineOptions: {
    forceCwd: {
      type: 'boolean',
      default: false,
      description: 'force generating to current directory.',
      saveToPreference: false
    },
    orm: {
      type: 'string',
      default: 'mongoose',
      description: 'the ORM to use.',
      saveToPreference: true,
      behavioral: 'orm'
    },
    overwrite: {
      type: 'boolean',
      default: false,
      description: 'whether overwrite existing file.',
      saveToPreference: false
    },
    'mockInstall': {
      type: 'boolean',
      default: false,
      description: 'update dependency list without installing.',
      saveToPreference: false
    }
  },
  commandsMap: {
    'app': path.join(__dirname, './commands/app'),
    'resource': path.join(__dirname, './commands/resource'),
    'nestable': path.join(__dirname, './commands/nestable'),
    'uploader': path.join(__dirname, './commands/uploader'),
    'destroy': path.join(__dirname, './commands/destroy'),
    'model': path.join(__dirname, './commands/model'),
    'schema': path.join(__dirname, './commands/schema'),
    'resolver': path.join(__dirname, './commands/resolver')
  },
  behaviorsMap: {
    'orm': {
      name: 'Supported ORMs',
      description: 'The ORM to be used in the project.',
      defaultFrom: 'orm',
      items: {
        'mongoose': {
          name: 'mongoose',
          description: 'The mongoose ODM.',
          extraOptions: {
            primaryKey: {
              type: 'string',
              default: '_id',
              description: 'the primary key of data model.',
              saveToPreference: true
            },
            polymorphicReference: {
              type: 'boolean',
              default: true,
              description: 'whether use same field name for reference and nesting object.',
              saveToPreference: true
            }
          }
        },
        'sequelize': {
          name: 'sequelize',
          description: 'The sequelize ORM.',
          extraOptions: {
            primaryKey: {
              type: 'string',
              default: 'id',
              description: 'the primary key of data model.',
              saveToPreference: true
            },
            polymorphicReference: {
              type: 'boolean',
              default: true,
              description: 'whether use same field name for reference and nesting object.',
              saveToPreference: true
            },
            adaptor: {
              type: 'string',
              default: 'postgres',
              description: 'which sequelize adaptor to use',
              saveToPreference: true
            }
          }
        }
      }
    }
  }
}, process.argv);