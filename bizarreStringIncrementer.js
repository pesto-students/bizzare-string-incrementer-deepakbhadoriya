// Start your implementation here

const secondString = (string) => {
  //checking if we received valid string
  if (typeof string === "string") {
    // converting string to number, incrementing 1 and converting back to string
    let newString = (parseInt(string) + 1).toString();
    // counting difference in length of string before adding 1 and after that
    let numberOfZero = string.length - newString.length;
    // adding zero to the string
    while (numberOfZero > 0) {
      newString = "0" + newString;
      numberOfZero--;
    }
    return newString;
  } else return 1;
};

const bizarreStringIncrementer = (string) => {
  //Splitting the string by "oo"
  const splittedString = string.split("oo");

  // First String
  const firstString = splittedString[0] + "oo";
  const stringSecondPart = splittedString[1];

  return firstString + secondString(stringSecondPart);
};

module.exports = bizarreStringIncrementer;
