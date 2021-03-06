Package.describe({
  name: 'andi:session-augumented',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds a few usefull methods on the Session object',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andi-bute/session-augumented.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('minimongo');
  api.use('mongo');
  api.use('session');
  api.addFiles('andi:session-augumented.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('andi:session-augumented');
  api.addFiles('andi:session-augumented-tests.js', 'client');
});
