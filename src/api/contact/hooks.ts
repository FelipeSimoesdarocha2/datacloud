// React-query
import { useMutation } from '@tanstack/react-query';

// Models
import { ContactDTO } from 'models';

// Request
import { createContactRequest } from './requests';

export const useCreateContact = () => useMutation(getRequestWrapper);

const getRequestWrapper = async (data: ContactDTO) => {
  return createContactRequest(data);
};
