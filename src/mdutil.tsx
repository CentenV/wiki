/**
 * Reads the Markdown file and updates the state function passed in 
 * @param file File path for in /public
 * @param updateFn React useState update method
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export async function readMarkdownFile(file: string, updateFn: Function) {
  const fileContents = await fetch(file).then(res => res.text())
  updateFn(fileContents);
}