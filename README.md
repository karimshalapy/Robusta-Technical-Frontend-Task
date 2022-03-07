# Robusta Technical Frontend Task<!-- omit in toc -->

This is my solution for the Robusta's technical frontend task.  

## Table of Content <!-- omit in toc -->

- [1. Technologies Used](#1-technologies-used)
- [2. My Comments](#2-my-comments)
- [3. Git Message Style](#3-git-message-style)
  - [3.1. Message Structure](#31-message-structure)
    - [3.1.1. The Type](#311-the-type)
    - [3.1.2. The Subject](#312-the-subject)
    - [3.1.3. The Body](#313-the-body)

## 1. Technologies Used

- [TypeScript](https://www.typescriptlang.org/): I used TypeScript over JavaScript because of all the extra features in typescripts, but specially the types because it helps me prevent errors before even compiling. I also personally prefer TypeScript over JavaScript in almost every case.
- [React](https://reactjs.org/): I used React because I was explicitly told to do the task in React nontheless I prefer React over other frameworks.
- [React Hook Forms](https://react-hook-form.com/): I used React Hook Forms to make it easier to validate the form inputs in the client-side. It could be replaced by keeping state of the input values and validating them manually. Even though I could do this without this the library it's a really well managed library that makes the code less bloated and easier to manage.

## 2. My Comments

- I did not invest time into animating the UI enough because of the limited time provided, and it was not asked.
- I used regex to validate the user's inputs. My regex skills are moderate and I could recreate some of the regex expressions used, that being said all the regex expressions are from various sources from the internet but mostly from [stackoverflow](https://stackoverflow.com/)
- The task instructions said that there are bonus points if it was done without a framework, I could do that but I refrained from doing because I was told to do it in React.

## 3. Git Message Style

I tried following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as best as I can. I learnt about it from  [Udacity's style guide](https://udacity.github.io/git-styleguide/) which was enforced in their nanodegree.

### 3.1. Message Structure

A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

```git
type: subject

body
```

#### 3.1.1. The Type

The type is contained within the title and can be one of these types:

- **feat:** a new feature
- **fix:** a bug fix
- **docs:** changes to documentation
- **style:** formatting, missing semi colons, etc; no code change
- **refactor:** refactoring production code
- **test:** adding tests, refactoring test; no production code change
- **chore:** updating build tasks, package manager configs, etc; no production code change

#### 3.1.2. The Subject

Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period.

Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

#### 3.1.3. The Body

Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.

When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.
