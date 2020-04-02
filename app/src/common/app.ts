export const basename = '/frontend-docs';

const prefix = process.env.NODE_ENV === 'production' ? basename : '';

export const fetchDocmentSource = (uri: string): Promise<string> => {
  return fetch(`${prefix}${uri}`).then(response => response.text());
};
