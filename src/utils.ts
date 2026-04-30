export function add(a: number, b: number): number {
  return a + b;
}

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
}
