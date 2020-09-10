import ghpages from "gh-pages";
import { exec } from "child_process";

exec("npm run predeploy", (err, stdout) => {
  if (err) return console.log(err);
  console.log(stdout);
  ghpages.publish(
    "build",
    {
      message: "Auto-Deploy Script",
    },
    (err) => {
      if (err) return console.log(err);
    }
  );
});
