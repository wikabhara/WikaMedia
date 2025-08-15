import Card from "@/components/card";
import React from "react";
import type { Metadata } from "next";
import Swal from "sweetalert2";

export const metadata: Metadata = {
  title: "WikaMedia - Berita Terkini dari Seluruh Dunia",
  description:
    "WikaMedia menyajikan berita yang akurat, terpercaya, dan mendalam dari berbagai penjuru dunia. Dapatkan informasi terbaru tentang politik, seni, otomotif, dan banyak lagi.",
};

interface NYTArticle {
  uri: string;
  url: string;
  title: string;
  abstract: string;
  section: string;
  multimedia: { url: string; format: string }[];
}

async function getHomeArticles() {
  const apiKey = process.env.NY_API_KEY;
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;

  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari NYT API");
    }
    const data = await res.json();
    return data.results as NYTArticle[];
  } catch (error) {
    console.error(error);
    Swal.fire("Gagal mengambil data search dari NYT API");
    return [];
  }
}

export default async function Home() {
  const articles = await getHomeArticles();

  return (
    <>
      <div className="bg-base-200">
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: `url('/backgroundhero.jpg')`,
          }}
        >
          <div className="hero-overlay bg-black/50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to WikaMedia</h1>
              <p className="mb-5">
                Menyajikan berita yang akurat, terpercaya, dan tidak mendalam
                dari seluruh dunia untuk Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Berita Terbaru</h2>

        <div className="flex overflow-x-auto space-x-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200 p-4 -mx-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-4/5 md:w-[45%] lg:w-[30%]"
            >
              <Card
                key={article.uri}
                image={article.multimedia?.[0]?.url || "/backgroundhero.jpg"}
                category={article.section}
                title={article.title}
                description={article.abstract}
                link={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
