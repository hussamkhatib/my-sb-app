This is an example app with instructions for how to use [new-story](https://github.com/hussamkhatib/new-story) cli.

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

### Screenshots

#### Alert Component Stories

![Alert](https://user-images.githubusercontent.com/52914487/198865915-b4891bb4-1350-4c28-823e-dfafa7114065.png)

#### Button Component Stories

![Button](https://user-images.githubusercontent.com/52914487/198865917-211dd224-7b46-4a64-8009-1d130e6e9438.png)

