import React from "react";
export default function FunctionalTemplate({ data, user }) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white border border-gray-400 rounded-lg text-gray-900 font-sans">
      <h1 className="text-3xl font-bold text-center mb-2">{user?.fullName || "Your Name"}</h1>
      <div className="text-center text-sm mb-4 text-gray-600">
        {data.contactInfo?.email && <span className="mr-2">{data.contactInfo.email}</span>}
        {data.contactInfo?.mobile && <span className="mr-2">{data.contactInfo.mobile}</span>}
        {data.contactInfo?.linkedin && <span className="mr-2"><a href={data.contactInfo.linkedin} className="underline">LinkedIn</a></span>}
        {data.contactInfo?.twitter && <span><a href={data.contactInfo.twitter} className="underline">Twitter</a></span>}
      </div>
      {data.summary && (
        <section className="mb-3">
          <h2 className="font-semibold mb-1">Professional Profile</h2>
          <p>{data.summary}</p>
        </section>
      )}
      {data.skills && (
        <section className="mb-3">
          <h2 className="font-semibold mb-1">Key Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.split(',').map((skill, i) => <li key={i}>{skill.trim()}</li>)}
          </ul>
        </section>
      )}
      {data.projects?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold mb-1">Projects</h2>
          <ul className="space-y-1">
            {data.projects.map((proj, i) => (
              <li key={i}>
                <div className="font-bold">{proj.title} @ {proj.organization}</div>
                <div className="text-xs text-gray-400">{proj.startDate} - {proj.current ? "Present" : proj.endDate}</div>
                <div>{proj.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.experience?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold mb-1">Relevant Experience</h2>
          <ul className="space-y-1">
            {data.experience.map((exp, i) => (
              <li key={i}>
                <div className="font-bold">{exp.title} @ {exp.organization}</div>
                <div className="text-xs text-gray-400">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</div>
                <div>{exp.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {data.education?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold mb-1">Education</h2>
          <ul className="space-y-1">
            {data.education.map((edu, i) => (
              <li key={i}>
                <div className="font-bold">{edu.title} @ {edu.organization}</div>
                <div className="text-xs text-gray-400">{edu.startDate} - {edu.current ? "Present" : edu.endDate}</div>
                <div>{edu.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
