"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core3 = require("@keystone-6/core");

// schema.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");

// schema/Application.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var Application = (0, import_core.list)({
  fields: {
    name: (0, import_fields.text)(),
    phone: (0, import_fields.text)(),
    idCard: (0, import_fields.text)(),
    paymethod: (0, import_fields.text)(),
    reason: (0, import_fields.text)(),
    loanAmount: (0, import_fields.text)(),
    timestamp: (0, import_fields.timestamp)({
      ui: {
        createView: {
          fieldMode: ({ session: session2, context }) => "hidden"
        },
        itemView: {
          fieldMode: ({ session: session2, context, item }) => "hidden"
        }
      },
      hooks: {
        resolveInput: ({ operation }) => {
          if (operation == "update") {
            return new Date();
          }
        }
      }
    })
  },
  ui: {
    hideCreate: false,
    hideDelete: false,
    listView: {
      initialColumns: ["name", "phone", "idCard", "paymethod", "reason", "loanAmount", "timestamp"],
      initialSort: {
        field: "timestamp",
        direction: "DESC"
      }
    }
  },
  access: {
    operation: {
      query: import_access.allowAll,
      create: import_access.allowAll,
      update: import_access.allowAll,
      delete: import_access.allowAll
    }
  }
});

// schema.ts
var lists = {
  User: (0, import_core2.list)({
    access: import_access2.allowAll,
    fields: {
      name: (0, import_fields2.text)({ validation: { isRequired: true } }),
      email: (0, import_fields2.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields2.password)({ validation: { isRequired: true } }),
      posts: (0, import_fields2.relationship)({ ref: "Post.author", many: true }),
      createdAt: (0, import_fields2.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Application,
  Post: (0, import_core2.list)({
    access: import_access2.allowAll,
    fields: {
      title: (0, import_fields2.text)({ validation: { isRequired: true } }),
      content: (0, import_fields_document.document)({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),
      author: (0, import_fields2.relationship)({
        ref: "User.posts",
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineConnect: true
        },
        many: false
      }),
      tags: (0, import_fields2.relationship)({
        ref: "Tag.posts",
        many: true,
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      })
    }
  }),
  Tag: (0, import_core2.list)({
    access: import_access2.allowAll,
    ui: {
      isHidden: true
    },
    fields: {
      name: (0, import_fields2.text)(),
      posts: (0, import_fields2.relationship)({ ref: "Post.tags", many: true })
    }
  })
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// routes/applyForm.ts
var import_context = require("@keystone-6/core/context");
var PrismaModule = __toESM(require(".prisma/client"));
async function postApplication(req, res) {
  const context = (0, import_context.getContext)(keystone_default, PrismaModule);
  const { name, phone, id, paymentMethod, purpose, amount } = req.body;
  console.log(req.body);
  const applications = await context.query.Application.createOne({
    data: {
      name,
      phone,
      idCard: id,
      paymethod: paymentMethod,
      reason: purpose,
      loanAmount: amount
    },
    query: "id name phone idCard paymethod reason loanAmount"
  });
  res.status(201).json(applications);
}

// keystone.ts
var bodyParser = require("body-parser");
var cors = require("cors");
var keystone_default = withAuth(
  (0, import_core3.config)({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    server: {
      cors: { origin: ["http://34.125.26.126"], credentials: false, exposedHeaders: ["Access-Control-Allow-Origin"] },
      extendExpressApp: (app, commonContext) => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.post("/rest", async (req, res, next) => {
          req.context = await commonContext.withRequest(req, res);
          next();
        });
        app.post("/rest/application", postApplication);
      }
    },
    lists,
    session
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
