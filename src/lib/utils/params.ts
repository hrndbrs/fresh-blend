export function getParams(params: Record<any, any>): Record<string, string> {
  return Object.fromEntries(
    Object.keys(params).map((key) => [String(key), String(params[key])])
  );
}
