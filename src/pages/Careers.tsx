import React from "react";

export default function Careers() {
  const jobs = [
    { title: "Frontend Developer", location: "Remote", type: "Full-time" },
    { title: "Customer Support Specialist", location: "New York, NY", type: "Part-time" },
    { title: "Warehouse Manager", location: "Dallas, TX", type: "Full-time" },
  ];
  return (
    <div className="container-custom py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <p className="text-muted-foreground text-lg mb-6">Join our team at EliteStore! Explore current job openings and grow your career with us.</p>
      <ul className="space-y-4">
        {jobs.map((job, idx) => (
          <li key={idx} className="p-4 border border-border rounded-lg bg-muted/50">
            <h2 className="font-semibold text-lg text-foreground">{job.title}</h2>
            <p className="text-sm text-muted-foreground">{job.location} &bull; {job.type}</p>
            <button className="mt-2 px-4 py-1 bg-primary text-primary-foreground rounded text-sm">Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
