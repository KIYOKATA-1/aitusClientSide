const majors = [
  // { fullName: 'Computer Science', shortName: 'CS', subjects: 'Calculus 1', groups: ['CS-2201','CS-2202', 'CS-2203', 'CS-2204','CS-2205', 'CS-2206'] },
  { fullName: 'Software Engineering', shortName: 'SE', subjects: [
      { name: 'Calculus 2', groups: ['SE-2201', 'SE-2202', 'SE-2203', 'SE-2204'] },
      { name: 'Design and Analysis of Algorithms', groups: ['SE-2205', 'SE-2206', 'SE-2207'] },
      { name: 'Database Management Systems', groups: ['SE-2208', 'SE-2209'] }
    ]
  },
  // { fullName: 'Big Data Analysis', shortName: 'BDA', subject: 'Linear Algebra' },
  // { fullName: 'Media Technologies', shortName: 'MT', subject: 'Introduction to Programming 1' },
  // { fullName: 'Mathematical and Computational Science', shortName: 'MCS', subject: 'Probability and Statistics' },
  // { fullName: 'Big Data in Healthcare', shortName: 'BDH', subject:'Big Data Analysis'},
  // { fullName: 'Cybersecurity', shortName: 'CBS', subject: 'Introduction to Cybersecurity'},
  // { fullName: 'Industrial Internet of Things', shortName: 'IIOT', subject: 'Physical Education 1'},
  // { fullName: 'Electronic Engineering', shortName: 'EE', subject: 'Psycology' },
  // { fullName: 'IT Management', shortName: 'ITM' , subject: 'Foreign Language 1'},
  // { fullName: 'IT Entrepreneurship', shortName: 'ITE', subject: 'Information and Communication Technologies'},
  // { fullName: 'AI Business', shortName: 'AIB', subject: 'Inroduction to Chat GPT'},
  // { fullName: 'Digital Journalism', shortName: 'DJ', subject: 'How to work in Habar'},
];


const getSubjectForMajor = (shortName) => {
  const major = majors.find(major => major.shortName === shortName);
  return major ? { subjects: major.subjects, group: major.groups } : { subjects: ['Subject not found'], groups: [] };
};


export { majors, getSubjectForMajor };