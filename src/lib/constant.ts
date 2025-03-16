import { getLatestVersion } from "@/app/api/fetchData";

export const VERSION = await getLatestVersion();
