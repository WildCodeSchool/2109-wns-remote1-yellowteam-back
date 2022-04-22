const getFileType = (name: string): string => {
  const splited = name.split('.');
  return splited[splited.length - 1] || 'unknown';
};

export default getFileType;
