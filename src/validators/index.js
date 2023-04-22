export default function validate(input) {
  const err = {}
  if (!input.x) err.x = 'Required Field';
  else if (!/\w{3,}/.test(input.x)) err.x = '3 characters min';
  if (!input.y) err.y = 'Required Field';
  else if (!/\w{3,}/.test(input.y)) err.y = '3 characters min';
  if (!input.z) err.z = 'Required Field';
  else if (!/\w{3,}/.test(input.z)) err.z = '3 characters min';
  return err;
}
