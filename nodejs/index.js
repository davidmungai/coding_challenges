function calcAge(age) {
  let i;
  const endYear = new Date().getFullYear();
  const startYear = age > 0 ? Number(endYear) - age : endYear;
  let numOfDays = 0;
  for (i = startYear; i < endYear; i++) {
    console.log(i);
    numOfDays += 365;
  }

  if (age == 0) {
    numOfDays = 0;
  }
  console.log(numOfDays);
  return numOfDays;
}

calcAge(10);
