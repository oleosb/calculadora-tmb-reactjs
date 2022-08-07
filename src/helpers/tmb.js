export const calculateTMB = (method, gender, age, height, weight) => {
  const levels = [
    {
      method: 'Mifflin-St Jeor',
      gender: 'm',
      tmb: 10 * weight + 6.25 * height - 5 * age + 5,
    },
    {
      method: 'Mifflin-St Jeor',
      gender: 'w',
      tmb: 10 * weight + 6.25 * height - 5 * age - 161,
    },
    {
      method: 'Harris-Benedict',
      gender: 'm',
      tmb: 66.47 + 13.75 * weight + 5 * height - 5 * age,
    },
    {
      method: 'Harris-Benedict',
      gender: 'w',
      tmb: 655.1 + 9.56 * weight + 1.85 * height - 4.68 * age,
    },
  ];

  for (let i in levels) {
    if (method === levels[i].method && gender === levels[i].gender) {
      const levelsCopy = levels[i].tmb;
      return levelsCopy;
    }
  }
};
