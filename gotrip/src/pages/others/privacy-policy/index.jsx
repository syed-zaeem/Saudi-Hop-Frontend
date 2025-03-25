import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";

import MetaComponent from "@/components/common/MetaComponent";
import TermsAndConditions from "@/components/common/TermsAndConditions";
import PrivacyPolicyContent from "@/components/common/PrivacyPolicyContent";

const metadata = {
  title: "Privacy Policy | Saudi Hop – Your Data, Our Responsibility",
  description:
    "Read Saudi Hop's Privacy Policy (a trading name of Marsons Travel Limited). Learn how we collect, use, and protect your personal data in compliance with legal standards.",
  keywords:
    "Saudi Hop privacy policy, personal data protection, Marsons Travel Limited, data collection, user privacy rights, travel information protection",
};

const PrivacyPolicy = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <main>
        <section className="">
          <div className="">
            <PrivacyPolicyContent />
          </div>
        </section>
        {/* End terms section */}
      </main>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default PrivacyPolicy;
