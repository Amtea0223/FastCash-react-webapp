const DB_NAME = "fastcashcms"

// basic application setting
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://fastcashtech2023:<password>@cluster1.4mqatu6.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("fastcashcms").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const setting = {
  env: "localhost",
  domain: process.env.DOMAIN || "http://localhost:3000",
  appName: "Fastcash",
  cookieSecret:
    "u#G9vmhTw2EDm8_=+NZ=G+7#KjzUsu2-Dz-G5ybhdCNLj#@vfG2gjtX7pY@7afw$Dk&d4DDEsCv__dr+QZaV$8nY&AmekRexy%ZLaaFwumzMz_mqwgM^^5!Fm+8KV_-m",
  dbName: DB_NAME,
  dev: true,
  port: process.env.PORT || 3000,
  adapter: {
    // mongoUri: process.env.MONGO_URL || `mongodb://localhost/${DB_NAME}`,
    mongoUri:
      "mongodb+srv://letsgoadmin:Letsgo2022@cluster0.9x6bdu6.mongodb.net/letsgocms?retryWrites=true&w=majority",
      // "mongodb+srv://fastcashtech2023:fastcash2023@cluster1.4mqatu6.mongodb.net/fastcashcms?retryWrites=true&w=majority",
  },
  staticPath: "/file",
  uploadPath: "public",
  path: {
    cms: {
      src: "./public/uploads/cms",
      path: "/file/uploads/cms",
    },
  },
}

const developmentSetting = {
  ...setting,
  env: "development",
  domain: "http://34.125.26.126/",
}

const betaSetting = {
  ...setting,
  env: "beta",
  dev: false,
  domain: "http://34.125.26.126/",
}

const uatSetting = {
  ...setting,
  env: "uat",
  dev: false,
  domain: "http://34.125.26.126/",
}

const productionSetting = {
  ...setting,
  env: "production",
  dev: false,
  domain: "https://34.125.26.126/",
  // domain: "https://backend.rmloan.com.hk/",
}

let config
const {
  env: { NODE_ENV },
} = process
switch (NODE_ENV) {
  case "development":
    config = developmentSetting
    break
  case "beta":
    config = betaSetting
    break
  case "production":
    config = productionSetting
    break
  case "uat":
    config = uatSetting
    break
  default:
    config = setting
}

module.exports = config
