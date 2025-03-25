import { useEffect } from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsConent";

import MetaComponent from "@/components/common/MetaComponent";
import TermsAndConditions from "@/components/common/TermsAndConditions";
import PrivacyPolicyContent from "@/components/common/PrivacyPolicyContent";
import FAQsContent from "@/components/common/FAQsContent";
import { useDispatch } from "react-redux";
import { getAllFaqs } from "@/features/faqSlice";

const metadata = {
  title: "FAQs – Saudi Hop | Umrah & Travel Services Explained",
  description:
    "Get answers to frequently asked questions about Saudi Hop’s Umrah and travel services. Learn about bookings, payments, visa assistance, cancellations, and more.",
  keywords:
    "Saudi Hop FAQs, Umrah questions, travel service queries, booking help, payment policies, cancellation process, visa assistance",
};

const FAQs = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFaqs())
  }, [])
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
          <FAQsContent />
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

export default FAQs;
