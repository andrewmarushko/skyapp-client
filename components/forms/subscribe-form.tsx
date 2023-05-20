'use client';

import { FunctionComponent, useState } from 'react';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';

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
      <Button className='' variant={'subscribe'} size={'xs'} type="submit">
        {buttonLabel}
      </Button>
    </form>
  );
};
