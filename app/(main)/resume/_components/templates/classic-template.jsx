import React from "react";
export default function ClassicTemplate({ data, user }) {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-900 font-serif">
      <h1 className="text-3xl font-bold text-center mb-2">{user?.fullName || "Your Name"}</h1>
      <div className="text-center text-sm mb-4">
        {data.contactInfo?.email && <span className="mr-2">📧 {data.contactInfo.email}</span>}
        {data.contactInfo?.mobile && <span className="mr-2">📱 {data.contactInfo.mobile}</span>}
        {data.contactInfo?.linkedin && <span className="mr-2">💼 <a href={data.contactInfo.linkedin} className="underline text-blue-600">LinkedIn</a></span>}
        {data.contactInfo?.twitter && <span>🐦 <a href={data.contactInfo.twitter} className="underline text-blue-600">Twitter</a></span>}
      </div>
      {data.summary && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Professional Summary</h2>
          <p>{data.summary}</p>
        </section>
      )}
      {data.skills && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Skills</h2>
          <p>{data.skills}</p>
        </section>
      )}
      {data.experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Work Experience</h2>
          <ul className="space-y-2">
            {data.experience.map((exp, i) => (
              <li key={i}>
                <div className="font-bold">{exp.title} @ {exp.organization}</div>
                <div className="text-xs text-gray-600">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</div>
                <div>{exp.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.education?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Education</h2>
          <ul className="space-y-2">
            {data.education.map((edu, i) => (
              <li key={i}>
                <div className="font-bold">{edu.title} @ {edu.organization}</div>
                <div className="text-xs text-gray-600">{edu.startDate} - {edu.current ? "Present" : edu.endDate}</div>
                <div>{edu.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.projects?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Projects</h2>
          <ul className="space-y-2">
            {data.projects.map((proj, i) => (
              <li key={i}>
                <div className="font-bold">{proj.title} @ {proj.organization}</div>
                <div className="text-xs text-gray-600">{proj.startDate} - {proj.current ? "Present" : proj.endDate}</div>
                <div>{proj.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}