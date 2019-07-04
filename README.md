[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dbmedialab/shiny)](https://dependabot.com)
[![Travis badge](https://api.travis-ci.org/dbmedialab/shiny.svg?branch=master)](https://travis-ci.org/dbmedialab/shiny)
[![install size](https://packagephobia.now.sh/badge?p=@aller/shiny)](https://packagephobia.now.sh/result?p=@aller/shiny)

_Ev'rythings shiny, cap'n, not to fret!_
# Shiny

Shiny components for your React application. Check out the [storybook](https://dbmedialab.github.com/shiny/)!

In Aller Media, we use shiny as part of a four-layered frontend system:
  1. **[shiny](https://github.com/dbmedialab/shiny) (dumb frontend components): Makes stuff look good**
  1. wolverine-frontend (smart web app): Translates from what something *is* to what it should *look like*; handles state; renders pages
  1. wolverine-api (smart API layer): Decides what we should display to the user; composes pages
  1. wolverine-fetcher (dumb API layer): Fetches data from backend systems
  
## Releasing
### Primary way ([np](https://github.com/sindresorhus/np))
1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide

### Alternate way (vanilla)
(After you have merged you changes into master)

1. Get the latest version, and checkout a release branch for npm work. The release branch is necessary because the master branch is protected.
```sh
# Replace x.x.x with your new version number
git checkout master && git pull && yarn && git checkout -b release/x.x.x
```
2. Publish it! Yarn will prompt you to for a new version number. Until we have reached 1.0.0, breaking changes or new features should trigger a minor version bump, while bug fixes should trigger a patch version bump. In other words: Don't inadvertently release 1.0.0!
```sh
yarn publish
```
3. yarn publish will have created a commit with your new version number, and tagged your release in git for you. Push both the commit and the tagged release to GitHub.
```sh
git push --tags -u origin release/x.x.x
```

4. Create and merge a pull request for the branch

5. Add release notes by opening the visiting [Shiny's releases overview page](https://github.com/dbmedialab/shiny/releases)		 on GitHub, clicking your newly pushed release and then clicking the "Edit tag" button.

## Relation to Firefly (the TV series)
The name is very inspired!
