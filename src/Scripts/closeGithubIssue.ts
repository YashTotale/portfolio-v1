import { Octokit } from "@octokit/rest";
import yargs from "yargs/yargs";

const args = yargs(process.argv.slice(2))
  .options({
    t: { type: "string", alias: "token", demandOption: true },
  })
  .parse();

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
    console.log("Issue has been closed");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

closeGithubIssue(args.t);
