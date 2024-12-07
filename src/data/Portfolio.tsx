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
    longDescription?: string;
    screenshots?: string[];
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
        longDescription: "This project focuses on creating a visually appealing and interactive sales dashboard using Tableau. It helps organizations analyze sales trends, track performance metrics, and identify key areas for improvement. The dashboard integrates SQL queries for data extraction and Excel for preprocessing, providing a seamless and efficient workflow.",
        technologies: ["Tableau", "SQL", "Excel"],
        image: salesDashboard,
        link: "#",
    },
    {
        id: 2,
        title: "Customer Segmentation",
        description: "K-means clustering to identify customer segments.",
        longDescription: "In this project, customer data is analyzed and segmented using K-means clustering. Python, Pandas, and Matplotlib are employed to preprocess data, perform clustering, and visualize the results. The project aids businesses in understanding customer behaviors, enhancing marketing strategies, and improving customer retention.",
        technologies: ["Python", "Pandas", "Matplotlib"],
        image: customerSegmentation,
        link: "#",
    },
    {
        id: 3,
        title: "Financial Forecasting",
        description: "Time-series forecasting model for revenue prediction.",
        longDescription: "This project involves building a time-series forecasting model to predict future revenue trends. Using R and ggplot2, historical financial data is analyzed and visualized. The project leverages SQL for data retrieval, ensuring accurate and reliable predictions for better decision-making in financial planning.",
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
