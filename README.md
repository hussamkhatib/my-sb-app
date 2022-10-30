Example app with instructions for how to use [new-story](https://github.com/hussamkhatib/new-story)

### Initial steps

```bash
git clone https://github.com/hussamkhatib/my-sb-app.git


cd my-sb-app

yarn
```

### Install the Cli

```bash
# Using Yarn:
$ yarn global add new-story

# or, using NPM
$ npm i -g new-story
```

### Using the CLI

#### Creating the initial boilerplate stories

```bash
# Move to components dir, as we dont want to create stories for pages etc.
cd/src/components

new-story stories
# stories files will be generated for all the files inside components
```

#### Creating variants

```bash
# make sure you are at your root of the project


# Alert component
new-story story -f src/components/Alert/Alert.stories.tsx -p severity=error,warning,info,success

# Button Component
new-story story -f src/components/Button/Button.stories.tsx -p size=sm,md,lg

new-story story -f src/components/Button/Button.stories.tsx -p variant=primary,secondary

```
