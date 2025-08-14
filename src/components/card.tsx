import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

export default function Card({
  image,
  category,
  title,
  description,
  link,
}: CardProps) {
  return (
    <div className="card bg-base-100 shadow-2xs overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <figure>
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="card-body p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="badge badge-primary">{category}</div>
        </div>
        <h2 className="card-title text-xl font-bold mb-2">{title}</h2>
        <p className="text-base text-gray-600 mb-4">{description}</p>
        <div className="card-actions justify-end">
          <Link href={link} className="btn btn-accent text-white">
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}
