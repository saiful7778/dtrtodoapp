const checkPassword = (inputPassword) => {
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(inputPassword)) {
    return true;
  }
  return false;
};

export { checkPassword };
