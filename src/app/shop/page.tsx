import { redirect } from 'next/navigation';

function page() {
  redirect('/index.html');
  return null;
}

export default page;