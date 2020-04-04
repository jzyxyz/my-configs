import { readFileSync } from 'fs'

export const readJson = (pathTo: string) => {
  const f = readFileSync(pathTo).toString()
  return JSON.parse(f)
}
