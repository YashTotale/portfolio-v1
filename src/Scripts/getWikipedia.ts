import wiki from "wikijs";

export const getPageData = async (page: string) => {
  const pageObj = await wiki({
    //@ts-ignore
    headers: {
      "User-Agent": "my-script-name (https://my-script-link; my@email) wiki.js",
    },
  }).find(page);
  const summary = await pageObj.summary();
  const url = pageObj.url();
  return { summary, url };
};
