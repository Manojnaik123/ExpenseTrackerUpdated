import { auth, signIn } from '@/auth';
import PageClient from './pageClient';

export default async function Home() {
  const session = await auth();

  if (!session) return;

  return (
    <>
      <PageClient name={session.user.name} image={session.user.image} email={session.user.email}/>
    </>
  );
}
