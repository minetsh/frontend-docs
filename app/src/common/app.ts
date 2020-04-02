export const basename = '/frontend-docs';

export const fetchDocmentSource = async (uri: string): Promise<string> => {
  const response = await fetch(uri);
  return await response.text();
};
