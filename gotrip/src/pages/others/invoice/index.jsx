import InvoiceComponent from "@/components/invoice/Invoice";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Invoice || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Invoice = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <InvoiceComponent />
    </>
  );
};

export default Invoice;
