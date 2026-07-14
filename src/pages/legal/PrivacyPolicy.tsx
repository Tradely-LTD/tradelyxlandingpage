import { LegalPage, Section, Bullets } from "./LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" effectiveDate="1st January 2024">
      <Section heading="Introduction">
        <p>
          Welcome to Tradelyx, operated by Tradelyx LTD., a dynamic online marketplace accessible via our
          website, www.tradelyx.com, and our mobile application. This Privacy Policy governs your
          interactions with our services and explains how we collect, use, and share your personal
          information. In crafting this policy, we are committed to protecting your privacy and handling
          your data responsibly, in strict compliance with Nigerian privacy laws. By using Tradelyx, you
          consent to the practices outlined in this policy, which are designed to safeguard your personal
          information while enabling us to provide our services effectively.
        </p>
      </Section>

      <Section heading="Data Controller Information">
        <p>
          Tradelyx LTD., as the data controller, is responsible for the processing of your personal
          information on the Tradelyx platform. Should you have any questions or concerns about how your
          data is handled, you can contact us at{" "}
          <a href="mailto:support@tradelyx.com" className="text-lime hover:underline">
            support@tradelyx.com
          </a>
          , where our dedicated team will assist you with your data privacy inquiries.
        </p>
      </Section>

      <Section heading="Personal Information Collected">
        <p>We collect various types of personal information from our users, including but not limited to:</p>
        <Bullets
          items={[
            "Identification and contact details: Name, email address, phone number, and physical address.",
            "Account information: Username, password, and account settings.",
            "Transactional data: Details about your activities and transactions on Tradelyx, including purchase history and product preferences.",
          ]}
        />
      </Section>

      <Section heading="Methods of Data Collection">
        <Bullets
          items={[
            "Directly from Users: Information you provide when registering, updating your profile, or engaging in transactions.",
            "Automatically: We collect certain data automatically when you use the Tradelyx platform, such as IP addresses, device information, and usage data.",
            "Third Parties: We may receive information about you from third-party sources, where applicable, to enhance our services.",
          ]}
        />
      </Section>

      <Section heading="Purpose of Data Collection">
        <p>The personal information collected is used for several purposes, including:</p>
        <Bullets
          items={[
            "To provide and improve our services, facilitate transactions, and ensure a seamless user experience.",
            "To communicate with you regarding your account, transactions, and updates about Tradelyx.",
            "For internal analytics, market research, and optimizing our platform.",
          ]}
        />
      </Section>

      <Section heading="Data Processing and Usage">
        <p>We process and use your personal data to:</p>
        <Bullets
          items={[
            "Operate and maintain your Tradelyx account.",
            "Process transactions and payments.",
            "Provide customer support and respond to inquiries.",
            "Implement security measures and protect against fraud and abuse.",
            "Comply with legal and regulatory obligations.",
          ]}
        />
      </Section>

      <Section heading="User Consent and Rights">
        <Bullets
          items={[
            "By using Tradelyx, you provide your consent for us to collect, process, and use your data as outlined in this policy.",
            "You have the right to access your personal data, request corrections, and, in certain circumstances, request the deletion of your data.",
            "You can withdraw your consent at any time, subject to legal or contractual restrictions, by contacting us at the provided contact information.",
          ]}
        />
      </Section>

      <Section heading="Data Sharing and Disclosure">
        <Bullets
          items={[
            "With Service Providers: Your information may be shared with third-party service providers who perform services on our behalf.",
            "Legal Compliance: We may disclose your information if required by law or if we believe in good faith that such action is necessary to comply with legal processes.",
            "Business Transfers: In the event of a merger, acquisition, or asset sale, your personal data may be transferred as part of the transaction.",
          ]}
        />
      </Section>

      <Section heading="International Data Transfers">
        <Bullets
          items={[
            "Cross-Border Data Transmission: Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.",
            "Safeguards: We take appropriate measures to ensure that your data remains protected and secure in accordance with this Privacy Policy.",
          ]}
        />
      </Section>

      <Section heading="Data Security Measures">
        <Bullets
          items={[
            "Security Protocols: We implement a variety of security measures designed to maintain the safety of your personal information.",
            "User Responsibility: While we strive to protect your information, the security of your data also depends on you. We advise you to keep your account password confidential and use secure networks.",
          ]}
        />
      </Section>

      <Section heading="Data Retention Policy">
        <Bullets
          items={[
            "Retention Period: We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.",
            "Data Deletion: Upon expiry of the retention period, your data will be deleted or anonymized.",
          ]}
        />
      </Section>

      <Section heading="Children's Privacy">
        <Bullets
          items={[
            "Age Limitation: The Tradelyx platform is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18.",
            "Parental Control: If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information from our servers.",
          ]}
        />
      </Section>

      <Section heading="User Access and Control">
        <Bullets
          items={[
            "Access to Information: You have the right to access the personal information we hold about you.",
            "Data Correction and Deletion: You can request to correct or delete any personal information provided to us.",
          ]}
        />
      </Section>

      <Section heading="Cookies and Tracking Technologies">
        <p>Please refer to the Cookie Policy for more information on this section.</p>
      </Section>

      <Section heading="Third-Party Websites and Services">
        <Bullets
          items={[
            "External Links: This policy only applies to information collected by Tradelyx. If you click on a link to a third-party website, you will be directed to that website which has its own privacy policy.",
            "No Control Over Third Parties: We do not control and are not responsible for the content or privacy practices of third-party websites.",
          ]}
        />
      </Section>

      <Section heading="Changes to the Privacy Policy">
        <Bullets
          items={[
            "Policy Updates: Tradelyx reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on the platform.",
            "Notification of Changes: We will notify users of significant changes to our Privacy Policy through the platform or other means.",
          ]}
        />
      </Section>

      <Section heading="Complaints and Dispute Resolution">
        <Bullets
          items={[
            "Raising Concerns: If you have any concerns or complaints about your privacy or data usage, you are encouraged to contact us directly.",
            "Dispute Resolution Mechanism: We will endeavor to resolve any privacy-related issues swiftly and effectively.",
          ]}
        />
      </Section>

      <Section heading="Legal Basis for Processing">
        <p>
          Compliance with Laws: Our processing of your personal data is based on the necessity of the data
          for the provision of our services, complying with our legal obligations, protecting your vital
          interests, and our legitimate business interests.
        </p>
      </Section>

      <Section heading="Data Protection Officer">
        <Bullets
          items={[
            "Contact Details: The appointed Data Protection Officer (DPO) for Tradelyx can be contacted for any specific questions or concerns regarding data privacy and protection.",
            "Role of the DPO: The DPO oversees Tradelyx's data protection strategies and ensures compliance with privacy laws.",
          ]}
        />
      </Section>

      <Section heading="User Responsibilities">
        <Bullets
          items={[
            "Protecting Your Data: Users are responsible for maintaining the confidentiality of their account information and password and for restricting access to their devices.",
            "Awareness: Users should be aware of phishing and other methods used by third parties to gain unauthorized access to personal data.",
          ]}
        />
      </Section>

      <Section heading="Contact and Feedback">
        <Bullets
          items={[
            "Feedback Welcomed: Tradelyx values your feedback on our privacy practices.",
            "Contact Information: For further inquiries or feedback related to this Privacy Policy, users can contact us via the provided contact details.",
          ]}
        />
      </Section>
    </LegalPage>
  );
}
