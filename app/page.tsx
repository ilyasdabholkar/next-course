"use client";
//import { Metadata } from "next";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];
          const sorted = _.orderBy(users,'name');
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

// export async function generateMetadata() : Promise<Metadata> {
//   const product = fetch('');

//   return {
//     title : "product.title",
//     description : "product.desciption"
//   }
// }

//old page.tsx
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <main>
//       <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//       <Link href="/users">Users</Link>
//       <ProductCard />
//     </main>
//   )
// }
