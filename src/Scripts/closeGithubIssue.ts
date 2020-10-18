import { Octokit } from "@octokit/rest";

const args = process.argv;

export const closeGithubIssue = async (githubToken: string) => {
  const octockit = new Octokit({
    auth: githubToken,
    userAgent: "YashTotale",
  });

  try {
    await octockit.issues.update({
      owner: "YashTotale",
      repo: "YashTotale.github.io",
      issue_number: 4,
      state: "closed",
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

if (args.length < 3) {
  console.log("Please provide a GitHub OAuth Token");
  process.exit(1);
}

closeGithubIssue(args[2]);
