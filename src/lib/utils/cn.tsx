// utils.ts or cn.ts (depending on your folder structure)

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
