import React from "react";
export default function ModernATSTemplate({ data, user }) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white border-l-8 border-green-600 rounded-xl shadow text-gray-900 font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">{user?.fullName || "Your Name"}</h1>
        <div className="text-sm text-green-700 mt-2 md:mt-0">
          {data.contactInfo?.email && <span className="mr-2">{data.contactInfo.email}</span>}
          {data.contactInfo?.mobile && <span className="mr-2">{data.contactInfo.mobile}</span>}
          {data.contactInfo?.linkedin && <span className="mr-2"><a href={data.contactInfo.linkedin} className="underline">LinkedIn</a></span>}
          {data.contactInfo?.twitter && <span><a href={data.contactInfo.twitter} className="underline">Twitter</a></span>}
        </div>
      </div>
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-1">Professional Summary</h2>
          <p className="bg-white rounded p-3 shadow-inner">{data.summary}</p>
        </section>
      )}
      {data.skills && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-1">Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.split(',').map((skill, i) => <li key={i}>{skill.trim()}</li>)}
          </ul>
        </section>
      )}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-1">Work Experience</h2>
          <ul className="space-y-3">
            {data.experience.map((exp, i) => (
              <li key={i} className="bg-green-50 rounded-lg p-3 border border-green-100 shadow">
                <div className="font-bold text-green-900">{exp.title} @ {exp.organization}</div>
                <div className="text-xs text-green-500">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</div>
                <div>{exp.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-1">Education</h2>
          <ul className="space-y-3">
            {data.education.map((edu, i) => (
              <li key={i} className="bg-green-50 rounded-lg p-3 border border-green-100 shadow">
                <div className="font-bold text-green-900">{edu.title} @ {edu.organization}</div>
                <div className="text-xs text-green-500">{edu.startDate} - {edu.current ? "Present" : edu.endDate}</div>
                <div>{edu.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-1">Projects</h2>
          <ul className="space-y-3">
            {data.projects.map((proj, i) => (
              <li key={i} className="bg-green-50 rounded-lg p-3 border border-green-100 shadow">
                <div className="font-bold text-green-900">{proj.title} @ {proj.organization}</div>
                <div className="text-xs text-green-500">{proj.startDate} - {proj.current ? "Present" : proj.endDate}</div>
                <div>{proj.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
