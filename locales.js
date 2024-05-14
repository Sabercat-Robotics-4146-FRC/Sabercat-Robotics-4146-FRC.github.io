export default [
  "en",
  // "es",
  // "fr",
  // "ja",
];

// English localization for the website, recommended to use as a template for new languages
// Note: when creating new locales, make sure to localize comments as well
export const en = {
  // 404 page
  NotFound: {
    Error: "Error 404",
    Header: "Page <yellow>not</yellow> found",
    Paragraph: "The page you were looking for could not be found. Please press the button below to go back to the homepage. If you think this is a mistake, please <inlineLink>contact us</inlineLink>. Thank you!",
    Homepage: "Homepage",
    PrinterTitle: "Printer Vector",
  },
  // Components shown throughout the whole website (e.g. the header and footer)
  Website: {
    // Headers shown throughout the website
    Headers: {
      // Alt text for logos
      LogoAlt: "Logo",
      Company: "Sabercat Robotics",
      Home: "Home",
      TaxCredit: "Tax Credit",
      Awards: "Awards",
      SponsorsAndPartners: "Sponsors & Partners",
      Blog: "Blog",
      InnovationCenter: "Innovation Center",
      SistersInSTEM: "Sisters in STEM",
      Mentors: "Mentors",
      ContactInformation: "Contact Information",
      ComingSoon: "Coming Soon",
      CardDescriptions: {
        TaxCredit: "We are a 501(c)-3 organization. Tax Credit sets Arizona apart in education funding. Let's take advantage of it.",
        Awards: "Check out what we've accomplished so far!",
        SponsorsAndPartners: "We rely on the support of our community. Whether you're a local business, global conglomerate, or self employed, there's need for your support.",
        Blog: "The Sabercat Robotics blog; your perfect source for anything related to FIRST and our team.",
        InnovationCenter: "Learn more about Saguaro High School's Innovation Center and our part in its creation.",
        SistersInSTEM: "Learn more about Sisters in STEM.",
        Mentors: "We are <bold>always</bold> looking for more mentors. Everyone has something to teach.",
        ContactInformation: "Need to get a hold of a team member of ours? Find their contact on this page.",
        ComingSoon: "Feel free to contact us with your ideas about new pages and components.",
      },
      Important: "Important!",
      Language: "Language",
    },
    // Footer shown throughout the website
    Footer: {
      // Sections
      Support: "Support Us",
      Learn: "Learn More",
      Social: "Social Media",
      Contact: {
        Header: "Contact",
        Form: "Contact Form",
      },
      SMSA: "Saguaro Math and Science Academy",
      Copyright: "Copyright © {year} Saguaro Math and Science Academy. All Rights Reserved.",
    },
  },
  // Sponsors and Partners page
  SponsorsAndPartners: {
    Header: "Our Sponsors & Partners",
    Description: "Without our sponsors and partners, Sabercat Robotics would not be possible. Because of this, to show our gratitude, here is a list of every sponsorship and partnership we currently have.",
    Visit: "Visit Their Website",
  },
  // Email form shown on the home page of our website
  EmailForm: {
    Header: "Contact Us",
    Description: "Need to reach out to our team? Contact us either with the form or <inlineEmailLink>by email</inlineEmailLink> (team@sabercatrobotics.com), and make sure to provide as much detail as possible so we can get back to you quickly.",
    Email: {
      Label: "Email Address:",
      Placeholder: "Your email address",
    },
    Subject: {
      Label: "Subject:",
      Placeholder: "Subject of your email",
    },
    Message: {
      Label: "Message:",
      Placeholder: "Message content of your email",
    },
    Submit: "Submit",
    Attempting: "Attempting to send email...",
    Responses: {
      Success: "Thank you for your email! Expect a response to be sent to the email you provided within 3 - 5 business days.",
      ServerError: "There was an error on our server when sending your email. Please try again, or contact us via email (team@sabercatrobotics.com).",
      EmptyMessage: "The message you provided was empty. Please try again with a valid message, or contact us via email (team@sabercatrobotics.com).",
      EmptySubject: "The subject you provided was empty. Please try again with a valid subject, or contact us via email (team@sabercatrobotics.com).",
      InvalidEmail: "The email that you provided was invalid. Please try again with a valid email, or contact us via email (team@sabercatrobotics.com).",
      VerifiedError: "There was an error with authenticating our email account. Please try again, or contact us via email (team@sabercatrobotics.com).",
      SendError: "There was an issue with sending your email on the server. Please try again, or contact us via email (team@sabercatrobotics.com)."
    },
  },
};