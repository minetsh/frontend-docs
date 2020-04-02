export const basename = '/frontend-docs';

const prefix = process.env.NODE_ENV === 'production' ? '..' : '';
export const fetchDocmentSource = async (uri: string): Promise<string> => {
  const response = await fetch(`${prefix}${uri}`);
  return await response.text();
};
