import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="container bg-bgColor pl-[165px] pr-[140px]">
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
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
