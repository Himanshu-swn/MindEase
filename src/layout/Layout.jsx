import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
const layout = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Routers />
      </main>
      <Footer className="bg-gray-200 py-4 text-center"/>
    </>
  );
};

export default layout;
