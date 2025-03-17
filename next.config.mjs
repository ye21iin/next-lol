/** @type {import('next').NextConfig} */

async function getLatestVersion() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
  );
  const versions = await res.json();
  return versions[0];
}

const version = await getLatestVersion();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_VERSION: version,
  },
};

export default nextConfig;
