import "../sass/ComponentsStyles/About.scss";

const About = () => {
  const items: {
    title: string;
    about: string;
  }[] = [
    {
      title: "Online Banking",
      about:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      title: "Simple Budgeting",
      about:
        "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
    },
    {
      title: "Fast Onboarding",
      about:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      title: "Open API",
      about:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <div id="about">
      <div id="about_description">
        <p>Why choose Easybank?</p>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      {items.map((item, index) => (
        <div key={index} id="about_box">
          <div id="about_box_img"></div>
          <p>{item.title}</p>
          <p>{item.about}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
