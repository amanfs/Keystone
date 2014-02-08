Keystone
========

Framework for Keystone [Client];

This project is allowed to be run locally, so we don't need to push it up to a cluster, until it is ready for deployment.

Clone Instructions
========

1. Download `http://code.google.com/p/git-osx-installer`
2. Fire up `Terminal`. You'll feel like a hacker for it.
3. Run `git` hit enter, to see if it installed.
4. If you're good, run `git clone git@github.com:<username>/Keystone.git`
5. It should clone this to your whichever folder you picked. 
6. You've successfully cloned the application to your computer.


Build Installation
========

To start this build first we are going to need to set up Node

1. Go to `http://nodejs.org/`, and hit that `install` button.

Now once you've installed node, and you're computer has restarted, if prompted to. 

2. Fire up Terminal, you'll feel like a hacker for it, and run `npm install -g yo`

`npm is the package manager for Node.js and comes bundled with it.`

`Yo is maintained by the Yeoman project and offers web application scaffolding, utilizing scaffolding templates we refer to as generators. You typically install yo and any generators you think you might use via npm.`

3. Once that is installed we will need to run an additional command to install `grunt` and `bower`. Run `npm install -g grunt-cli bower`

4. After that lets throw an `angular-generator`. Run `npm install -g generator-angular`.

5. Lastly `cd` into your application and run `grunt server`. You'll see it run some processes and it should automatically open up your browser with the web application running. 






