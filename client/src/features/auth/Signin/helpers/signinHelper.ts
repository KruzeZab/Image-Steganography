export const usernameValidate = {
  required: (value: string) => {
    if (value === "") return "Username is empty.";
    return true;
  },
};

export const passwordValidate = {
  required: (value: string) => {
    if (value === "") return "Password is empty.";
    return true;
  },
};
