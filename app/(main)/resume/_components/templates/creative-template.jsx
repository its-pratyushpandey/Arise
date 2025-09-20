import React from "react";
export default function CreativeTemplate({ data, user }) {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 rounded-2xl shadow-xl text-gray-900 font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-4xl font-extrabold text-pink-700 drop-shadow">{user?.fullName || "Your Name"}</h1>
        <div className="text-sm text-blue-700 mt-2 md:mt-0">
          {data.contactInfo?.email && <span className="mr-2">📧 {data.contactInfo.email}</span>}
          {data.contactInfo?.mobile && <span className="mr-2">📱 {data.contactInfo.mobile}</span>}
          {data.contactInfo?.linkedin && <span className="mr-2">💼 <a href={data.contactInfo.linkedin} className="underline">LinkedIn</a></span>}
          {data.contactInfo?.twitter && <span>🐦 <a href={data.contactInfo.twitter} className="underline">Twitter</a></span>}
        </div>
      </div>
      {data.summary && (
        <section className="mb-5">
          <h2 className="text-xl font-semibold text-pink-700 mb-1">Summary</h2>
          <p className="bg-white rounded p-3 shadow-inner">{data.summary}</p>
        </section>
      )}
      {data.skills && (
        <section className="mb-5">
          <h2 className="text-xl font-semibold text-pink-700 mb-1">Skills</h2>
          <p className="bg-white rounded p-3 shadow-inner">{data.skills}</p>
        </section>
      )}
      {data.experience?.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xl font-semibold text-pink-700 mb-1">Experience</h2>
          <ul className="space-y-3">
            {data.experience.map((exp, i) => (
              <li key={i} className="bg-pink-50 rounded-lg p-3 border border-pink-100 shadow">
                <div className="font-bold text-pink-900">{exp.title} @ {exp.organization}</div>
                <div className="text-xs text-pink-500">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</div>
                <div>{exp.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.education?.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xl font-semibold text-pink-700 mb-1">Education</h2>
          <ul className="space-y-3">
            {data.education.map((edu, i) => (
              <li key={i} className="bg-pink-50 rounded-lg p-3 border border-pink-100 shadow">
                <div className="font-bold text-pink-900">{edu.title} @ {edu.organization}</div>
                <div className="text-xs text-pink-500">{edu.startDate} - {edu.current ? "Present" : edu.endDate}</div>
                <div>{edu.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.projects?.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xl font-semibold text-pink-700 mb-1">Projects</h2>
          <ul className="space-y-3">
            {data.projects.map((proj, i) => (
              <li key={i} className="bg-pink-50 rounded-lg p-3 border border-pink-100 shadow">
                <div className="font-bold text-pink-900">{proj.title} @ {proj.organization}</div>
                <div className="text-xs text-pink-500">{proj.startDate} - {proj.current ? "Present" : proj.endDate}</div>
                <div>{proj.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
