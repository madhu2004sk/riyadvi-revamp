import { useEffect, useState } from "react";
import api from "../services/api";
const Admin = () => {
    const [contacts, setContacts] = useState([]);
    const [leads, setLeads] = useState([]);
    const [applications, setApplications] = useState([]);
    const [healthCheckups, setHealthCheckups] = useState([]);
    const [consultations, setConsultations] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const [
                    contactsResponse,
                    leadsResponse,
                    applicationsResponse,
                    healthResponse,
                    consultationResponse,
                ] = await Promise.all([
                    api.get("/contact"),
                    api.get("/lead-magnet"),
                    api.get("/applications"),
                    api.get("/health-checkup"),
                    api.get("/consultation"),
                ]);
                setContacts(contactsResponse.data.contacts || []);
                setLeads(leadsResponse.data.leads || []);
                setApplications(
                    applicationsResponse.data.applications || []
                );
                setHealthCheckups(
                    healthResponse.data.healthCheckups || []
                );
                setConsultations(
                    consultationResponse.data.consultations || []
                );
            } catch (error) {
                console.error("Admin data error:", error);
            }
        };
        loadData();
    }, []);
    return (
        <div className="min-h-screen bg-[#050505] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-10 text-4xl font-bold">
                    Admin Dashboard
                </h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <StatCard
                        title="Contacts"
                        value={contacts.length}
                    />
                    <StatCard
                        title="Leads"
                        value={leads.length}
                    />
                    <StatCard
                        title="Applications"
                        value={applications.length}
                    />
                    <StatCard
                        title="Health Checks"
                        value={healthCheckups.length}
                    />
                    <StatCard
                        title="Consultations"
                        value={consultations.length}
                    />
                </div>
                <AdminTable
                    title="Contact Submissions"
                    data={contacts}
                    columns={["name", "email", "company", "service"]}
                />
                <AdminTable
                    title="Lead Submissions"
                    data={leads}
                    columns={["name", "email", "company", "resource"]}
                />
                <AdminTable
                    title="Applications"
                    data={applications}
                    columns={["name", "email", "position", "experience"]}
                />
                <AdminTable
                    title="Health Checkups"
                    data={healthCheckups}
                    columns={["businessName", "name", "email", "industry"]}
                />
                <AdminTable
                    title="Consultations"
                    data={consultations}
                    columns={["name", "email", "company", "service"]}
                />
            </div>
        </div>
    );
};
const StatCard = ({ title, value }) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">{title}</p>
            <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>
    );
};
const AdminTable = ({ title, data, columns }) => {
    return (
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="border-b border-white/10 p-6">
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-white/5">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column}
                                    className="px-6 py-4 capitalize"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr
                                key={item._id}
                                className="border-t border-white/10"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column}
                                        className="px-6 py-4 text-gray-300"
                                    >
                                        {item[column] || "-"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No submissions yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Admin;