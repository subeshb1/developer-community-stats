# 🚀 Developer Community stats

![Contributors](https://img.shields.io/github/contributors/subeshb1/developer-community-stats)
![Closed PR](https://img.shields.io/github/issues-pr-closed/subeshb1/developer-community-stats)
![Stars](https://img.shields.io/github/stars/subeshb1/developer-community-stats)
![License](https://img.shields.io/github/license/subeshb1/developer-community-stats)
![Issues](https://img.shields.io/github/issues/subeshb1/developer-community-stats)
![Forks](https://img.shields.io/github/forks/subeshb1/developer-community-stats)
![Contributor Country](https://img.shields.io/badge/ContributorsCountry-25%2B-red)
![main-push-deploy-action](https://github.com/subeshb1/developer-community-stats/workflows/main-push-deploy-action/badge.svg)


A repository to encourage beginners to contribute to open source and for all contributors to view their Github stats.

![stats](./stats.png)

## Contributing to Developer Community stats

### Contributing to Open issues and Challenges

The repository consists of Open issues encouraging beginners to take their first step to contribute to Open source. If you have any ideas regarding challenges, suggestions or feedback don't feel hesitant, create some issues.

When contributing to an issue be sure to read through the description and follow the steps and make sure all the builds in the PR succeed.

The most common contribution is adding yourself to `contributors.json`. See issue https://github.com/subeshb1/developer-community-stats/issues/8 on how to add your info and view your Github stats in https://developer-community-stats.netlify.app/.

### Contributing to Core Website

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

### Have some Suggestions or a new Idea?

Add your idea/suggestion in the `IDEAS.md` file.

## License

[MIT](https://github.com/subeshb1/developer-community-stats/blob/main/LICENSE)


## Contributors
<a href="https://github.com/subeshb1/developer-community-stats/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=subeshb1/developer-community-stats" />
</a>
