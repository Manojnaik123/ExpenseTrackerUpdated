import { auth } from "@/auth";
import LayoutClient from "./layoutClient";

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <LayoutClient image={session?.user?.image}>
      {children}
    </LayoutClient>
  );
}