import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CustomForm from './CustomForm';

test('rendering and submitting a basic Formik form', async () => {
  const { container } = render(<CustomForm />);

  const name = container.querySelector('input[name="title"]');
  const results = container.querySelector("textarea");
  const submit = container.querySelector('[type="submit"]');

  await waitFor(() => {
    fireEvent.change(name, {
      target: {
        value: "mockname"
      }
    })
  });

  await waitFor(() => {
    fireEvent.click(submit)
  });

  expect(name.value).toBe("mockname");
});
