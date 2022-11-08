import "../sass/ComponentsStyles/Footer.scss";
const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer_logo"></div>
      <div id="footer_social">
        <div id="footer_social_facebook" className="icon"></div>
        <div id="footer_social_youtube" className="icon"></div>
        <div id="footer_social_twitter" className="icon"></div>
        <div id="footer_social_pinterest" className="icon"></div>
        <div id="footer_social_instagram" className="icon"></div>
      </div>
      <ul id="footer_nav">
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <button id="footer_button">Request Invite</button>
      <p id="footer_copy"> &#169; Easybank. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
