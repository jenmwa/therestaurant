import { Navigation } from "../components/Navigation";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
