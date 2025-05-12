export type FormatDateConfig = {
  includeTime?: boolean,
  separator?: string,
  minutesSeparator?: "h" | ":"
};

export function formatDate(d?: Date, config?: FormatDateConfig): string {
  return "";
}