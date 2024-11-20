const parseContent = (content) => {
  content = content.replace(/<br\s*\/?>/gi, "\n");
  content = content.replace(/<\/?[^>]+(>|$)/g, "");
  content = content.replace(/\s+/g, " ");
  return content.trim();
};

export default parseContent;
