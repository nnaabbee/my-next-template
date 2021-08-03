const target = process.env.TARGET

console.info("Target:", target)
if (!target) throw new Error("Set TARGET at startup.")

const apiUrlMap = {
  local: "local向きのURL",
  docker: "docker向きのURL",
  dev: "dev向きのURL",
  stg: "stg向きのURL",
  prod: "prod向きのURL",
}

module.exports = {
  env: {
    target,
    apiUrl: apiUrlMap[target] || apiUrlMap.local,
  },
  reactStrictMode: true,
}
