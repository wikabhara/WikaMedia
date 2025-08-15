import Card from "@/components/card";
import React from "react";

const categoryInfo: {
  [key: string]: { title: string; image: string };
} = {
  arts: { title: "Dunia Dalam Seni", image: "/arts.jpg" },
  automobiles: { title: "Dunia Dalam Otomotif", image: "/automotive.jpg" },
  politics: { title: "Dunia Dalam Politik", image: "/politics.jpg" },
  business: { title: "Dunia Dalam Bisnis", image: "/business.jpg" },
  technology: { title: "Dunia Dalam Teknologi", image: "/technology.jpg" },
  books: { title: "Dunia Dalam Books", image: "/books.jpg" },
  fashion: { title: "Dunia Dalam Fashion", image: "/fashion.jpg" },

  food: { title: "Dunia Dalam Food", image: "/food.jpg" },
  health: { title: "Dunia Dalam Health", image: "/health.jpg" },
  science: { title: "Dunia Dalam Science", image: "/science.jpg" },
  world: { title: "Dunia Dalam World", image: "/world.jpg" },
};

async function getCategoryArticles(category: string) {
  const apiKey = process.env.NY_API_KEY;
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari NYT API");
    }
    const data = await res.json();
    return data.results as NYTArticle[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const articles = await getCategoryArticles(category);

  const currentCategoryInfo = categoryInfo[category] || {
    title: `Dunia Dalam ${
      category.charAt(0).toUpperCase() + category.slice(1)
    }`,
    image: "/backgroundhero.jpg",
  };

  return (
    <>
      <div className="bg-base-200">
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: `url('${currentCategoryInfo.image}')`,
          }}
        >
          <div className="hero-overlay bg-black/50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                {currentCategoryInfo.title}
              </h1>
              <p className="mb-5">
                Ikuti berita terhangat kategori ini dari New York Times.
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
                category={article.section || category}
                title={article.title}
                description={article.abstract}
                link={article.url}
              />
            ))
          ) : (
            <p className="col-span-full text-center">
              Gagal memuat artikel. Periksa koneksi atau API Key Anda, atau
              kategori mungkin tidak valid.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
