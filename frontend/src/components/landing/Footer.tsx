const Footer = () => {
  return (
    <footer className="border-t border-n-8 bg-white">
      <div className="container-padding py-12 md:py-16 bg-n-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-color-2 rounded-full"></div>
              <span className="text-xl font-semibold">Lovely</span>
            </div>
            <p className="text-n-1 text-sm">
              Modern Learning Platform for Youth
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-n-1">Product</h4>
            <ul className="space-y-3 text-sm text-n-1">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-n-1">Company</h4>
            <ul className="space-y-3 text-sm text-n-1">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-n-1">Legal</h4>
            <ul className="space-y-3 text-sm text-n-1">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-n-7 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-n-2">
            © 2024 Finlit. All rights reserved.
          </p>
          <div className="flex gap-6 text-n-2">
            <a href="#" className=" hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className=" hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className=" hover:text-primary transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
