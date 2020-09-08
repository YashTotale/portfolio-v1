import fetch from "node-fetch";

const args = process.argv;

if (args.length < 3) {
  console.log("Please provide a GitHub OAuth Token");
  process.exit(1);
}

export const closeGithubIssue = async (githubToken: string) => {
  const issueData = await getIssueData(githubToken);
  if (issueData.state === "open") {
    changeIssueToClosed(githubToken);
  }
};

async function getIssueData(githubToken: string) {
  const response = await fetch(
    "https://api.github.com/repos/YashTotale/YashTotale.github.io/issues/4",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${githubToken}`,
      },
    }
  );
  return response.json();
}

async function changeIssueToClosed(githubToken: string) {
  const body = {
    state: "closed",
  };

  fetch(
    "https://api.github.com/repos/YashTotale/YashTotale.github.io/issues/4",
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );
}

closeGithubIssue(args[2]);
