import axios from 'axios';

const baseURL = 'https://socialize-production.up.railway.app';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function login(data) {
  try {
    const response = await api.post('/api/v1/auth/login', data); // Change api.get to api.post
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response; // Return the response object on successful login
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Unable to Login because: " + error.message);
  }
};


export async function signup(data) {
  try {
    const response = await api.post('/api/v1/auth/signup', data);
    return response; // Return the response object on successful signup
  } catch (error) {
    console.error("Registration failed:", error);
    throw new Error("Unable to signup because: " + error.message); // Throw an error with a specific message
  }
};

export async function getLoggedInUserByUsername(username) {
  try {
    const response = await api.get('/api/v1/user/getUser', { params: { username } });
    return response.data;
  } catch (error) {
    console.error("Fetching user data failed:", error);
    throw new Error("Unable to fetch user data because: " + error.message); // Throw an error with a specific message
  }
}
