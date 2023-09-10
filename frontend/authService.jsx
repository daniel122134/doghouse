import {api} from "./api.jsx";

const register = (username, email, password) => {
  return api.signup(username, email, password).then((response) => {
    if (response.username) {
      localStorage.setItem("user", JSON.stringify(response));
    }
    return response;
  })
};

const login = (username, password, remember) => {
  
  return api.login(username, password, remember)
    .then((response) => {
      if (response.username) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return api.logout();
};

const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (currentUser === null){
    window.location="/"
  }
  return currentUser;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;