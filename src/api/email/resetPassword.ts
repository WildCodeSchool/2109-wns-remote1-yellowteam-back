import Emailhandler from './interfaces';

const resetPassword: Emailhandler['resetPassword'] = async (req, res) => {
  try {
    console.log(__dirname + '/templates/index.html');
    res.sendFile(__dirname + '/templates/index.html');
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
