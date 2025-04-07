const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:020 8944 9145",
      text: "020 8944 9145",
    },
    // {
    //   id: 2,
    //   title: "Need live support?",
    //   action: "team@saudihop.com",
    //   text: "team@saudihop.com",
    // },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-10" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
