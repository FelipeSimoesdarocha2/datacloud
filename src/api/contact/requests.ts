// Models
import { ContactDTO } from 'models';

// Api
import { fetcher } from '../fetch';

export const createContactRequest = async (data: ContactDTO) => {
  return fetcher('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
