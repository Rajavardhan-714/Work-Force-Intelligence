import { Employee, Project, Skill, TrainingCourse, SystemAlert, RebalanceSuggestion } from '../types';

/**
 * Enterprise Workforce Intelligence Dataset
 * Generated directly from workforce_employee_dataset.xlsx (Nimbus Technologies)
 * Contains 120 employees, 7 projects, 16 skills, 20 training courses, and rebalancing scenarios.
 */

export const INITIAL_SKILLS: Skill[] = [
  {
    "id": "python",
    "name": "Python",
    "category": "Engineering",
    "description": "Python enterprise competency and methodologies"
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "category": "Engineering",
    "description": "JavaScript enterprise competency and methodologies"
  },
  {
    "id": "react",
    "name": "React",
    "category": "Engineering",
    "description": "React enterprise competency and methodologies"
  },
  {
    "id": "nodejs",
    "name": "Node.js",
    "category": "Engineering",
    "description": "Node.js enterprise competency and methodologies"
  },
  {
    "id": "sql",
    "name": "SQL",
    "category": "Data & AI",
    "description": "SQL enterprise competency and methodologies"
  },
  {
    "id": "cloud",
    "name": "Cloud Computing (AWS/Azure)",
    "category": "Cloud & Ops",
    "description": "Cloud Computing (AWS/Azure) enterprise competency and methodologies"
  },
  {
    "id": "docker_k8s",
    "name": "Docker & Kubernetes",
    "category": "Cloud & Ops",
    "description": "Docker & Kubernetes enterprise competency and methodologies"
  },
  {
    "id": "devops",
    "name": "DevOps & CI/CD",
    "category": "Cloud & Ops",
    "description": "DevOps & CI/CD enterprise competency and methodologies"
  },
  {
    "id": "data_analytics",
    "name": "Data Analytics",
    "category": "Data & AI",
    "description": "Data Analytics enterprise competency and methodologies"
  },
  {
    "id": "power_bi",
    "name": "Power BI / Tableau",
    "category": "Data & AI",
    "description": "Power BI / Tableau enterprise competency and methodologies"
  },
  {
    "id": "ml",
    "name": "Machine Learning",
    "category": "Data & AI",
    "description": "Machine Learning enterprise competency and methodologies"
  },
  {
    "id": "spark",
    "name": "Apache Spark",
    "category": "Data & AI",
    "description": "Apache Spark enterprise competency and methodologies"
  },
  {
    "id": "uiux",
    "name": "UI/UX Design",
    "category": "Product & Strategy",
    "description": "UI/UX Design enterprise competency and methodologies"
  },
  {
    "id": "qa",
    "name": "Testing & QA",
    "category": "Engineering",
    "description": "Testing & QA enterprise competency and methodologies"
  },
  {
    "id": "project_mgmt",
    "name": "Project Management",
    "category": "Product & Strategy",
    "description": "Project Management enterprise competency and methodologies"
  },
  {
    "id": "cybersecurity",
    "name": "Cybersecurity",
    "category": "Cloud & Ops",
    "description": "Cybersecurity enterprise competency and methodologies"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    "id": "P7",
    "name": "Customer Churn Analytics Platform",
    "description": "New project (Scenario A): churn prediction pipeline, cloud deployment, analytics dashboards.",
    "clientOrDept": "TeleSure",
    "priority": "Critical",
    "deadline": "Feb 26, 2027",
    "headcountNeeded": 4,
    "requiredSkills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "minProficiency": 3,
        "weight": 1
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "minProficiency": 3,
        "weight": 1
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "minProficiency": 2,
        "weight": 1
      }
    ],
    "currentMemberIds": [
      "NT-1110",
      "NT-1023",
      "NT-1085",
      "NT-1100"
    ]
  },
  {
    "id": "P1",
    "name": "Retail Demand Forecasting",
    "description": "ML forecasting for store-level demand.",
    "clientOrDept": "UrbanKart",
    "priority": "Critical",
    "deadline": "Dec 18, 2026",
    "headcountNeeded": 10,
    "requiredSkills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "minProficiency": 4,
        "weight": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "minProficiency": 4,
        "weight": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "minProficiency": 3,
        "weight": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "minProficiency": 3,
        "weight": 2
      }
    ],
    "currentMemberIds": [
      "NT-1007",
      "NT-1008",
      "NT-1010",
      "NT-1011",
      "NT-1012",
      "NT-1015",
      "NT-1016",
      "NT-1017",
      "NT-1019",
      "NT-1023",
      "NT-1026",
      "NT-1032",
      "NT-1033",
      "NT-1034",
      "NT-1040",
      "NT-1043",
      "NT-1045",
      "NT-1046",
      "NT-1047",
      "NT-1048",
      "NT-1050",
      "NT-1051",
      "NT-1052",
      "NT-1054",
      "NT-1056",
      "NT-1057",
      "NT-1061",
      "NT-1062",
      "NT-1064",
      "NT-1069",
      "NT-1074",
      "NT-1077",
      "NT-1078",
      "NT-1082",
      "NT-1083",
      "NT-1085",
      "NT-1086",
      "NT-1087",
      "NT-1088",
      "NT-1089",
      "NT-1090",
      "NT-1091",
      "NT-1092",
      "NT-1093",
      "NT-1094",
      "NT-1097",
      "NT-1098",
      "NT-1099",
      "NT-1100",
      "NT-1104",
      "NT-1105",
      "NT-1107",
      "NT-1109",
      "NT-1110",
      "NT-1111",
      "NT-1114",
      "NT-1117",
      "NT-1118",
      "NT-1119",
      "NT-1120"
    ]
  },
  {
    "id": "P2",
    "name": "Hospital Appointment Portal",
    "description": "Patient booking web app.",
    "clientOrDept": "CarePoint Health",
    "priority": "Medium",
    "deadline": "Nov 27, 2026",
    "headcountNeeded": 10,
    "requiredSkills": [
      {
        "skillId": "react",
        "skillName": "React",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "minProficiency": 3,
        "weight": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "minProficiency": 3,
        "weight": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "minProficiency": 3,
        "weight": 1
      }
    ],
    "currentMemberIds": [
      "NT-1001",
      "NT-1002",
      "NT-1003",
      "NT-1004",
      "NT-1005",
      "NT-1007",
      "NT-1008",
      "NT-1010",
      "NT-1013",
      "NT-1014",
      "NT-1018",
      "NT-1019",
      "NT-1021",
      "NT-1022",
      "NT-1024",
      "NT-1025",
      "NT-1027",
      "NT-1028",
      "NT-1029",
      "NT-1030",
      "NT-1031",
      "NT-1032",
      "NT-1036",
      "NT-1041",
      "NT-1043",
      "NT-1044",
      "NT-1047",
      "NT-1052",
      "NT-1053",
      "NT-1058",
      "NT-1059",
      "NT-1060",
      "NT-1061",
      "NT-1062",
      "NT-1063",
      "NT-1064",
      "NT-1066",
      "NT-1068",
      "NT-1070",
      "NT-1071",
      "NT-1073",
      "NT-1074",
      "NT-1075",
      "NT-1078",
      "NT-1080",
      "NT-1082",
      "NT-1084",
      "NT-1086",
      "NT-1088",
      "NT-1089",
      "NT-1090",
      "NT-1091",
      "NT-1094",
      "NT-1095",
      "NT-1097",
      "NT-1103",
      "NT-1108",
      "NT-1109",
      "NT-1112",
      "NT-1113",
      "NT-1115",
      "NT-1116",
      "NT-1118",
      "NT-1119"
    ]
  },
  {
    "id": "P3",
    "name": "Fintech Fraud Alerts",
    "description": "Real-time transaction anomaly alerts.",
    "clientOrDept": "PayNova",
    "priority": "Critical",
    "deadline": "Jan 15, 2027",
    "headcountNeeded": 10,
    "requiredSkills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "minProficiency": 4,
        "weight": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "minProficiency": 3,
        "weight": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "minProficiency": 4,
        "weight": 4
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "minProficiency": 3,
        "weight": 2
      }
    ],
    "currentMemberIds": [
      "NT-1006",
      "NT-1009",
      "NT-1011",
      "NT-1012",
      "NT-1014",
      "NT-1017",
      "NT-1023",
      "NT-1026",
      "NT-1034",
      "NT-1037",
      "NT-1039",
      "NT-1046",
      "NT-1049",
      "NT-1050",
      "NT-1051",
      "NT-1055",
      "NT-1057",
      "NT-1058",
      "NT-1076",
      "NT-1077",
      "NT-1081",
      "NT-1085",
      "NT-1087",
      "NT-1091",
      "NT-1092",
      "NT-1093",
      "NT-1096",
      "NT-1100",
      "NT-1102",
      "NT-1105",
      "NT-1114",
      "NT-1117"
    ]
  },
  {
    "id": "P4",
    "name": "Logistics Fleet Tracker App",
    "description": "Live fleet tracking web and mobile app.",
    "clientOrDept": "MoveFast Logistics",
    "priority": "Medium",
    "deadline": "Dec 11, 2026",
    "headcountNeeded": 10,
    "requiredSkills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "react",
        "skillName": "React",
        "minProficiency": 3,
        "weight": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "minProficiency": 3,
        "weight": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "minProficiency": 3,
        "weight": 2
      }
    ],
    "currentMemberIds": [
      "NT-1002",
      "NT-1003",
      "NT-1004",
      "NT-1005",
      "NT-1006",
      "NT-1007",
      "NT-1008",
      "NT-1009",
      "NT-1013",
      "NT-1016",
      "NT-1018",
      "NT-1019",
      "NT-1021",
      "NT-1022",
      "NT-1024",
      "NT-1025",
      "NT-1026",
      "NT-1027",
      "NT-1028",
      "NT-1029",
      "NT-1030",
      "NT-1031",
      "NT-1032",
      "NT-1033",
      "NT-1036",
      "NT-1038",
      "NT-1041",
      "NT-1042",
      "NT-1043",
      "NT-1044",
      "NT-1047",
      "NT-1049",
      "NT-1052",
      "NT-1055",
      "NT-1058",
      "NT-1059",
      "NT-1060",
      "NT-1063",
      "NT-1064",
      "NT-1065",
      "NT-1066",
      "NT-1070",
      "NT-1071",
      "NT-1073",
      "NT-1075",
      "NT-1080",
      "NT-1084",
      "NT-1086",
      "NT-1089",
      "NT-1090",
      "NT-1092",
      "NT-1094",
      "NT-1096",
      "NT-1101",
      "NT-1106",
      "NT-1108",
      "NT-1111",
      "NT-1112",
      "NT-1113",
      "NT-1115",
      "NT-1116",
      "NT-1119"
    ]
  },
  {
    "id": "P5",
    "name": "HR Analytics Dashboard",
    "description": "Attrition and hiring analytics dashboards.",
    "clientOrDept": "TalentBridge",
    "priority": "Medium",
    "deadline": "Nov 20, 2026",
    "headcountNeeded": 10,
    "requiredSkills": [
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "minProficiency": 4,
        "weight": 5
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "minProficiency": 4,
        "weight": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "minProficiency": 4,
        "weight": 4
      }
    ],
    "currentMemberIds": [
      "NT-1001",
      "NT-1011",
      "NT-1021",
      "NT-1033",
      "NT-1035",
      "NT-1039",
      "NT-1041",
      "NT-1045",
      "NT-1050",
      "NT-1053",
      "NT-1054",
      "NT-1056",
      "NT-1069",
      "NT-1072",
      "NT-1075",
      "NT-1079",
      "NT-1082",
      "NT-1083",
      "NT-1084",
      "NT-1085",
      "NT-1088",
      "NT-1095",
      "NT-1097",
      "NT-1098",
      "NT-1101",
      "NT-1103",
      "NT-1104",
      "NT-1107",
      "NT-1114",
      "NT-1117",
      "NT-1118",
      "NT-1120"
    ]
  },
  {
    "id": "P6",
    "name": "Cloud Migration - Legacy ERP",
    "description": "Lift and modernize on-prem ERP to cloud.",
    "clientOrDept": "SteelWorks Ltd",
    "priority": "Critical",
    "deadline": "Jan 29, 2027",
    "headcountNeeded": 10,
    "requiredSkills": [
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "minProficiency": 5,
        "weight": 4
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "minProficiency": 4,
        "weight": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "minProficiency": 4,
        "weight": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "minProficiency": 3,
        "weight": 2
      }
    ],
    "currentMemberIds": [
      "NT-1006",
      "NT-1009",
      "NT-1016",
      "NT-1020",
      "NT-1024",
      "NT-1034",
      "NT-1037",
      "NT-1038",
      "NT-1046",
      "NT-1048",
      "NT-1049",
      "NT-1055",
      "NT-1057",
      "NT-1065",
      "NT-1067",
      "NT-1073",
      "NT-1076",
      "NT-1077",
      "NT-1081",
      "NT-1083",
      "NT-1096",
      "NT-1102",
      "NT-1106"
    ]
  }
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    "id": "NT-1001",
    "name": "Pooja Mishra",
    "role": "Senior QA Engineer",
    "department": "Quality Assurance",
    "email": "pooja.mishra@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 15
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 17
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Chennai (Onsite)"
  },
  {
    "id": "NT-1002",
    "name": "Varun Teja",
    "role": "QA Engineer",
    "department": "Quality Assurance",
    "email": "varun.teja@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 21
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1003",
    "name": "Nithya Kamath",
    "role": "Frontend Developer",
    "department": "Engineering",
    "email": "nithya.kamath@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 4
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 24
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 4,
    "timezone": "Mumbai (Hybrid)"
  },
  {
    "id": "NT-1004",
    "name": "Akash Jain",
    "role": "Frontend Developer",
    "department": "Engineering",
    "email": "akash.jain@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 4
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 4
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 19
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 4,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1005",
    "name": "Harsha Kapoor",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "harsha.kapoor@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 17
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 17
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1006",
    "name": "Naveen Prasad",
    "role": "Lead DevOps Engineer",
    "department": "Platform",
    "email": "naveen.prasad@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 8
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 8
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 10
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 4,
        "yearsExperience": 8
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 10
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 10,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1007",
    "name": "Pallavi Tiwari",
    "role": "Backend Engineer",
    "department": "Engineering",
    "email": "pallavi.tiwari@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 14
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1008",
    "name": "Uday Shenoy",
    "role": "Frontend Developer",
    "department": "Engineering",
    "email": "uday.shenoy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 16
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 7
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1009",
    "name": "Pooja Narayan",
    "role": "Principal DevOps Engineer",
    "department": "Platform",
    "email": "pooja.narayan@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 12
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 3,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Security hardening",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Threat review",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 6
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1010",
    "name": "Charan Hegde",
    "role": "Principal Backend Engineer",
    "department": "Engineering",
    "email": "charan.hegde@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 31
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1011",
    "name": "Divya Menon",
    "role": "Senior Data Scientist",
    "department": "Data & Analytics",
    "email": "divya.menon@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 3,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Streaming pipeline",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 50,
    "utilizationRate": 1.25,
    "status": "overloaded",
    "experienceYears": 7,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1012",
    "name": "Isha Mehta",
    "role": "Senior ML Engineer",
    "department": "AI Lab",
    "email": "isha.mehta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 23
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1013",
    "name": "Naveen Sen",
    "role": "Associate Full-Stack Developer",
    "department": "Engineering",
    "email": "naveen.sen@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 21
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1014",
    "name": "Aarav Teja",
    "role": "Principal QA Engineer",
    "department": "Quality Assurance",
    "email": "aarav.teja@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 8
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 8
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 6
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 4,
        "yearsExperience": 11
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 9
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 15
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 14,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1015",
    "name": "Imran Sheikh",
    "role": "Data Scientist",
    "department": "Data & Analytics",
    "email": "imran.sheikh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 10
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 10,
    "utilizationRate": 0.25,
    "status": "underutilized",
    "experienceYears": 3,
    "timezone": "Mumbai (Hybrid)"
  },
  {
    "id": "NT-1016",
    "name": "Disha Iyer",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "disha.iyer@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1017",
    "name": "Keerthi Nambiar",
    "role": "Associate ML Engineer",
    "department": "AI Lab",
    "email": "keerthi.nambiar@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 23
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1018",
    "name": "Karthik Ghosh",
    "role": "Lead UI/UX Designer",
    "department": "Design",
    "email": "karthik.ghosh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 6
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 5,
        "yearsExperience": 10
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 23
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 10,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1019",
    "name": "Usha Khan",
    "role": "Associate Full-Stack Developer",
    "department": "Engineering",
    "email": "usha.khan@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 18
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1020",
    "name": "Ritika Naik",
    "role": "Senior DevOps Engineer",
    "department": "Platform",
    "email": "ritika.naik@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 6
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 3,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Network setup",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 16,
    "utilizationRate": 0.4,
    "status": "underutilized",
    "experienceYears": 6,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1021",
    "name": "Chetan Sen",
    "role": "Lead Full-Stack Developer",
    "department": "Engineering",
    "email": "chetan.sen@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 9
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1022",
    "name": "Lakshmi Chauhan",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "lakshmi.chauhan@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 15
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 19
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1023",
    "name": "Suresh Prasad",
    "role": "Senior ML Engineer",
    "department": "AI Lab",
    "email": "suresh.prasad@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 4,
        "yearsExperience": 6
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Threat review",
        "hoursPerWeek": 6
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1024",
    "name": "Harini Gupta",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "harini.gupta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 30
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 10
      },
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Security hardening",
        "hoursPerWeek": 6
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 46,
    "utilizationRate": 1.15,
    "status": "overloaded",
    "experienceYears": 5,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1025",
    "name": "Venkat Kulkarni",
    "role": "Frontend Developer",
    "department": "Engineering",
    "email": "venkat.kulkarni@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 8
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1026",
    "name": "Gautham Iyer",
    "role": "Associate ML Engineer",
    "department": "AI Lab",
    "email": "gautham.iyer@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 4,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 34
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 44,
    "utilizationRate": 1.1,
    "status": "overloaded",
    "experienceYears": 2,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1027",
    "name": "Venkat Reddy",
    "role": "Associate Frontend Developer",
    "department": "Engineering",
    "email": "venkat.reddy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 4,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 19
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Chennai (Onsite)"
  },
  {
    "id": "NT-1028",
    "name": "Vikram Nair",
    "role": "Lead Frontend Developer",
    "department": "Engineering",
    "email": "vikram.nair@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 31
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1029",
    "name": "Anjali Reddy",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "anjali.reddy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 20
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1030",
    "name": "Farhan Shenoy",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "farhan.shenoy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 2,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 26
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 10
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1031",
    "name": "Divya Kulkarni",
    "role": "Lead Full-Stack Developer",
    "department": "Engineering",
    "email": "divya.kulkarni@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 2,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 17
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 7
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1032",
    "name": "Ritika Sheikh",
    "role": "QA Engineer",
    "department": "Quality Assurance",
    "email": "ritika.sheikh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 16
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1033",
    "name": "Meera Bhandari",
    "role": "Director - Project Manager",
    "department": "Delivery",
    "email": "meera.bhandari@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 3
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 8
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 5,
        "yearsExperience": 14
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 14,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1034",
    "name": "Venkat Prasad",
    "role": "Lead DevOps Engineer",
    "department": "Platform",
    "email": "venkat.prasad@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 3,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Security hardening",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 19
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 4
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1035",
    "name": "Meera Iyer",
    "role": "Senior Data Analyst",
    "department": "Data & Analytics",
    "email": "meera.iyer@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 6
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 5
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 5,
        "yearsExperience": 6
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 22
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 22,
    "utilizationRate": 0.55,
    "status": "healthy",
    "experienceYears": 6,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1036",
    "name": "Eshwar Reddy",
    "role": "Lead UI/UX Designer",
    "department": "Design",
    "email": "eshwar.reddy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 5,
        "yearsExperience": 10
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 19
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 17
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 10,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1037",
    "name": "Eshwar Rajan",
    "role": "DevOps Engineer",
    "department": "Platform",
    "email": "eshwar.rajan@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Security hardening",
        "hoursPerWeek": 16
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Threat review",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1038",
    "name": "Pranav Bhat",
    "role": "DevOps Engineer",
    "department": "Platform",
    "email": "pranav.bhat@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Data migration",
        "hoursPerWeek": 24
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 8
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1039",
    "name": "Sowmya Kamath",
    "role": "Director - Project Manager",
    "department": "Delivery",
    "email": "sowmya.kamath@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 6
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 3
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 8
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 4,
        "yearsExperience": 11
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "ETL jobs",
        "hoursPerWeek": 31
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Streaming pipeline",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 14,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1040",
    "name": "Ramesh Mehta",
    "role": "Lead Backend Engineer",
    "department": "Engineering",
    "email": "ramesh.mehta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 8
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 12,
    "utilizationRate": 0.3,
    "status": "underutilized",
    "experienceYears": 8,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1041",
    "name": "Varun Nair",
    "role": "Principal Frontend Developer",
    "department": "Engineering",
    "email": "varun.nair@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 12
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 11
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1042",
    "name": "Vikram Hegde",
    "role": "Senior Cloud Engineer",
    "department": "Platform",
    "email": "vikram.hegde@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 3,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 14,
    "utilizationRate": 0.35,
    "status": "underutilized",
    "experienceYears": 5,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1043",
    "name": "Arjun Shenoy",
    "role": "Principal Backend Engineer",
    "department": "Engineering",
    "email": "arjun.shenoy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 5
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 18
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1044",
    "name": "Naveen Nambiar",
    "role": "Associate Frontend Developer",
    "department": "Engineering",
    "email": "naveen.nambiar@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1045",
    "name": "Lohith Nambiar",
    "role": "Senior Data Analyst",
    "department": "Data & Analytics",
    "email": "lohith.nambiar@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 7
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 7
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 8
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1046",
    "name": "Ishaan Dutta",
    "role": "Lead Security Engineer",
    "department": "Platform",
    "email": "ishaan.dutta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 4,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 17
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 4
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1047",
    "name": "Divya Acharya",
    "role": "Associate Backend Engineer",
    "department": "Engineering",
    "email": "divya.acharya@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1048",
    "name": "Gagana Ali",
    "role": "Senior Cloud Engineer",
    "department": "Platform",
    "email": "gagana.ali@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Network setup",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1049",
    "name": "Swathi Dutta",
    "role": "DevOps Engineer",
    "department": "Platform",
    "email": "swathi.dutta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Security hardening",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 22
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 4,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1050",
    "name": "Nandini Rao",
    "role": "Data Scientist",
    "department": "Data & Analytics",
    "email": "nandini.rao@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Threat review",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "ETL jobs",
        "hoursPerWeek": 7
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 4,
    "timezone": "Mumbai (Onsite)"
  },
  {
    "id": "NT-1051",
    "name": "Meera Naik",
    "role": "Associate Data Scientist",
    "department": "Data & Analytics",
    "email": "meera.naik@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Threat review",
        "hoursPerWeek": 25
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1052",
    "name": "Sowmya Gowda",
    "role": "QA Engineer",
    "department": "Quality Assurance",
    "email": "sowmya.gowda@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 14
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 7
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 4,
    "timezone": "Chennai (Onsite)"
  },
  {
    "id": "NT-1053",
    "name": "Harini Iyer",
    "role": "Senior Project Manager",
    "department": "Delivery",
    "email": "harini.iyer@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 5,
        "yearsExperience": 6
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 32
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 4
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 6,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1054",
    "name": "Aarav Iyer",
    "role": "Senior Data Analyst",
    "department": "Data & Analytics",
    "email": "aarav.iyer@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 4,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 17
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1055",
    "name": "Ananya Dutta",
    "role": "Cloud Engineer",
    "department": "Platform",
    "email": "ananya.dutta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Network setup",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1056",
    "name": "Sanjay Kamath",
    "role": "Data Analyst",
    "department": "Data & Analytics",
    "email": "sanjay.kamath@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 6
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1057",
    "name": "Pooja Desai",
    "role": "Associate Security Engineer",
    "department": "Platform",
    "email": "pooja.desai@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 4,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 15
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1058",
    "name": "Sneha Bansal",
    "role": "Senior Frontend Developer",
    "department": "Engineering",
    "email": "sneha.bansal@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 32,
    "totalAssignedHours": 21,
    "utilizationRate": 0.66,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1059",
    "name": "Vikram Gupta",
    "role": "Associate Full-Stack Developer",
    "department": "Engineering",
    "email": "vikram.gupta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 31
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1060",
    "name": "Mahesh Dutta",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "mahesh.dutta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 31
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1061",
    "name": "Trisha Kumar",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "trisha.kumar@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1062",
    "name": "Deepak Acharya",
    "role": "Associate Backend Engineer",
    "department": "Engineering",
    "email": "deepak.acharya@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1063",
    "name": "Bhavana Hiremath",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "bhavana.hiremath@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 5,
        "yearsExperience": 7
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 25
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1064",
    "name": "Pooja Tiwari",
    "role": "Associate Backend Engineer",
    "department": "Engineering",
    "email": "pooja.tiwari@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 9
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1065",
    "name": "Nandini Dutta",
    "role": "Associate Cloud Engineer",
    "department": "Platform",
    "email": "nandini.dutta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1066",
    "name": "Omkar Jain",
    "role": "Senior UI/UX Designer",
    "department": "Design",
    "email": "omkar.jain@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 5,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 22
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1067",
    "name": "Karthik Nair",
    "role": "Principal Cloud Engineer",
    "department": "Platform",
    "email": "karthik.nair@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 5,
        "yearsExperience": 11
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 9
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 9
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 3,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 28
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 11,
    "timezone": "Pune (Remote)"
  },
  {
    "id": "NT-1068",
    "name": "Sneha Kulkarni",
    "role": "Backend Engineer",
    "department": "Engineering",
    "email": "sneha.kulkarni@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 12,
    "utilizationRate": 0.3,
    "status": "underutilized",
    "experienceYears": 4,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1069",
    "name": "Mohan Bhat",
    "role": "Associate Data Analyst",
    "department": "Data & Analytics",
    "email": "mohan.bhat@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 32,
    "totalAssignedHours": 26,
    "utilizationRate": 0.81,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1070",
    "name": "Ramesh Teja",
    "role": "Senior QA Engineer",
    "department": "Quality Assurance",
    "email": "ramesh.teja@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 4,
        "yearsExperience": 6
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 8
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1071",
    "name": "Imran Tiwari",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "imran.tiwari@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 17
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1072",
    "name": "Pooja Reddy",
    "role": "Senior Data Analyst",
    "department": "Data & Analytics",
    "email": "pooja.reddy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 4,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 16,
    "utilizationRate": 0.4,
    "status": "underutilized",
    "experienceYears": 5,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1073",
    "name": "Karthik Sharma",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "karthik.sharma@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Data migration",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1074",
    "name": "Nikhil Sheikh",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "nikhil.sheikh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 24
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 4
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1075",
    "name": "Sneha Reddy",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "sneha.reddy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 5,
        "yearsExperience": 7
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 32,
    "totalAssignedHours": 24,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1076",
    "name": "Ramesh Dutta",
    "role": "Cloud Engineer",
    "department": "Platform",
    "email": "ramesh.dutta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 3
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Network setup",
        "hoursPerWeek": 28
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 6
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 4,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1077",
    "name": "Harsha Mishra",
    "role": "Principal Cloud Engineer",
    "department": "Platform",
    "email": "harsha.mishra@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 1,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Data migration",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1078",
    "name": "Deepak Sharma",
    "role": "Backend Engineer",
    "department": "Engineering",
    "email": "deepak.sharma@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Pune (Remote)"
  },
  {
    "id": "NT-1079",
    "name": "Nikhil Ali",
    "role": "Data Analyst",
    "department": "Data & Analytics",
    "email": "nikhil.ali@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 5,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 12,
    "utilizationRate": 0.3,
    "status": "underutilized",
    "experienceYears": 3,
    "timezone": "Chennai (Onsite)"
  },
  {
    "id": "NT-1080",
    "name": "Priya Teja",
    "role": "Principal UI/UX Designer",
    "department": "Design",
    "email": "priya.teja@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 8
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 2,
        "yearsExperience": 6
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 5,
        "yearsExperience": 14
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 19
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 17
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 14,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1081",
    "name": "Lakshmi Pillai",
    "role": "Principal Security Engineer",
    "department": "Platform",
    "email": "lakshmi.pillai@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 5
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 4,
        "yearsExperience": 10
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Data migration",
        "hoursPerWeek": 19
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Streaming pipeline",
        "hoursPerWeek": 11
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Chennai (Onsite)"
  },
  {
    "id": "NT-1082",
    "name": "Harini Hiremath",
    "role": "Associate QA Engineer",
    "department": "Quality Assurance",
    "email": "harini.hiremath@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 21
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1083",
    "name": "Kavya Menon",
    "role": "Assistant Project Manager",
    "department": "Delivery",
    "email": "kavya.menon@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 5,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Data migration",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1084",
    "name": "Gautham Singh",
    "role": "Associate UI/UX Designer",
    "department": "Design",
    "email": "gautham.singh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1085",
    "name": "Charan Sheikh",
    "role": "Associate Data Scientist",
    "department": "Data & Analytics",
    "email": "charan.sheikh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 1
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 1
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1086",
    "name": "Sachin Hegde",
    "role": "Backend Engineer",
    "department": "Engineering",
    "email": "sachin.hegde@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 14
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 4
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1087",
    "name": "Tejas Teja",
    "role": "ML Engineer",
    "department": "AI Lab",
    "email": "tejas.teja@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 25
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1088",
    "name": "Aditya Mehta",
    "role": "Principal Data Analyst",
    "department": "Data & Analytics",
    "email": "aditya.mehta@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 4,
        "yearsExperience": 10
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 14
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 10
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1089",
    "name": "Ritika Rajan",
    "role": "Lead Backend Engineer",
    "department": "Engineering",
    "email": "ritika.rajan@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 3
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 8,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1090",
    "name": "Manoj Naik",
    "role": "Associate Backend Engineer",
    "department": "Engineering",
    "email": "manoj.naik@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 6
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1091",
    "name": "Harini Tiwari",
    "role": "Associate QA Engineer",
    "department": "Quality Assurance",
    "email": "harini.tiwari@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 5
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1092",
    "name": "Rohan Shetty",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "rohan.shetty@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 5
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 52,
    "utilizationRate": 1.3,
    "status": "overloaded",
    "experienceYears": 6,
    "timezone": "Hyderabad (Remote)"
  },
  {
    "id": "NT-1093",
    "name": "Keerthi Teja",
    "role": "Associate ML Engineer",
    "department": "AI Lab",
    "email": "keerthi.teja@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 4,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 15
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1094",
    "name": "Bhavana Shenoy",
    "role": "Principal Backend Engineer",
    "department": "Engineering",
    "email": "bhavana.shenoy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 12
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 3,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 15
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 15
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1095",
    "name": "Sachin Prasad",
    "role": "Lead Data Analyst",
    "department": "Data & Analytics",
    "email": "sachin.prasad@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 8
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 5,
        "yearsExperience": 8
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 16
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 8,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1096",
    "name": "Arjun Patel",
    "role": "Lead Cloud Engineer",
    "department": "Platform",
    "email": "arjun.patel@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 3,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 22
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 14
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 12
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 48,
    "utilizationRate": 1.2,
    "status": "overloaded",
    "experienceYears": 8,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1097",
    "name": "Charan Jain",
    "role": "Principal Data Analyst",
    "department": "Data & Analytics",
    "email": "charan.jain@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 11
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 14
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 6
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 8
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 5,
        "yearsExperience": 14
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 20
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 8
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 14,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1098",
    "name": "Omkar Sheikh",
    "role": "Senior Data Scientist",
    "department": "Data & Analytics",
    "email": "omkar.sheikh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1099",
    "name": "Omkar Kulkarni",
    "role": "Backend Engineer",
    "department": "Engineering",
    "email": "omkar.kulkarni@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 14,
    "utilizationRate": 0.35,
    "status": "underutilized",
    "experienceYears": 3,
    "timezone": "Pune (Onsite)"
  },
  {
    "id": "NT-1100",
    "name": "Pranav Kulkarni",
    "role": "Data Scientist",
    "department": "Data & Analytics",
    "email": "pranav.kulkarni@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 3
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 8
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Threat review",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1101",
    "name": "Naveen Nair",
    "role": "Assistant Project Manager",
    "department": "Delivery",
    "email": "naveen.nair@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 4,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 6
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 30
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 1,
    "timezone": "Mumbai (Hybrid)"
  },
  {
    "id": "NT-1102",
    "name": "Suresh Desai",
    "role": "Security Engineer",
    "department": "Platform",
    "email": "suresh.desai@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 3,
        "yearsExperience": 2
      },
      {
        "skillId": "cybersecurity",
        "skillName": "Cybersecurity",
        "proficiency": 4,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 9
      },
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Infra as code",
        "hoursPerWeek": 25
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 3,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1103",
    "name": "Rakesh Hiremath",
    "role": "Assistant Project Manager",
    "department": "Delivery",
    "email": "rakesh.hiremath@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 1,
        "yearsExperience": 1
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 3,
        "yearsExperience": 1
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 2,
        "yearsExperience": 1
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 4,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 26
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 10
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1104",
    "name": "Omkar Bansal",
    "role": "Senior Data Scientist",
    "department": "Data & Analytics",
    "email": "omkar.bansal@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 15
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Remote)"
  },
  {
    "id": "NT-1105",
    "name": "Farhan Desai",
    "role": "Senior ML Engineer",
    "department": "AI Lab",
    "email": "farhan.desai@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 14
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 10
      }
    ],
    "weeklyCapacity": 32,
    "totalAssignedHours": 24,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 7,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1106",
    "name": "Manoj Mishra",
    "role": "Senior Cloud Engineer",
    "department": "Platform",
    "email": "manoj.mishra@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 4,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 4,
        "yearsExperience": 5
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 4,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P6",
        "projectName": "Cloud Migration - Legacy ERP",
        "role": "Security hardening",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 28
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 6,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1107",
    "name": "Gautham Joshi",
    "role": "Associate Data Analyst",
    "department": "Data & Analytics",
    "email": "gautham.joshi@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 2
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 4,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 17
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 17
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 34,
    "utilizationRate": 0.85,
    "status": "healthy",
    "experienceYears": 2,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1108",
    "name": "Yash Chauhan",
    "role": "Lead Full-Stack Developer",
    "department": "Engineering",
    "email": "yash.chauhan@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 1,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 31
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 5
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 36,
    "utilizationRate": 0.9,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1109",
    "name": "Ananya Menon",
    "role": "Lead QA Engineer",
    "department": "Quality Assurance",
    "email": "ananya.menon@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 6
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 8
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 1,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 4,
        "yearsExperience": 8
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 10,
    "timezone": "Mumbai (Onsite)"
  },
  {
    "id": "NT-1110",
    "name": "Ananya Rao",
    "role": "Lead Data Scientist",
    "department": "Data & Analytics",
    "email": "ananya.rao@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 4
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 24
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 24,
    "utilizationRate": 0.6,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Hyderabad (Onsite)"
  },
  {
    "id": "NT-1111",
    "name": "Harsha Shenoy",
    "role": "Senior Backend Engineer",
    "department": "Engineering",
    "email": "harsha.shenoy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Map view",
        "hoursPerWeek": 23
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 30,
    "utilizationRate": 0.75,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1112",
    "name": "Neha Pillai",
    "role": "Lead UI/UX Designer",
    "department": "Design",
    "email": "neha.pillai@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 6
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 5,
        "yearsExperience": 10
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 10
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Deploy pipeline",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 10,
    "timezone": "Hyderabad (Hybrid)"
  },
  {
    "id": "NT-1113",
    "name": "Yash Bansal",
    "role": "Senior Frontend Developer",
    "department": "Engineering",
    "email": "yash.bansal@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 5
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 5,
        "yearsExperience": 6
      },
      {
        "skillId": "devops",
        "skillName": "DevOps & CI/CD",
        "proficiency": 2,
        "yearsExperience": 2
      },
      {
        "skillId": "uiux",
        "skillName": "UI/UX Design",
        "proficiency": 3,
        "yearsExperience": 4
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 16
      },
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 10
      }
    ],
    "weeklyCapacity": 32,
    "totalAssignedHours": 26,
    "utilizationRate": 0.81,
    "status": "healthy",
    "experienceYears": 6,
    "timezone": "Bengaluru (Onsite)"
  },
  {
    "id": "NT-1114",
    "name": "Divya Desai",
    "role": "Senior Data Scientist",
    "department": "Data & Analytics",
    "email": "divya.desai@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 5,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "spark",
        "skillName": "Apache Spark",
        "proficiency": 2,
        "yearsExperience": 2
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Backtesting",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Anomaly model",
        "hoursPerWeek": 11
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Attrition report",
        "hoursPerWeek": 13
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Chennai (Hybrid)"
  },
  {
    "id": "NT-1115",
    "name": "Gagana Singh",
    "role": "Senior Full-Stack Developer",
    "department": "Engineering",
    "email": "gagana.singh@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 4,
        "yearsExperience": 4
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 3
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 1,
        "yearsExperience": 1
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Telemetry ingestion",
        "hoursPerWeek": 18
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Booking flow UI",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 32,
    "utilizationRate": 0.8,
    "status": "healthy",
    "experienceYears": 5,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1116",
    "name": "Pallavi Hegde",
    "role": "Principal Full-Stack Developer",
    "department": "Engineering",
    "email": "pallavi.hegde@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 10
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 7
      },
      {
        "skillId": "project_mgmt",
        "skillName": "Project Management",
        "proficiency": 2,
        "yearsExperience": 5
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 12
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Auth service",
        "hoursPerWeek": 16
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 12,
    "timezone": "Pune (Hybrid)"
  },
  {
    "id": "NT-1117",
    "name": "Mohan Iyer",
    "role": "Lead ML Engineer",
    "department": "AI Lab",
    "email": "mohan.iyer@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 4,
        "yearsExperience": 6
      },
      {
        "skillId": "cloud",
        "skillName": "Cloud Computing (AWS/Azure)",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "docker_k8s",
        "skillName": "Docker & Kubernetes",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 2,
        "yearsExperience": 3
      },
      {
        "skillId": "ml",
        "skillName": "Machine Learning",
        "proficiency": 5,
        "yearsExperience": 8
      }
    ],
    "assignments": [
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Model training",
        "hoursPerWeek": 9
      },
      {
        "projectId": "P3",
        "projectName": "Fintech Fraud Alerts",
        "role": "Alert rules engine",
        "hoursPerWeek": 13
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 4
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 8,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1118",
    "name": "Harini Murthy",
    "role": "Lead QA Engineer",
    "department": "Quality Assurance",
    "email": "harini.murthy@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 8
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 3,
        "yearsExperience": 6
      },
      {
        "skillId": "qa",
        "skillName": "Testing & QA",
        "proficiency": 5,
        "yearsExperience": 10
      }
    ],
    "assignments": [
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Slot scheduler API",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 7
      },
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "Data modelling",
        "hoursPerWeek": 14
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 28,
    "utilizationRate": 0.7,
    "status": "healthy",
    "experienceYears": 10,
    "timezone": "Hyderabad (Remote)"
  },
  {
    "id": "NT-1119",
    "name": "Sneha Joshi",
    "role": "Lead Full-Stack Developer",
    "department": "Engineering",
    "email": "sneha.joshi@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 2,
        "yearsExperience": 4
      },
      {
        "skillId": "javascript",
        "skillName": "JavaScript",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "react",
        "skillName": "React",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "nodejs",
        "skillName": "Node.js",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 4,
        "yearsExperience": 7
      }
    ],
    "assignments": [
      {
        "projectId": "P4",
        "projectName": "Logistics Fleet Tracker App",
        "role": "Driver app screens",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P2",
        "projectName": "Hospital Appointment Portal",
        "role": "Regression tests",
        "hoursPerWeek": 35
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Feature engineering",
        "hoursPerWeek": 9
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 48,
    "utilizationRate": 1.2,
    "status": "overloaded",
    "experienceYears": 9,
    "timezone": "Bengaluru (Hybrid)"
  },
  {
    "id": "NT-1120",
    "name": "Chetan Nair",
    "role": "Lead Data Analyst",
    "department": "Data & Analytics",
    "email": "chetan.nair@nimbustech.example",
    "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "skills": [
      {
        "skillId": "python",
        "skillName": "Python",
        "proficiency": 3,
        "yearsExperience": 5
      },
      {
        "skillId": "sql",
        "skillName": "SQL",
        "proficiency": 5,
        "yearsExperience": 9
      },
      {
        "skillId": "data_analytics",
        "skillName": "Data Analytics",
        "proficiency": 4,
        "yearsExperience": 7
      },
      {
        "skillId": "power_bi",
        "skillName": "Power BI / Tableau",
        "proficiency": 5,
        "yearsExperience": 9
      }
    ],
    "assignments": [
      {
        "projectId": "P5",
        "projectName": "HR Analytics Dashboard",
        "role": "KPI dashboards",
        "hoursPerWeek": 4
      },
      {
        "projectId": "P1",
        "projectName": "Retail Demand Forecasting",
        "role": "Forecast API",
        "hoursPerWeek": 22
      }
    ],
    "weeklyCapacity": 40,
    "totalAssignedHours": 26,
    "utilizationRate": 0.65,
    "status": "healthy",
    "experienceYears": 9,
    "timezone": "Hyderabad (Remote)"
  }
];

export const INITIAL_COURSES: TrainingCourse[] = [
  {
    "id": "T01",
    "title": "Python for Production Systems",
    "skillId": "python",
    "skillName": "Python",
    "provider": "Coursera",
    "duration": "24 hours",
    "level": "Advanced",
    "rating": 4.6,
    "associatedGapReason": "Recommended upskilling module for Python core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T02",
    "title": "Python Fundamentals Bootcamp",
    "skillId": "python",
    "skillName": "Python",
    "provider": "Udemy",
    "duration": "16 hours",
    "level": "Beginner",
    "rating": 4.7,
    "associatedGapReason": "Recommended upskilling module for Python core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T03",
    "title": "Cloud Architecture Essentials (AWS/Azure)",
    "skillId": "cloud",
    "skillName": "Cloud Computing (AWS/Azure)",
    "provider": "LinkedIn Learning",
    "duration": "20 hours",
    "level": "Intermediate",
    "rating": 4.8,
    "associatedGapReason": "Cloud architectural optimization required for scalable data lake deployment.",
    "priority": "High",
    "enrolledEmployeeIds": [],
    "targetProjectId": "P7"
  },
  {
    "id": "T04",
    "title": "Cloud Solutions Architect Prep",
    "skillId": "cloud",
    "skillName": "Cloud Computing (AWS/Azure)",
    "provider": "Internal Learning Hub",
    "duration": "32 hours",
    "level": "Advanced",
    "rating": 4.9,
    "associatedGapReason": "Cloud architectural optimization required for scalable data lake deployment.",
    "priority": "High",
    "enrolledEmployeeIds": [],
    "targetProjectId": "P7"
  },
  {
    "id": "T05",
    "title": "Data Analytics with Python and SQL",
    "skillId": "data_analytics",
    "skillName": "Data Analytics",
    "provider": "Coursera",
    "duration": "18 hours",
    "level": "Intermediate",
    "rating": 4.6,
    "associatedGapReason": "Recommended upskilling module for Data Analytics core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T06",
    "title": "Advanced Analytics and Storytelling",
    "skillId": "data_analytics",
    "skillName": "Data Analytics",
    "provider": "Udemy",
    "duration": "14 hours",
    "level": "Advanced",
    "rating": 4.7,
    "associatedGapReason": "Recommended upskilling module for Data Analytics core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T07",
    "title": "Apache Spark Essentials for Data Engineers",
    "skillId": "spark",
    "skillName": "Apache Spark",
    "provider": "LinkedIn Learning",
    "duration": "18 hours",
    "level": "Intermediate",
    "rating": 4.8,
    "associatedGapReason": "Addresses the critical Apache Spark deficit in Project P7 (Customer Churn Analytics Platform), where no team members exceed Level 2 proficiency.",
    "priority": "Critical",
    "enrolledEmployeeIds": [
      "NT-1110",
      "NT-1023",
      "NT-1085"
    ],
    "targetProjectId": "P7"
  },
  {
    "id": "T08",
    "title": "Spark Performance Tuning",
    "skillId": "spark",
    "skillName": "Apache Spark",
    "provider": "Internal Learning Hub",
    "duration": "12 hours",
    "level": "Advanced",
    "rating": 4.9,
    "associatedGapReason": "Addresses the critical Apache Spark deficit in Project P7 (Customer Churn Analytics Platform), where no team members exceed Level 2 proficiency.",
    "priority": "Critical",
    "enrolledEmployeeIds": [
      "NT-1110",
      "NT-1023",
      "NT-1085"
    ],
    "targetProjectId": "P7"
  },
  {
    "id": "T09",
    "title": "Advanced SQL for Analysts",
    "skillId": "sql",
    "skillName": "SQL",
    "provider": "Coursera",
    "duration": "12 hours",
    "level": "Intermediate",
    "rating": 4.6,
    "associatedGapReason": "Recommended upskilling module for SQL core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T10",
    "title": "Power BI Dashboard Design",
    "skillId": "power_bi",
    "skillName": "Power BI / Tableau",
    "provider": "Udemy",
    "duration": "10 hours",
    "level": "Intermediate",
    "rating": 4.7,
    "associatedGapReason": "Recommended upskilling module for Power BI / Tableau core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T11",
    "title": "Applied Machine Learning",
    "skillId": "ml",
    "skillName": "Machine Learning",
    "provider": "LinkedIn Learning",
    "duration": "28 hours",
    "level": "Intermediate",
    "rating": 4.8,
    "associatedGapReason": "Recommended upskilling module for Machine Learning core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T12",
    "title": "Kubernetes in Practice",
    "skillId": "docker_k8s",
    "skillName": "Docker & Kubernetes",
    "provider": "Internal Learning Hub",
    "duration": "16 hours",
    "level": "Intermediate",
    "rating": 4.9,
    "associatedGapReason": "Recommended upskilling module for Docker & Kubernetes core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T13",
    "title": "CI/CD Pipelines with GitHub Actions",
    "skillId": "devops",
    "skillName": "DevOps & CI/CD",
    "provider": "Coursera",
    "duration": "10 hours",
    "level": "Intermediate",
    "rating": 4.6,
    "associatedGapReason": "Recommended upskilling module for DevOps & CI/CD core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T14",
    "title": "Secure Cloud Engineering",
    "skillId": "cybersecurity",
    "skillName": "Cybersecurity",
    "provider": "Udemy",
    "duration": "20 hours",
    "level": "Advanced",
    "rating": 4.7,
    "associatedGapReason": "Recommended upskilling module for Cybersecurity core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T15",
    "title": "Modern React Patterns",
    "skillId": "react",
    "skillName": "React",
    "provider": "LinkedIn Learning",
    "duration": "14 hours",
    "level": "Intermediate",
    "rating": 4.8,
    "associatedGapReason": "Recommended upskilling module for React core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T16",
    "title": "Node.js APIs at Scale",
    "skillId": "nodejs",
    "skillName": "Node.js",
    "provider": "Internal Learning Hub",
    "duration": "14 hours",
    "level": "Intermediate",
    "rating": 4.9,
    "associatedGapReason": "Recommended upskilling module for Node.js core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T17",
    "title": "TypeScript for JavaScript Developers",
    "skillId": "javascript",
    "skillName": "JavaScript",
    "provider": "Coursera",
    "duration": "10 hours",
    "level": "Intermediate",
    "rating": 4.6,
    "associatedGapReason": "Recommended upskilling module for JavaScript core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T18",
    "title": "Design Systems for Product Teams",
    "skillId": "uiux",
    "skillName": "UI/UX Design",
    "provider": "Udemy",
    "duration": "12 hours",
    "level": "Intermediate",
    "rating": 4.7,
    "associatedGapReason": "Recommended upskilling module for UI/UX Design core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T19",
    "title": "Test Automation with Playwright",
    "skillId": "qa",
    "skillName": "Testing & QA",
    "provider": "LinkedIn Learning",
    "duration": "12 hours",
    "level": "Intermediate",
    "rating": 4.8,
    "associatedGapReason": "Recommended upskilling module for Testing & QA core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  },
  {
    "id": "T20",
    "title": "Agile Delivery and Risk Management",
    "skillId": "project_mgmt",
    "skillName": "Project Management",
    "provider": "Internal Learning Hub",
    "duration": "10 hours",
    "level": "Intermediate",
    "rating": 4.9,
    "associatedGapReason": "Recommended upskilling module for Project Management core competence.",
    "priority": "Medium",
    "enrolledEmployeeIds": []
  }
];

export const INITIAL_REBALANCE_SUGGESTIONS: RebalanceSuggestion[] = [
  {
    "id": "reb-1",
    "fromEmployeeId": "NT-1011",
    "fromEmployeeName": "Divya Menon",
    "fromAvatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    "fromInitialHours": 50,
    "toEmployeeId": "NT-1015",
    "toEmployeeName": "Imran Sheikh",
    "toAvatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    "toInitialHours": 10,
    "projectId": "P3",
    "projectName": "Fintech Fraud Alerts",
    "taskTitle": "Streaming pipeline",
    "hours": 12,
    "matchedSkill": "Python & Data Analytics",
    "rationale": "Divya Menon is at 125% capacity (50h/wk). Imran Sheikh is in Data & Analytics with Level 4 Python and Level 3 SQL at only 10h/wk (25% capacity). Reassigning the movable Streaming pipeline task drops Divya to 38h (healthy 95%) and lifts Imran to 22h (healthy 55%).",
    "status": "pending"
  },
  {
    "id": "reb-2",
    "fromEmployeeId": "NT-1024",
    "fromEmployeeName": "Harini Gupta",
    "fromAvatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "fromInitialHours": 46,
    "toEmployeeId": "NT-1040",
    "toEmployeeName": "Ramesh Mehta",
    "toAvatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    "toInitialHours": 12,
    "projectId": "P2",
    "projectName": "Hospital Appointment Portal",
    "taskTitle": "Auth service",
    "hours": 10,
    "matchedSkill": "Node.js & SQL Architecture",
    "rationale": "Harini is overloaded at 46h/wk (115%). Ramesh Mehta in Engineering has Level 5 Python, Level 4 SQL, and Level 3 Node.js with only 12h assigned (30% capacity). Transferring the Auth service task lowers Harini to 36h (90%) and raises Ramesh to 22h (55%).",
    "status": "pending"
  },
  {
    "id": "reb-3",
    "fromEmployeeId": "NT-1096",
    "fromEmployeeName": "Arjun Patel",
    "fromAvatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
    "fromInitialHours": 48,
    "toEmployeeId": "NT-1042",
    "toEmployeeName": "Vikram Hegde",
    "toAvatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    "toInitialHours": 14,
    "projectId": "P4",
    "projectName": "Logistics Fleet Tracker App",
    "taskTitle": "Map view",
    "hours": 14,
    "matchedSkill": "Cloud Computing & Docker/K8s",
    "rationale": "Arjun Patel is carrying 48h/wk (120%). Vikram Hegde in Platform has Level 4 Cloud Computing and Level 4 Docker & K8s with 14h assigned (35%). Shifting 14h lowers Arjun to 34h (85%) and raises Vikram to 28h (70%).",
    "status": "pending"
  },
  {
    "id": "reb-4",
    "fromEmployeeId": "NT-1119",
    "fromEmployeeName": "Sneha Joshi",
    "fromAvatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    "fromInitialHours": 48,
    "toEmployeeId": "NT-1068",
    "toEmployeeName": "Sneha Kulkarni",
    "toAvatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    "toInitialHours": 12,
    "projectId": "P1",
    "projectName": "Retail Demand Forecasting",
    "taskTitle": "Feature engineering",
    "hours": 9,
    "matchedSkill": "Python & Data Analytics",
    "rationale": "Sneha Joshi is overloaded at 48h/wk (120%). Sneha Kulkarni in Engineering possesses Level 4 Python, Level 4 SQL, and Level 3 Data Analytics with 12h assigned (30%). Transferring the Feature engineering task drops Sneha Joshi to 39h (healthy) and lifts Sneha Kulkarni to 21h (healthy).",
    "status": "pending"
  }
];

export const INITIAL_ALERTS: SystemAlert[] = [
  {
    "id": "alt-01",
    "type": "danger",
    "title": "Critical Skill Gap in Project P7: Customer Churn Analytics Platform",
    "description": "Apache Spark requirement (Min Level 3) is unsatisfied across the entire candidate pool. Maximum proficiency in workforce is Level 2. Linked to Course T07.",
    "timestamp": "Just now",
    "targetView": "project-match"
  },
  {
    "id": "alt-02",
    "type": "warning",
    "title": "Engineering Capacity Alert: 6 Overloaded Leads Identified",
    "description": "Divya Menon (125%), Rohan Shetty (130%), Arjun Patel (120%), and Sneha Joshi (120%) are exceeding weekly thresholds. 4 rebalancing proposals are ready.",
    "timestamp": "14m ago",
    "targetView": "workload"
  },
  {
    "id": "alt-03",
    "type": "info",
    "title": "Underutilized Capacity Available for Rebalancing",
    "description": "8 employees currently below 50% capacity (e.g. Imran Sheikh at 25%, Ramesh Mehta at 30%). 45+ unallocated engineering hours available.",
    "timestamp": "1h ago",
    "targetView": "workload"
  }
];
