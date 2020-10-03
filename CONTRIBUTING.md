# Contributing to Developer Community stats

We love contributions! We want to make contributing to this project as easy and friendly as possible, whether it's:

- Beginner PR requests
- Questions regarding any problems
- Submitting a fix
- Proposing new features
- Becoming a maintainer
- Suggestions and Feedbacks

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Contributing to Open issues and Challenges

The repository consists of Open issues encouraging beginners to take their first step to contribute to Open source. If you have any ideas regarding challenges, suggestions or feedback don't feel hesitant, create some issues.

When contributing to an issue be sure to read through the description and follow the steps and make sure all the builds in the PR succeed.

The most common contribution is adding yourself to `contributors.json`. See issue https://github.com/subeshb1/developer-community-stats/issues/8 on how to add your info and view your Github stats in https://developer-community-stats.netlify.app/.

## Contributing to Core Website

The core website is built with Gatsby, React and Github Graphql API. Follow the following steps to contribute to the website

```sh
# Fork the repo
https://github.com/subeshb1/developer-community-stats

# Clone your forked repo
$ git clone git@github.com:username/developer-community-stats.git

$ npm install

# Create a new branch for you.
$ git pull origin master # Pull the latest master
$ git checkout new-branch # Checkout to your new branch

# Start Gatsby mock server
ENV_TYPE=mock gatsby develop

# To start Gatsby server with github token and url expose the following variables
GITHUB_GRAPHQL_URL=<github_graphql_url>
GITHUB_TOKEN=<your_personal_access_token>

# Run tests
$ npm run test

# Commit the changes
$ git commit -m "Commit message"

# Push your changes and
$ git push

# Make a pull request of your newly changed branch
[https://github.com/subeshb1/developer-community-stats/compare](https://github.com/username/developer-community-stats/compare)
```
