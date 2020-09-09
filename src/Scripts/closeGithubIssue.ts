import fetch from "node-fetch";

const args = process.argv;

export const closeGithubIssue = async (githubToken: string) => {
  const issueResponse = await getIssueData(githubToken);
  if (!issueResponse.ok) process.exit(1);

  const issueData = await issueResponse.json();

  if (issueData.state === "open") {
    const changeSuccess = await changeIssueToClosed(githubToken);
    if (changeSuccess) {
      console.log("Issue has been closed");
      process.exit(0);
    }
    process.exit(1);
  } else {
    console.log("Issue is already closed");
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
  return response;
}

async function changeIssueToClosed(githubToken: string) {
  const body = {
    state: "closed",
  };

  const response = await fetch(
    "https://api.github.com/repos/YashTotale/YashTotale.github.io/issues/4",
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );
  return response.status;
}

if (args.length < 3) {
  console.log("Please provide a GitHub OAuth Token");
  process.exit(1);
}

closeGithubIssue(args[2]);
