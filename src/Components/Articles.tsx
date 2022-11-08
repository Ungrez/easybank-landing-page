import "../sass/ComponentsStyles/Articles.scss";
const Articles = () => {
  const items = [
    {
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      more: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
      path: require("../imgs/image-currency.jpg"),
    },
    {
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      more: "Out simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
      path: require("../imgs/image-restaurant.jpg"),
    },
    {
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      more: "We want you to enjoy travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
      path: require("../imgs/image-plane.jpg"),
    },
    {
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      more: "After a lot of hard work by whole team, we're excited to launch our closed beta. It's easy to request an invite throught the site ...",
      path: require("../imgs/image-confetti.jpg"),
    },
  ];
  return (
    <div id="articles">
      <p>Latest Articles</p>
      <div id="articles_container">
        {items.map((item, index) => (
          <div key={index} id="articles_container_box">
            <img src={item.path} alt={item.title} />
            <p id="article_author">By {item.author}</p>
            <p id="article_title">{item.title}</p>
            <p id="article_desc">{item.more} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
