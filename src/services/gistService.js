import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

// Get Public List
export const getPublicGists = () => octokit.gists.listPublic();

// Get List For User
export const getGistForUser = (username) =>
  octokit.gists.listForUser({ username });
