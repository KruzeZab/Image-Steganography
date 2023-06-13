export const imageValidate = {
  required: (value: string) => {
    if (value === "") return "Please select an image";
    return true;
  },
};

export const messageValidate = {
  required: (value: string) => {
    if (value === "") return "Message is required";
    return true;
  },
};

export const pubkeyValidate = {
  required: (value: string) => {
    if (value === "") return "Receiver's public key is required";
    return true;
  },
};
