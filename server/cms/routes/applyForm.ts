import type { Request, Response } from 'express';
// import type { Context } from '.keystone/types';
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { getContext } from '@keystone-6/core/context';
import * as PrismaModule from '.prisma/client';
import config from '../keystone'






  
// const GET_MODULES = gql`
// query getModules {
//   modules {
//     moduleID
//     day
    
//   }
// }`;
// const rs= useQuery(GET_MODULES);
// const modules = rs.data;

// export async function postApplication(req: Request, res: Response) {

//   // This was added by the context middleware in ../keystone.ts
//   const { context } = req as typeof req & { context: Context };

//   if (!req.body) {
//     return res.status(400).json({ error: 'Request body is missing' });
//   }

//   // if (!context) {
//   //   return res.status(500).json({ error: 'Context is not defined.' });
//   // }

//   const {name,phone,id,paymentMethod,purpose,amount } = req?.body;
//   console.log(req.body)
  

//   const apply = await context.db.Application.createOne({
//     data: {
//     name: name,
//     phone:phone,
//     idCard:id,
//     paymethod:paymentMethod,
//     reason:purpose,
//     loanAmount:amount,
//     }
//   });  
//   res.status(201).json(apply);
// }

// const applications = await context.query.Application.createOne({
//   data: {
//   name: name,    
//   phone:phone,
//   idCard:id,
//   paymethod:paymentMethod,
//   reason:purpose,
//   loanAmount:amount,
//   },
//   query: 'id name phone idCard paymethod reason loanAmount',
// });

export async function postApplication(req: Request, res: Response) {

  // This was added by the context middleware in ../keystone.ts
  // const { context } = req as typeof req & { context: Context };

  const context = getContext(config, PrismaModule);


  const {name,phone,id,paymentMethod,purpose,amount } = req.body;
  console.log(req.body)
  
  const applications = await context.query.Application.createOne({
    data: {
    name: name,    
    phone:phone,
    idCard:id,
    paymethod:paymentMethod,
    reason:purpose,
    loanAmount:amount,
    },
    query: 'id name phone idCard paymethod reason loanAmount',
  });

  res.status(201).json(applications);
}