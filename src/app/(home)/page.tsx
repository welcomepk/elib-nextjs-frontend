import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { Book } from "@/types";
import config from "@/config";
import { Suspense } from "react";

export default async function Home() {
  const response = await fetch(`${config.base_url}/books`);
  console.log(config.base_url);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const { books } = await response.json();

  return (
    <div className="container-wrap">
      <Banner />
      <Suspense fallback={<h1>Loding books...</h1>}>
        <BookList books={books} />
      </Suspense>
    </div>
  );
}
