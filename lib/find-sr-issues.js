const ISSUE_ID = require('./definitions/sr-issue-id');

module.exports = async (github, title, owner, repo) => {
  const {
    data: {items: issues},
  } = await github.search.issues({
    q: `in:title+repo:${owner}/${repo}+type:issue+state:open+${title}`,
  });

  return issues.filter(issue => issue.body && issue.body.includes(ISSUE_ID));
};
