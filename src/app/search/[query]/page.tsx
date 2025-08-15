import Card from "@/components/card";
import React from "react";
import type { Metadata } from "next";
import Swal from "sweetalert2";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ query: string }>;
}): Promise<Metadata> {
  const query = (await params).query;
  const decodedQuery = decodeURIComponent(query);
  return {
    title: `Hasil Pencarian untuk "${decodedQuery}" - WikaMedia`,
    description: `Menampilkan artikel berita dan hasil pencarian untuk "${decodedQuery}" di WikaMedia, sumber berita terpercaya Anda.`,
  };
}

async function getSearchResults(query: string) {
  const apiKey = process.env.NY_API_KEY;
  if (!apiKey) {
    throw new Error("NY_API_KEY is not defined in .env");
  }
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch search results: ${res.statusText}`);
    }
    const data = await res.json();
    return data.response.docs as NYTSearchArticle[];
  } catch (error) {
    console.error(error);
    Swal.fire("Gagal mengambil data search dari NYT API");
    return [];
  }
}

export default async function SearchPage({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const query = (await params).query;

  const decodedQuery = decodeURIComponent(query);
  const articles = await getSearchResults(decodedQuery);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">Hasil Pencarian untuk:</h1>
      <p className="text-2xl text-gray-500 mb-12">{`"${decodedQuery}"`}</p>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            const imageUrl =
              article.multimedia && article.multimedia.default
                ? article.multimedia.default.url
                : "/backgroundhero.jpg";

            return (
              <Card
                key={article._id}
                image={imageUrl}
                category={article.section_name || "Berita"}
                title={article.headline.main}
                description={article.abstract}
                link={article.web_url}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-lg">
          Tidak ada hasil yang ditemukan untuk pencarian Anda.
        </p>
      )}
    </div>
  );
}
