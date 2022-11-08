import "../sass/ComponentsStyles/Header.scss";

const Header = () => {
  return (
    <div id="header">
      <div id="header_images">
        <div id="header_images_phones"></div>
      </div>
      <div id="header_text">
        <p>Next generation digital banking</p>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button>Request Invite</button>
      </div>
    </div>
  );
};

export default Header;
