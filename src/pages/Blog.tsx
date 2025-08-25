import React from "react";

export default function Blog() {
  const posts = [
    { title: "How to Choose the Best Products", date: "Aug 10, 2025" },
    { title: "EliteStore Summer Sale Announced!", date: "Jul 25, 2025" },
    { title: "Customer Success Stories", date: "Jul 5, 2025" },
  ];
  return (
    <div className="container-custom py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-muted-foreground text-lg mb-6">Read the latest news, tips, and updates from EliteStore on our blog.</p>
      <ul className="space-y-4">
        {posts.map((post, idx) => (
          <li key={idx} className="p-4 border border-border rounded-lg bg-muted/50">
            <h2 className="font-semibold text-lg text-foreground">{post.title}</h2>
            <p className="text-sm text-muted-foreground">{post.date}</p>
            <button className="mt-2 px-4 py-1 bg-primary text-primary-foreground rounded text-sm">Read More</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
