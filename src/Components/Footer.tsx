import "../sass/ComponentsStyles/Footer.scss";
import IconFB from "../imgs/icon-facebook.svg";
import IconYT from "../imgs/icon-youtube.svg";
import IconTwitter from "../imgs/icon-twitter.svg";
import IconPint from "../imgs/icon-pinterest.svg";
import IconIG from "../imgs/icon-instagram.svg";
import FooterLogo from "../imgs/logo-footer.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <img
        id="footer_logo"
        src={FooterLogo}
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div id="footer_social">
        <img
          src={IconFB}
          id="footer_social_facebook"
          className="icon"
          alt="facebook_icon"
        />
        <img
          src={IconYT}
          id="footer_social_youtube"
          className="icon"
          alt="youtube_icon"
        />
        <img
          src={IconTwitter}
          id="footer_social_twitter"
          className="icon"
          alt="twitter_icon"
        />
        <img
          src={IconIG}
          id="footer_social_pinterest"
          className="icon"
          alt="pinterest_icon"
        />
        <img
          src={IconPint}
          id="footer_social_instagram"
          className="icon"
          alt="instagram_icon"
        />
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
