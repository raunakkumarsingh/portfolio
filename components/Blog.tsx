
import Image from "next/image";
import {medium} from "@/public/assets";
import React from 'react';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: '/images/blog/medium.png',
        title: 'Paddle OCR models accuracy comparison',
        description: 'An in-depth comparison of Paddle OCR models and their accuracy.',
        date: 'Feb 12, 2025',
        link: 'https://medium.com/@raunakkumar.india/paddle-ocr-models-accuracy-comparison-49b85e7e4126',
    },
    {
        id: 2,
        image: '/images/hyperledger-fabric.jpg',
        title: 'Hyperledger Fabric Installation',
        description: 'Step-by-step guide to installing Hyperledger Fabric.',
        date: 'Jul 11, 2024',
        link: 'https://medium.com/@raunakkumar.india/hyperledger-fabric-installation-efa1dc795e22',
    },
    {
        id: 3,
        image: '/images/nginx-vps.jpg',
        title: 'Install and configure Nginx in VPS',
        description: 'Learn how to install and configure Nginx on a VPS.',
        date: 'May 15, 2024',
        link: '/blog/nginx-vps-setup',
    },
    {
        id: 4,
        image: '/images/mapreduce.jpg',
        title: 'Write a MapReduce program',
        description: 'Count regex matches in a file using a MapReduce program.',
        date: 'May 9, 2024',
        link: 'https://medium.com/@raunakkumar.india/install-and-configure-nginx-in-vps-57989ed9cdc1',
    },
    {
        id: 5,
        image: '/images/xacc-installation.jpg',
        title: 'XACC Installation on Cent OS 8 & 9',
        description: 'Guide to installing XACC on Cent OS 8 and 9.',
        date: 'May 9, 2024',
        link: 'https://medium.com/@raunakkumar.india/write-a-mapreduce-program-that-counts-the-matches-of-a-string-regex-in-the-input-file-iiit-txt-e1916dedf8d1',
    },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
        <div
                    key={post.id}
                    className="bg-[rgb(17,34,64,var(--tw-bg-opacity,1))] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                    <div className="relative w-full h-48 bg-white">
                        <Image
                            className="object-cover"
                            src={medium}
                            alt="image not found"
                            layout="fill"
                        />
                    </div>
                    <div className="p-4 flex-grow">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                        <p className="text-gray-500 text-xs mb-4">{post.date}</p>
                    </div>
                    <div className="p-4">
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Read More
                        </a>
                    </div>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;