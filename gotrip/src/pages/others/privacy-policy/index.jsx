import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";

import MetaComponent from "@/components/common/MetaComponent";
import TermsAndConditions from "@/components/common/TermsAndConditions";
import PrivacyPolicyContent from "@/components/common/PrivacyPolicyContent";

const metadata = {
  title: "Terms & Conditions || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
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

      <section className="">
        <div className="">
          <PrivacyPolicyContent />
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default PrivacyPolicy;
