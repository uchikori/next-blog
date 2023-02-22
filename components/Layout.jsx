import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
