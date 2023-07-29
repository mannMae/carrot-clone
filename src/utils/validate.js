export const validate = {
  email: (string) => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    return regex.test(string);
  },

  phone: (phoneNumber) => {
    const phoneNumberString = String(phoneNumber);
    const regex = new RegExp('^(01[016789]{1})[0-9]{3,4}[0-9]{4}$');
    return regex.test(phoneNumberString);
  },
};
