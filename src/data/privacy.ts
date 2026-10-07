// Текст политики — дословно из документа студии (английский оригинал).
export type PolicyBlock = { sub?: string; text: string }
export type PolicySection = { id: string; title: string; blocks: PolicyBlock[] }

export const PRIVACY_INTRO =
  'We take your privacy seriously and this privacy statement explains how we collect, use, share and process your information.'

export const PRIVACY: PolicySection[] = [
  {
    id: 'personal-data',
    title: 'Collection and Use of Personal Data',
    blocks: [
      {
        text: 'Personal data is information that can be used to directly or indirectly identify you. Personal data also includes anonymous data that is linked to information that can be used to directly or indirectly identify you. Personal data does not include data that has been irreversibly anonymized or aggregated so that it can no longer enable us, whether in combination with other information or otherwise, to identify you.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Promoting Safety and Security',
    blocks: [
      {
        text: 'We abide by the principles of legality, legitimacy, and transparency, use, and process the least data within a limited scope of purpose, and take technical and administrative measures to protect the security of the data. We use personal data to help verify accounts and user activity, as well as to promote safety and security, such as by monitoring fraud and investigating suspicious or potentially illegal activity or violations of our terms or policies. Such processing is based on our legitimate interest in helping ensure the safety of our products and services.',
      },
      { text: 'Here is a description of the types of personal data we may collect and how we may use it:' },
    ],
  },
  {
    id: 'what-we-collect',
    title: 'What Personal Data We Collect',
    blocks: [
      {
        sub: 'i. Data you provide',
        text: 'We collect the personal data you provide when you use our products and services or otherwise interact with us, such as when you create an account, contact us, participate in an online survey, use our online help or online chat tool. If you make a purchase, we collect personal data in connection with the purchase. This data includes your payment data, such as your credit or debit card number and other card information, and other account and authentication information, as well as billing, shipping, and contact details.',
      },
      {
        sub: 'ii. Data about the use of our services and products',
        text: "When you visit our websites, we may collect data about the type of device you use, your device's unique identifier, the IP address of your device, your operating system, the type of Internet browser that you use, usage information, diagnostic information, and location information from or about the computers, phones, or other devices on which you install or access our products or services. Where available, our services may use GPS, your IP address, and other technologies to determine a device's approximate location to allow us to improve our products and services.",
      },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Personal Data',
    blocks: [
      {
        text: 'Generally speaking, we use personal data to provide, improve, and develop our products and services, to communicate with you, to offer you targeted advertisements and services, and to protect us and our customers.',
      },
      {
        sub: 'i. Providing, improving, and developing our products and services',
        text: 'We use personal data to help us provide, improve, and develop our products, services, and advertising. This includes using personal data for purposes such as data analysis, research, and audits. Such processing is based on our legitimate interest in offering you products and services and for business continuity. If you enter a contest or other promotion, we may use the personal data you provide to administer those programs. Some of these activities have additional rules, which may contain further data about how we use personal data, so we encourage you to read those rules carefully before participating.',
      },
      {
        sub: 'ii. Communicating with you',
        text: 'Subject to your prior express consent, we may use personal data to send you marketing communications in relation to our own products and services, communicate with you about your account or transactions, and inform you about our policies and terms. If you no longer wish to receive email communications for marketing purposes, please Contact Us at dbdcstudio@gmail.com. We also may use your data to process and respond to your requests when you Contact Us. Subject to your prior express consent, we may share your personal data with third-party partners who may send you marketing communications in relation to their products and services. Subject to your prior express consent, we may use personal data to personalize your experience with our products and services and on third-party websites and applications and to determine the effectiveness of our promotional campaigns.',
      },
      {
        text: 'NOTE: For any of the uses of your data described above that require your prior express consent, note that you may withdraw your consent by contacting us.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Definition of “Cookies”',
    blocks: [
      {
        text: 'Cookies are small pieces of text used to store information on web browsers. Cookies are widely used to store and receive identifiers and other information on computers, phones, and other devices. We also use other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, for similar purposes. In this Cookie Statement, we refer to all of these technologies as “cookies.”',
      },
    ],
  },
  {
    id: 'use-of-cookies',
    title: 'Use of Cookies',
    blocks: [
      {
        text: 'We use cookies to provide, protect, and improve our products and services, such as by personalizing content, offering and measuring advertisements, understanding user behavior, and providing a safer experience. Please note that the specific cookies we may use vary depending on the specific websites and services you use.',
      },
    ],
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Personal Data',
    blocks: [
      {
        text: 'We make certain personal data available to strategic partners that work with us to provide our products and services or help us market to customers. Personal data will only be shared by us with these companies in order to provide or improve our products, services, and advertising; it will not be shared with third parties for their own marketing purposes without your prior express consent.',
      },
    ],
  },
  {
    id: 'storage-transfer',
    title: 'Data Disclosure or Storage, Transfer, and Processing',
    blocks: [
      {
        sub: 'i. Fulfillment of legal obligations',
        text: 'Due to the mandatory laws of the European Economic Area or the country in which the user lives, certain legal acts exist or have occurred and certain legal obligations need to be fulfilled. Treatment of personal data of EEA residents — as described below, if you reside within the European Economic Area (EEA), our processing of your personal data will be legitimized: whenever we require your consent for the processing of your personal data such processing will be justified pursuant to Article 6(1) of the General Data Protection Regulation (EU) (“GDPR”).',
      },
      {
        sub: 'ii. For the purpose of reasonable implementation or application of this article',
        text: 'We may share personal data with all our affiliated companies. In the event of a merger, reorganization, acquisition, joint venture, assignment, spin-off, transfer, or sale or disposition of all or any portion of our business, including in connection with any bankruptcy or similar proceedings, we may transfer any and all personal data to the relevant third party. We may also disclose personal data if we determine in good faith that disclosure is reasonably necessary to protect our rights and pursue available remedies, enforce our terms and conditions, investigate fraud, or protect our operations or users.',
      },
      {
        sub: 'iii. Legal compliance and security or protect other rights',
        text: 'It may be necessary — by law, legal process, litigation, and/or requests from public and governmental authorities within or outside your country of residence — for us to disclose personal data. We may also disclose personal data if we determine that for purposes of national security, law enforcement, or other issues of public importance, disclosure is necessary or appropriate.',
      },
    ],
  },
  {
    id: 'children',
    title: 'Children',
    blocks: [
      {
        text: 'Our products and services are intended for adults. Accordingly, we do not knowingly collect, use, or disclose data from children under 16. If we learn that we have collected the personal data of a child under 16, or the equivalent minimum age depending on the jurisdiction, we will take steps to delete the data as soon as possible. Please immediately Contact Us if you become aware that a child under 16 has provided us with personal data.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    blocks: [
      {
        text: 'We take reasonable steps to ensure that your personal data is accurate, complete, and up to date. You have the right to access, correct, or delete the personal data that we collect. You are also entitled to restrict or object, at any time, to the further processing of your personal data. You have the right to receive your personal data in a structured and standard format. You may lodge a complaint with the competent data protection authority regarding the processing of your personal data. To protect the privacy and the security of your personal data, we may request data from you to enable us to confirm your identity and right to access such data, as well as to search for and provide you with the personal data we maintain. There are instances where applicable laws or regulatory requirements allow or require us to refuse to provide or delete some or all of the personal data that we maintain. You may Contact Us to exercise your rights. We will respond to your request in a reasonable timeframe, and in any event in less than 30 days.',
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Websites and Services',
    blocks: [
      {
        text: "When a customer operates a link to a third-party website that has a relationship with us, we do not assume any obligation or responsibility for such a policy because of the third party's privacy policy. Our websites, products, and services may contain links to or the ability for you to access third-party websites, products, and services. We are not responsible for the privacy practices employed by those third parties, nor are we responsible for the information or content their products and services contain. This Privacy Statement applies solely to data collected by us through our products and services. We encourage you to read the privacy policies of any third party before proceeding to use their websites, products, or services.",
      },
    ],
  },
  {
    id: 'security',
    title: 'Data Security, Integrity, and Retention',
    blocks: [
      {
        text: 'We use reasonable technical, administrative, and physical security measures designed to safeguard and help prevent unauthorized access to your data and to correctly use the data we collect. We will retain your personal data for as long as it is necessary to fulfill the purposes outlined in this Privacy Statement unless a longer retention period is required or permitted by law.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this Privacy Statement',
    blocks: [
      {
        text: 'We may periodically change this Privacy Statement to keep pace with new technologies, industry practices, and regulatory requirements, among other reasons. Your continued use of our products and services after the effective date of the Privacy Statement means that you accept the revised Privacy Statement. If you do not agree to the revised Privacy Statement, please refrain from using our products or services and Contact Us to close any account you may have created.',
      },
    ],
  },
]
