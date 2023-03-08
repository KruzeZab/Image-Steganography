export const usernameValidate = {
  required: (value: string) => {
    if (value === "") return "Username is required";
    return true;
  },

  pattern: (value: string) => {
    if (value.match(/^[a-zA-Z0-9-_]+$/) == null)
      return "Username can only contain letters, numbers, hyphens, and underscores";
    return true;
  },

  // unique: async (value: string) => {
  // },
};

export const emailValidate = {
  required: (value: string) => {
    if (value === "") return "Email is required";
    return true;
  },

  pattern: (value: string) => {
    if (value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) == null)
      return "Email is not valid";
    return true;
  },

  // unique: async (value: string) => {
  // },
};

export const passwordValidate = {
  required: (value: string) => {
    if (value === "") return "Password is required";
    return true;
  },

  minLength: (value: string) => {
    if (value.length < 8) return "Password must be at least 8 characters";
    return true;
  },
};
