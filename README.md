

[![Greenkeeper badge](https://badges.greenkeeper.io/dbmedialab/shiny.svg)](https://greenkeeper.io/)

# Shiny

_Ev'rythings shiny, cap'n, not to fret!_

Shiny is a collection of dumb React components. Check out the [storybook](https://dbmedialab.github.com/shiny/)!

In Aller Media, we use shiny as part of a four-layered frontend system:
  1. **[shiny](https://github.com/dbmedialab/shiny) (dumb frontend components): Makes stuff look good**
  1. wolverine (smart web app): Translates from what something *is* to what it should *look like*; handles state; renders pages
  1. wolverine-api (smart API layer): Decides what we should display to the user; composes pages
  1. wolverine-fetcher (dumb API layer): Fetches data from backend systems

## Releasing
1. Get the latest version, and checkout a release branch for npm work. The release branch is necessary because the master branch is protected.
```
# Replace x.x.x with your new version number
git checkout master && git pull && yarn && git checkout -b release/x.x.x
```

1. Publish it! Yarn will prompt you to for a new version number. Until we have reached 1.0.0, breaking changes or new features should trigger a minor version bump, while bug fixes should trigger a patch version bump. In other words: Don't inadvertedly release 1.0.0!
```
yarn publish
```

1. yarn publish will have created a commit with your new version number, and tagged your release in git for you. Push both the commit and the tagged release to GitHub.
```
git push -u origin release/x.x.x
git push --tags
```

1. Create and merge a pull request for the branch

1. Add release notes:
https://github.com/dbmedialab/shiny/releases


## Relation to Firefly (the TV series)

The name is very inspired!
