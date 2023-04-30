'use client';

import { FunctionComponent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SubscriptionFormState {
  email: string;
}

interface SubscriptionFormProps {
  buttonLabel: string;
}

export const SubscriptionForm: FunctionComponent<SubscriptionFormProps> = ({
  buttonLabel,
}) => {
  const [formState, setFormState] = useState<SubscriptionFormState>({
    email: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Thanks for subscribing with email: ${formState.email}`);
    setFormState({ email: '' });
  };

  return (
    // When the subscribe route is ready on the server, it seems the functions handleInputChange and handleSubmit can be deleted as it is shown here https://nextjs.org/docs/guides/building-forms
    <form className="relative h-8" onSubmit={handleSubmit}>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="you@domain.com"
        value={formState.email}
        onChange={handleInputChange}
        required
      />
      <Button variant={'subscribe'} size={'xs'} type="submit">
        {buttonLabel}
      </Button>
    </form>
  );
};
