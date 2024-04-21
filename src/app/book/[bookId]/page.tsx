import config from "@/config";
import React from "react";
import Image from "next/image";
import { Book } from "@/types";
import DownloadButton from "./components/DownloadButton";

async function BookDetails({ params }: { params: { bookId: string } }) {
  const { bookId } = params;

  let book: Book | null = null;

  try {
    const response = await fetch(`${config.base_url}/books/${bookId}`);
    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    const data = await response.json();
    book = data.book;
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return <h1 className="container-wrap py-10 ">Book doesnt exists</h1>;
  }

  return (
    <div className="container-wrap">
      <div className="flex flex-col-reverse md:flex-row   py-10 gap-4">
        <div className=" w-full md:w-2/3 text-primary-950">
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            {book.title}
          </h2>
          <span className="font-semibold">by {book.author.name}</span>
          <p className="mt-5 text-lg leading-8">{book.description}</p>
          <DownloadButton fileLink={book.file} />
        </div>
        <div className=" w-full md:w-1/3 flex-0 ">
          <Image
            src={book.coverImage}
            alt={book.title}
            className="rounded-md  w-2/3 md:w-full mx-auto"
            height={0}
            width={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
