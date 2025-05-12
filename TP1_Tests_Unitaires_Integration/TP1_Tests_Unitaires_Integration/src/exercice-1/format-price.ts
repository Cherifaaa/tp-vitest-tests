export type FormatPriceOptions = {
  decimalSeparator?: string;
  thousandSeparator?: string;
};

export function formatPrice(value: number, options?: FormatPriceOptions): string {
  if (typeof value !== "number" || isNaN(value)) throw new Error("Invalid number");

  const decimalSeparator = options?.decimalSeparator ?? ",";
  const thousandSeparator = options?.thousandSeparator ?? " ";

  const parts = value.toFixed(2).split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
  const decimalPart = parts[1];

  return integerPart + decimalSeparator + decimalPart;
}