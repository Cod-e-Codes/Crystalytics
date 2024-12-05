import salesDashboard from "../components/sales-dashboard.png";
import customerSegmentation from "../components/customer-segmentation.png";
import financialForecasting from "../components/financial-forecasting.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

export interface Skill {
    name: string;
    level: number;
    icon: string;
    color: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Sales Dashboard",
        description: "Interactive sales analysis dashboard built with Tableau.",
        technologies: ["Tableau", "SQL", "Excel"],
        image: salesDashboard,
        link: "#",
    },
    {
        id: 2,
        title: "Customer Segmentation",
        description: "K-means clustering to identify customer segments.",
        technologies: ["Python", "Pandas", "Matplotlib"],
        image: customerSegmentation,
        link: "#",
    },
    {
        id: 3,
        title: "Financial Forecasting",
        description: "Time-series forecasting model for revenue prediction.",
        technologies: ["R", "ggplot2", "SQL"],
        image: financialForecasting,
        link: "#",
    },
];


export const skills: Skill[] = [
    { name: "SQL", level: 95, icon: "fas fa-database", color: "#FCE0A8" },
    { name: "R", level: 90, icon: "fas fa-project-diagram", color: "#FC9A61" },
    { name: "Tableau", level: 85, icon: "fas fa-chart-line", color: "#AEFCFF" },
    { name: "Excel", level: 85, icon: "fas fa-file-excel", color: "#39B3AF" },
    { name: "Power BI", level: 80, icon: "fas fa-chart-pie", color: "#C87B49" },
    { name: "Python", level: 75, icon: "fab fa-python", color: "#FEC146" },
];

export const certifications = [
    {
        title: "Google Data Analytics Professional Certificate",
        issuingOrganization: "Google",
        issueDate: "December 2024",
    },
    {
        title: "Google Advanced Data Analytics Professional Certificate",
        issuingOrganization: "Google",
        issueDate: "December 2024",
    },
    {
        title: "IBM Data Analytics Professional Certificate",
        issuingOrganization: "IBM",
        issueDate: "December 2024",
    },
];
