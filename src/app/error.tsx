'use client';

import React from 'react';

export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>An error occurred: {error.message}</div>;
}