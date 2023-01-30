import { component$, useClientEffect$ } from '@builder.io/qwik';

export default component$(() => {
  useClientEffect$(() => {
    console.log('foo');
  });

  return <div>example component</div>;
});
