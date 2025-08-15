import Card from "@/components/card";
import React from "react";
import type { Metadata } from "next";
import Swal from "sweetalert2";

export const metadata: Metadata = {
  title: "Dunia Dalam Seni",
  description: "Ikuti berita kesenian terhangat dari New York Times.",
};

interface NYTArticle {
  uri: string;
  url: string;
  title: string;
  abstract: string;
  section: string;
  multimedia: { url: string; format: string }[];
}

async function getArtsArticles() {
  const apiKey = process.env.NY_API_KEY;
  const url = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari NYT API");
    }
    const data = await res.json();
    return data.results as NYTArticle[];
  } catch (error) {
    Swal.fire("Gagal mengambil data dari NYT API");
    return [];
  }
}

export default async function ArtsPage() {
  const articles = await getArtsArticles();

  return (
    <>
      <div className="bg-base-200">
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: `url('/arts.jpg')`,
          }}
        >
          <div className="hero-overlay bg-black/50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Dunia Dalam Seni</h1>
              <p className="mb-5">
                Ikuti berita kesenian terhangat dari New York Times.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Card
                key={article.uri}
                image={article.multimedia?.[0]?.url || "/backgroundhero.jpg"}
                category={article.section || "arts"}
                title={article.title}
                description={article.abstract}
                link={article.url}
              />
            ))
          ) : (
            <p className="col-span-full text-center">
              Gagal memuat artikel. Periksa koneksi atau API Key Anda.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
