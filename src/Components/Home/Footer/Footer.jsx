
import{FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer items-center mt-10 p-4 border px-10">
  <aside className="items-center grid-flow-col">
  
          <img
            className="h-20"
            src="https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png"
            alt=""
          />
       
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://github.com/sagor369" target="_blank">
        <FaGithub className='w-6 h-6'/>
    </a> 
    <a href="https://linkedin.com/in/md-sahedul-islam-sagor-90a7b8234" target="_blank">
        <FaLinkedin className='w-6 h-6'/>
    </a>
    <a href="https://www.facebook.com/sahedul369" target="_blank">
        <FaFacebook className='w-6 h-6'/>
    </a>
  </nav>
</footer>
    );
};

export default Footer;