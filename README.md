# epi-workspace

forked from https://github.com/PharmaLedger-IMI/epi-workspace/commit/6e1eea0c769b69c4da1fc08c10e86b029898eff8

## prerequisites for Mac OS
- `npm i node-gyp -g`
- `brew install gcc`
- `brew install zeromq`
- `brew install pkg-config`

## Description

*epi-workspace*  bundles all the necessary dependencies for building and running SSApps in a single package.

### Installation

In order to use the workspace, we need to follow a list of steps presented below. 

First, let's clone the workspace

```sh
$ git clone https://github.com/PharmaLedger-IMI/epi-workspace.git
```

After the repository was cloned, you must install all the dependencies.

```sh
$ cd epi-workspace
$ npm install
```

If you have trouble installing the *epi-workspace*, please try to follow the guide provided on [PrivateSky.xyz](https://privatesky.xyz/?Start/installation)

The last two commands you need to run in the *epi-workspace* 
```sh
$ npm run server
$ npm run build-all
```

For more details about a *workspace* check out the [template-workspace](https://github.com/PrivateSky/template-workspace).
