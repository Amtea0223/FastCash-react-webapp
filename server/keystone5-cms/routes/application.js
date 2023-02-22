const { chain, pick } = require("lodash")
const moment = require("moment")
const config = require("../config")

module.exports = (app, model) => {
  moment.locale()
  app.post("/api/v1/application", async (req, res) => {
    let submission = {}
    try {
      const body = req.body
      console.log(req)
      const data = pick(body, [
        "appliciantname",
        "phone",
        "id",
        "paymentMethod",
        "purpose",
        "amount",
        "agreeTerms1",
        "timestamp",
      ])
      const applicationModel = model("ApplicationSubmission")
      submission = await new applicationModel({
        ...data,
        // submissionDate: moment().format("YYYY-MM-DD"),
      }).save()
    } catch (err) {
      console.log(err)
      // ignore
    }
    return res.json(submission)
  })
}
