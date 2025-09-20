import React from "react";
export default function TimelineTemplate({ data, user }) {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-white border-l-8 border-purple-700 rounded-xl shadow text-gray-900 font-sans">
      <h1 className="text-4xl font-extrabold text-purple-700 text-center mb-4">{user?.fullName || "Your Name"}</h1>
      <div className="text-center text-sm mb-6 text-gray-600">
        {data.contactInfo?.email && <span className="mr-2">{data.contactInfo.email}</span>}
        {data.contactInfo?.mobile && <span className="mr-2">{data.contactInfo.mobile}</span>}
        {data.contactInfo?.linkedin && <span className="mr-2"><a href={data.contactInfo.linkedin} className="underline">LinkedIn</a></span>}
        {data.contactInfo?.twitter && <span><a href={data.contactInfo.twitter} className="underline">Twitter</a></span>}
      </div>
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-purple-700 mb-1">Summary</h2>
          <p className="bg-purple-50 rounded p-3 shadow-inner">{data.summary}</p>
        </section>
      )}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          {data.experience?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-purple-700 mb-1">Experience Timeline</h2>
              <ul className="border-l-2 border-purple-300 pl-4">
                {data.experience.map((exp, i) => (
                  <li key={i} className="mb-6 relative">
                    <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-700 rounded-full"></span>
                    <div className="font-bold">{exp.title} @ {exp.organization}</div>
                    <div className="text-xs text-purple-500">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</div>
                    <div>{exp.description}</div>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {data.projects?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-purple-700 mb-1">Projects</h2>
              <ul className="border-l-2 border-purple-300 pl-4">
                {data.projects.map((proj, i) => (
                  <li key={i} className="mb-6 relative">
                    <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-400 rounded-full"></span>
                    <div className="font-bold">{proj.title} @ {proj.organization}</div>
                    <div className="text-xs text-purple-500">{proj.startDate} - {proj.current ? "Present" : proj.endDate}</div>
                    <div>{proj.description}</div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        <div className="flex-1">
          {data.education?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-purple-700 mb-1">Education Timeline</h2>
              <ul className="border-l-2 border-purple-300 pl-4">
                {data.education.map((edu, i) => (
                  <li key={i} className="mb-6 relative">
                    <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-300 rounded-full"></span>
                    <div className="font-bold">{edu.title} @ {edu.organization}</div>
                    <div className="text-xs text-purple-500">{edu.startDate} - {edu.current ? "Present" : edu.endDate}</div>
                    <div>{edu.description}</div>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {data.skills && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-purple-700 mb-1">Skills</h2>
              <ul className="flex flex-wrap gap-2">
                {data.skills.split(',').map((skill, i) => (
                  <li key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">{skill.trim()}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
