import { getLatestVersion } from "./api/fetchData";

export const VERSION = await getLatestVersion();
