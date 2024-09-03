require("dotenv").config();
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  CLAIM_FRIENDS_REWARD: process.env.CLAIM_FRIENDS_REWARD
    ? process.env.CLAIM_FRIENDS_REWARD.toLowerCase() === "true"
    : true,

  AUTO_FARMING: process.env.AUTO_FARMING
    ? process.env.AUTO_FARMING.toLowerCase() === "true"
    : true,

  AUTO_DAILY_QUIZ: process.env.AUTO_DAILY_QUIZ
    ? process.env.AUTO_DAILY_QUIZ.toLowerCase() === "true"
    : true,

  SLEEP_BETWEEN_REQUESTS: process.env.SLEEP_BETWEEN_REQUESTS
    ? process.env.SLEEP_BETWEEN_REQUESTS.split(",").map((str) =>
        parseInt(str.trim())
      )
    : 70,

  USE_PROXY_FROM_FILE: process.env.USE_PROXY_FROM_FILE
    ? process.env.USE_PROXY_FROM_FILE.toLowerCase() === "true"
    : false,

  USE_QUERY_ID: process.env.USE_QUERY_ID
    ? process.env.USE_QUERY_ID.toLowerCase() === "true"
    : false,
};

module.exports = settings;
