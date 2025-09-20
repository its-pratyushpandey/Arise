import React from "react";
export default function ExecutiveTemplate({ data, user }) {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-white border-l-8 border-gray-800 rounded-xl shadow text-gray-900 font-serif">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-4xl font-extrabold text-gray-800">{user?.fullName || "Your Name"}</h1>
        <div className="text-sm text-gray-700 mt-2 md:mt-0">
          {data.contactInfo?.email && <span className="mr-2">{data.contactInfo.email}</span>}
          {data.contactInfo?.mobile && <span className="mr-2">{data.contactInfo.mobile}</span>}
          {data.contactInfo?.linkedin && <span className="mr-2"><a href={data.contactInfo.linkedin} className="underline">LinkedIn</a></span>}
          {data.contactInfo?.twitter && <span><a href={data.contactInfo.twitter} className="underline">Twitter</a></span>}
        </div>
      </div>
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Executive Summary</h2>
          <p className="bg-gray-50 rounded p-3 shadow-inner">{data.summary}</p>
        </section>
      )}
      {data.skills && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Core Competencies</h2>
          <p className="bg-gray-50 rounded p-3 shadow-inner">{data.skills}</p>
        </section>
      )}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Leadership Experience</h2>
          <ul className="space-y-3">
            {data.experience.map((exp, i) => (
              <li key={i} className="bg-white rounded-lg p-3 border border-gray-200 shadow">
                <div className="font-bold text-gray-900">{exp.title} @ {exp.organization}</div>
                <div className="text-xs text-gray-500">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</div>
                <div>{exp.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Education</h2>
          <ul className="space-y-3">
            {data.education.map((edu, i) => (
              <li key={i} className="bg-white rounded-lg p-3 border border-gray-200 shadow">
                <div className="font-bold text-gray-900">{edu.title} @ {edu.organization}</div>
                <div className="text-xs text-gray-500">{edu.startDate} - {edu.current ? "Present" : edu.endDate}</div>
                <div>{edu.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Key Projects</h2>
          <ul className="space-y-3">
            {data.projects.map((proj, i) => (
              <li key={i} className="bg-white rounded-lg p-3 border border-gray-200 shadow">
                <div className="font-bold text-gray-900">{proj.title} @ {proj.organization}</div>
                <div className="text-xs text-gray-500">{proj.startDate} - {proj.current ? "Present" : proj.endDate}</div>
                <div>{proj.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
