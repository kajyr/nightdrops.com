const { readFileSync } = require("fs");

module.exports = function () {
  const cvJson = readFileSync("./content/cv.json", "utf-8");
  const cv = JSON.parse(cvJson);

  if (!cv || !cv.basics) {
    return null;
  }

  const basics = cv.basics;

  // Build JSON-LD Person schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: basics.name,
    url: basics.url,
    email: basics.email,
    description: basics.summary,
    sameAs: [],
  };

  // Add social profiles
  if (Array.isArray(basics.profiles)) {
    basics.profiles.forEach(profile => {
      if (profile.url) {
        schema.sameAs.push(profile.url);
      }
    });
  }

  // Add work experience as worksFor (latest 3)
  if (Array.isArray(cv.work) && cv.work.length > 0) {
    schema.worksFor = cv.work.slice(0, 3).map(job => ({
      "@type": "Organization",
      name: job.name,
      jobTitle: job.position,
    }));
  }

  // Add skills
  if (cv.skills) {
    const allSkills = [];
    if (Array.isArray(cv.skills.leadership)) {
      allSkills.push(...cv.skills.leadership);
    }
    if (Array.isArray(cv.skills.tech)) {
      allSkills.push(...cv.skills.tech);
    }
    if (allSkills.length > 0) {
      schema.knowsAbout = allSkills;
    }
  }

  // Add education
  if (Array.isArray(cv.education) && cv.education.length > 0) {
    schema.alumniOf = cv.education.map(edu => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      alumniOf: edu.studyType,
    }));
  }

  // Add languages
  if (Array.isArray(cv.languages) && cv.languages.length > 0) {
    schema.knowsLanguage = cv.languages.map(lang => ({
      "@type": "Language",
      name: lang.language,
    }));
  }

  return schema;
};
