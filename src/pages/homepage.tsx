import SidebarOne from "../components/sidebarOne";
import SidebarTwo from "../components/sidebarTwo";
import Playground from "../components/playground";
import { useState } from "react";

export default function Homepage() {
  const organizations = [
    {
      id: "1",
      name: "JUET",
      icon: "J",
      projects: [
        { id: "1", name: "Developer Platform" },
        { id: "2", name: "College Website" },
        { id: "3", name: "Coding Club" },
      ],
    },
    {
      id: "2",
      name: "Developer Hub",
      icon: "D",
      projects: [
        { id: "4", name: "Website" },
        { id: "5", name: "Mobile App" },
      ],
    },
    {
      id: "3",
      name: "CodeXa",
      icon: "C",
      projects: [
        { id: "6", name: "Frontend" },
        { id: "7", name: "Backend" },
      ],
    },
  ];

  const [selectedOrganizationId, setSelectedOrganizationId] = useState("1");

  const selectedOrganization = organizations.find(
    (organization) => organization.id === selectedOrganizationId,
  );

  return (
    <div className="flex h-screen w-full">
      <SidebarOne
        organizations={organizations}
        selectedOrganizationId={selectedOrganizationId}
        onOrganizationSelect={setSelectedOrganizationId}
      />
      <div className="w-70">
        <SidebarTwo organization={selectedOrganization} />
      </div>
      <Playground />
    </div>
  );
}
