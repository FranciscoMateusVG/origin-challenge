import Footer from "./Footer";
import { Head } from "./Head";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  );
};
