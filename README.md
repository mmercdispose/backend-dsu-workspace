# README

This DSU workspace is forked from `epi-workspace`: https://github.com/PharmaLedger-IMI/epi-workspace/commit/6e1eea0c769b69c4da1fc08c10e86b029898eff8

## prerequisites for Mac OS
- node@`12.14.0`
- `npm i node-gyp -g`
- `brew install gcc`
- `brew install zeromq`
- `brew install pkg-config`

## Description

*epi-workspace*  bundles all the necessary dependencies for building and running SSApps in a single package.

## Installation

1. `npm i`
2. `npm run server` and keep running
3. `npm run build-all`

If you have trouble installing the *epi-workspace*, please try to follow the guide provided on [PrivateSky.xyz](https://privatesky.xyz/?Start/installation)

For more details about a *workspace* check out the [template-workspace](https://github.com/PrivateSky/template-workspace).

## Dependency updates and management
Dependencies are added via `git subtree` (https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt) which is a technique to incorporate remote repositories into your (mono)repository with possiblity to futher work with them(pull new versions/commit and push new changes).

**list all git dependencies and their remotes which are the same as the root folder:**
```sh
# the git subtree unfortunatelly does not provide any command/interface for this
# you will have to use this having in mind that octopus dependencies might be only a subset of all remotes
git remote -v 
```


**pull the remote repo::**
```sh
$ git subtree pull --squash --prefix=${origin-is-dir}/ ${origin-is-dir} master
```

**push to the remote repo::**
```sh
$ git subtree push --prefix=${origin-is-dir}/ ${origin-is-dir} master
```


## Notes on creation of this monorepo

Install will add `octopus.json` git dependecies in following manner:
```sh
# add all unique remotes
for remote in arrayOfDependencies
  git remote add ${remote.dir} ${remote.gitrepoLink}

# physically clone each repository and integrate the history reference into the main workspace git with a commit, see `git log`
for remote in arrayOfDependencies
  git subtree add --squash --prefix=${remote.dir}/ ${remote.dir} master
```