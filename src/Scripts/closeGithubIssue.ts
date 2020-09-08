import fetch from "node-fetch";

export const closeGithubIssue = async () => {
  const issueData = await getIssueData();
  if (issueData.state === "open") {
    changeIssueToClosed();
  }
};

async function getIssueData() {
  const response = await fetch(
    "https://api.github.com/repos/YashTotale/YashTotale.github.io/issues/4",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token 4a8fc32f0e02c0961414e8f1f443b46d42f1f383",
      },
    }
  );
  return response.json();
}

async function changeIssueToClosed() {
  const body = {
    state: "closed",
  };

  fetch(
    "https://api.github.com/repos/YashTotale/YashTotale.github.io/issues/4",
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Authorization: "token 4a8fc32f0e02c0961414e8f1f443b46d42f1f383",
      },
    }
  );
}
