import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="container justify-center bg-bgColor pl-6 pr-6 sm:pl-[50px] sm:pr-[50px] xl:pl-[165px] xl:pr-[140px]">
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        {isLoading && <Loader />}
        <main className="main__container overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
