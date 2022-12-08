import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/AuthContext";
// import AuthContext from "./components/store/AuthContext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   // localStorage.setItem("isLogged", "1"); // 1 to show it is logged in
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };
  const ctxData = useContext(AuthContext);
  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctxData.isLoggedIn && <Login />}
        {ctxData.isLoggedIn && <Home />}
      </main>
    </React.Fragment>

    // </AuthContext.Provider>
  );
}

export default App;
