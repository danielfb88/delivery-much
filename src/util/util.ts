export function sanitizeText(text: string): string {
  return text.replace(/\n|\r/g, '')
}
