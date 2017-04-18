# fugit

`fugit` is a `git` wrapper that sorts options before arguments,
to avoid errors like `bad flag '-p' used after filename`.
It's basically the `git_flag_after_filename` rule from [thefuck],
but automatically applied, so you can just use it instead of `git`

See also:

* [git: Does not allow flags after filenames][bug]
* ["Hey, Git. If you know what it is & where it’s supposed to go…put it there for me?"][tweet]

[thefuck]: https://github.com/nvbn/thefuck
[bug]: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=621601
[tweet]: https://twitter.com/bitprophet/status/232901966383161345

## Installation

You can use [yarn] or [npm] to install `fugit`:

[yarn]: https://yarnpkg.com/en/docs/getting-started
[npm]: https://www.npmjs.com/get-npm

```bash
yarn global add fugit
# or
npm install --global fugit
```

## Usage

### One-off usage

Just use `fugit` instead of `git`:

```bash
# instead of
git log README.md -p
# which prints: fatal: bad flag '-p' used after filename

# do this
fugit log README.md -p
```

Or, if you use `git`, but see that annoying error, fix it by running:

```bash
fu!!
```

### `git` integration

To always use `fugit` instead of `git`, you can add the following to your `~/.bashrc`:

```bash
alias git='fugit'
```
