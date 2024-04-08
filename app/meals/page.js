import Link from "next/link";
export default function meals() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/ciao">Slug page</Link>
      </p>
    </main>
  );
}
