import axios from 'axios';

const login = async (inputEmail, inputPassword) => {
  try {
    const response = await axios.post(`https://api.thssoft.com/login`, {
      email: inputEmail,
      password: inputPassword,
      project_code: 'ths',
    });
    console.log(response);
    if (response.status === 200) {
      return response.data.payload.access_token;
    }
  } catch (error) {}
};

export const authenticationService = { login };
