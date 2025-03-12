/** HTML 태그 제거 */
export const removeHtmlTags = (input: string): string => {
  return input.replace(/<.*?>/g, "");
};
