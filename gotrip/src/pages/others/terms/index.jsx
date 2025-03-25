import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";

import MetaComponent from "@/components/common/MetaComponent";
import TermsAndConditions from "@/components/common/TermsAndConditions";

const metadata = {
  title: "Terms and Conditions | Saudi Hop – Umrah & Travel Services Policy",
  description:
    "Explore Saudi Hop's Terms and Conditions. Understand our Umrah service policies, user obligations, refund guidelines, and legal information.",
  keywords:
    "Saudi Hop terms and conditions, Umrah service policy, user agreement, refund policy, legal guidelines, travel terms",
};

const Terms = () => {
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
            {/* <TermsConent /> */}
            <TermsAndConditions />
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

export default Terms;
