import type { Request, Response } from 'express';
import type { Context } from '.keystone/types';
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";


  
// const GET_MODULES = gql`
// query getModules {
//   modules {
//     moduleID
//     day
    
//   }
// }`;
// const rs= useQuery(GET_MODULES);
// const modules = rs.data;

export async function postApplication(req: Request, res: Response) {

  // This was added by the context middleware in ../keystone.ts
  const { context } = req as typeof req & { context: Context };

  const {name,phone,id,paymentMethod,purpose,amount } = req.body;
  console.log(req.body)
  
  // name: "calvin",
  //     phone: 98779877,
  //     id: appliciantid,
  //     paymentMethod: paymentMethod,
  //     purpose: purpose,
  //     amount: amount,
  //     agreeTerms1: confirm1
  

  //select module where module ID = moduleID and day order = dayOrder and
  // step order = stepOrder and questionID = questionID and selectedAnswer = selectedAnswer



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