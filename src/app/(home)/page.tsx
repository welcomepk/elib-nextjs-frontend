import Banner from "./components/Banner";
import BookList from "./components/BookList";

import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="container-wrap">
      <Banner />
      <Suspense fallback={<h1>Loding books...</h1>}>
        <BookList />
      </Suspense>
    </div>
  );
}
