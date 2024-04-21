import React from "react";
import BookCard from "./BookCard";
import Link from "next/link";
import { Book } from "@/types";
import config from "@/config";

export default async function BookList() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${config.base_url}/books`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const { books } = (await response.json()) as { books: Book[] };

  const renderBooks = () => {
    if (books.length === 0) {
      return <div>No books found</div>;
    }
    return books.map((book) => <BookCard key={book._id} book={book} />);
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {renderBooks()}
    </div>
  );
}
