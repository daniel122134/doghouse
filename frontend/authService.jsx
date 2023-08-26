import {api} from "./api.jsx";

const register = (username, email, password) => {
  return api.signup(username, email, password).then((response) => {
    if (response.username) {
      localStorage.setItem("user", JSON.stringify(response));
    }
    return response;
  })
};

const login = (username, password) => {
  
  return api.login(username, password)
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
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;