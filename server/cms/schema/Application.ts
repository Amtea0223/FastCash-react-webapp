import { graphql, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';


import {
  image,
  relationship,
  integer,
  timestamp,
  text,
  virtual,
  select,
  json,
} from '@keystone-6/core/fields';


// name: appliciantName,
//       isChatBot: false,
//       reason: step1Selected,
//       paymethod: step2Selected,
//       phone: phoneNumb,
//       loanAmount: loanAmount,
//       paymentPeriod: payPeriod,
//       idCard: idCard,
//       timestamp

export const Application = list({
  fields: {    
    name:text(),
    phone:text(),
    idCard:text(),
    paymethod:text(),
    reason:text(),
    loanAmount:text(),
    // dateCreated: timestamp({
    //   defaultValue:{kind:'now'},
    //   ui: {
    //     createView: {
    //       fieldMode: ({ session, context }) => 'hidden',
    //     },
    //     itemView: {
    //       fieldMode: ({ session, context, item }) => 'hidden',
    //     },
    //   },     
    // }),
    timestamp: timestamp({
      ui: {
        createView: {
          fieldMode: ({ session, context }) => 'hidden',
        },
        itemView: {
          fieldMode: ({ session, context, item }) => 'hidden',
        },
      },
      hooks: {
        resolveInput: ({ operation }) => {
          if (operation == 'update') {
            return new Date();
          }
        },
      },
    }),
  },

  ui: {
    hideCreate: false,
    hideDelete: false,
    listView: {
      initialColumns: ['name','phone', 'idCard','paymethod','reason','loanAmount','timestamp'],
      initialSort: {
        field: 'timestamp',
        direction: 'DESC',
      },
    },
    // isHidden: isNotMember,
  },
  access: {
    operation: {
      query: allowAll,
      create: allowAll,
      update: allowAll,
      delete: allowAll,
    },
  },
});
