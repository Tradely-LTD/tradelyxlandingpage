import { LegalPage, Section, Bullets } from "./LegalPage";

export default function AccountDeletion() {
  return (
    <LegalPage eyebrow="Support" title="Delete Your TradelyX Account">
      <Section>
        <p>
          We respect your privacy and are committed to providing you with control over your data. If you
          wish to delete your TradelyX account and associated data, please follow the steps below.
        </p>
      </Section>

      <Section heading="Navigate to the Account Deletion Request Page">
        <p>Follow these steps on the TradelyX mobile app:</p>
        <Bullets
          items={[
            "Log in to your TradelyX account.",
            'Tap your "Profile Image" located at the top-left corner of your screen.',
            'Select "My Profile" to access your profile details.',
            'Scroll down to the bottom of the page and locate "Delete Account."',
            'Tap "Delete Account" and a confirmation dialog box will appear.',
            'Confirm the account deletion by selecting "Yes."',
          ]}
        />
      </Section>

      <Section heading="Types of Data Deleted">
        <Bullets
          items={[
            "Upon requesting the deletion of your account, the process will entail the elimination of personally identifiable data linked to your TradelyX account.",
            "This encompasses comprehensive profile details, uploaded documents, transaction history, and any user-generated content, such as Product Listings, Trade Requests (quotations & freight), In-App Chat Conversations, and Sell Offers.",
          ]}
        />
      </Section>

      <Section heading="Types of Data Retained">
        <Bullets
          items={[
            "After account deletion, certain data may be retained for a limited period, typically 90 days, for legal or operational reasons. This may include non-personalized transactional data used for analytics, which focuses on aggregated, statistical insights.",
          ]}
        />
      </Section>

      <Section heading="Confirmation of Deletion">
        <Bullets
          items={[
            "Upon successful deletion, you will receive a confirmation email. Please note that the removal process may take up to 48 hours.",
          ]}
        />
      </Section>

      <Section heading="Need Assistance?">
        <p>
          If you encounter any issues or have questions, our support team is here to assist. Contact us at{" "}
          <a href="mailto:legal@tradelyx.com" className="text-lime hover:underline">
            legal@tradelyx.com
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
