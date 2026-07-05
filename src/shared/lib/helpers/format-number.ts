const formatNumberDecimals = (
  number = 0,
  decimals = 2,
  fractionLen = 3,
  replacement = '$& ',
) => {
  const finalNumber = Number(number);

  const numberStr =
    decimals > 0 ? finalNumber.toFixed(decimals) : finalNumber.toString();

  const [integerPart, decimalPart] = numberStr.split('.');

  const re = `\\d(?=(\\d{${fractionLen}})+$)`;
  const formattedInteger = integerPart.replace(
    new RegExp(re, 'g'),
    replacement,
  );

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

/**
 * @param number
 * @param decimals
 * @param fractionLen
 */
export const formatNumber = (number = 0, decimals = 0, fractionLen = 3) => {
  const formatted = formatNumberDecimals(number, decimals, fractionLen);

  if (decimals === 0) {
    return formatted.replace(/\.(0{1,4})?$/, '');
  }

  return formatted;
};

export const formatNumberAbbr = (
  n: number,
  decimals = 0,
  min = null,
  useSpacer = false,
) => {
  if (isNaN(n)) {
    return 0;
  }

  decimals = Math.pow(10, decimals);

  let c;
  const d = [
    {
      n: 1000,
      m: 1,
      s: '',
    },
    {
      n: 1000000,
      m: 1000,
      s: 'K',
    },
    {
      n: 1000000000,
      m: 1000000,
      s: 'M',
    },
    {
      n: 100000000000,
      m: 1000000000,
      s: 'B',
    },
  ];

  for (let i = 0; i < d.length; i++) {
    c = d[i];

    if (n < c.n) {
      break;
    }
  }

  if (min && n < min) {
    decimals = 1;
  }

  return (
    Math.floor(n / (c!.m / decimals)) / decimals + (useSpacer ? ' ' : '') + c!.s
  );
};
