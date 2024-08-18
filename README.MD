# uttcg-s2-2

2nd attempt , at this , doing it back in codesandbox, because of the files are having trouble working in stackblitz

# urtcgs2

> When you made a repo with `urtcgs2` andworking with codesandbox , some bastardfucker was added as a contributor so deleting that and just adding thsi readme because it has shits. Also dont use condesandbox, too complicated use stacblitzzz which is easier

# Regarding CodeSandB0x Setup

1. When you first start the devbox , you have to setup the repo it must connect to

## Find out the remote

```sh
git remote -v
```

Sample output

```sh
origin  https://github.com/kachraz/urtcgs2 (fetch)
origin  https://github.com/kachraz/urtcgs2 (push)
```

- This shows that remote is set

This is an example when it is not set

```sh
origin  /persisted/.git (fetch)
origin  /persisted/.git (push)
```

At this point you have to set the remote

## Setting the remote

Syntax

```sh
git remote set-url origin https://github.com/kachraz/urtcgs2
```

- `url` after the origin is what you need to set
- Now it is setup then run `git remote -v ` again.
- After conformation do pushes

## Commit and Push

```sh
git add .
git commit -m "SmellPanty"
git push
```

```sh

```

# RegardingThisProject

1. This is running on codesandbox for js learning shita
2. Overall this is a pain in the ass, and not as good as stackblitz

## Restarting Server

```sh
pnpm start
```

- This uses pnpm as pkgmanager

# update

`Sun Aug 18 01:19:32 AM UTC 2024`

- This date restarted after break of 10 days or so
