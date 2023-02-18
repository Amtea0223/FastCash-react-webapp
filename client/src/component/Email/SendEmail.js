import emailjs from "@emailjs/browser"
export const sendEmail = (e, data, templateId) => {
  e.preventDefault()
  emailjs
    .sendForm("service_richmorefinance", templateId, data, "7z4LhBqeQ0_wWBIFa")
    .then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
}
