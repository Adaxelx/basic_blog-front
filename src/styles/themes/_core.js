const bpValues = {
  xs: 0,
  s: 460,
  m: 768,
  l: 1280,
  xl: 1920,
};

const generateMQ = (rule, value) => {
  const predefined = Object.keys(bpValues).includes(value);
  const resultValue = predefined ? bpValues[value] : value;
  return `@media (${rule}-width: ${resultValue}px)`;
};

export { bpValues };
export default {
  colors: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  font: {
    base: '16px',
    family: 'Arial',
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    s: '.85rem',
    m: '1rem',
    l: '1.15rem',
  },
  bp: {
    values: bpValues,
    max: (v) => generateMQ('max', v),
    min: (v) => generateMQ('min', v),
  },
  time: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    long: 350,
    longer: 400,
    longest: 450,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  zIndex: {},
  elements: {},
};
