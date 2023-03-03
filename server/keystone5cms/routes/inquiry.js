const { chain, pick } = require("lodash")
const moment = require("moment")
const config = require("../config")

module.exports = (app, model) => {
  moment.locale()
  app.post("/api/v1/inquiry", async (req, res) => {
    let submission = {}
    try {
      const body = req.body
      console.log(req)
      const data = pick(body, [
        "name",
        "phone",
        "email",
        "message",        
        "timestamp",
      ])
      const inquiryModel = model("InquirySubmission")
      submission = await new inquiryModel({
        ...data,
        submissionDate: moment().format("YYYY-MM-DD"),
      }).save()
    } catch (err) {
      console.log(err)
      // ignore
    }
    return res.json(submission)
  })
}
