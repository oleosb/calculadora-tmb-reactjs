export const calculateIMC = (height, weight) => {
  const levels = [
    { title: 'magreza', imc: [0, 18.59] },
    { title: 'normal', imc: [18.6, 24.99] },
    { title: 'sobrepeso', imc: [25, 30] },
    { title: 'obesidade', imc: [30.1, 99] },
  ];
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      const levelsCopy = { ...levels[i] };
      levelsCopy.userIMC = imc.toFixed(2);
      return levelsCopy;
    }
  }
};
