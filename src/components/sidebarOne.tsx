type Organization = {
  id: string;
  name: string;
  icon: string;
  projects: {
    id: string;
    name: string;
  }[];
};

type SidebarOneProps = {
  organizations: Organization[];
  selectedOrganizationId: string;
  onOrganizationSelect: (id: string) => void;
};

function SidebarOne({
  organizations,
  selectedOrganizationId,
  onOrganizationSelect,
}: SidebarOneProps) {
  return (
    <aside className="w-16 h-full bg-[#111214] flex flex-col items-center py-3">
      {/* Organizations */}
      <div className="flex-1 flex flex-col items-center gap-2 overflow-y-auto w-full">
        {organizations.map((organization) => (
          <button
            key={organization.id}
            onClick={() => onOrganizationSelect(organization.id)}
            title={organization.name}
            className="group relative flex items-center justify-center w-full"
          >
            {/* Active indicator */}
            <div
              className={`absolute left-0 w-1 rounded-r-full bg-zinc-600 transition-all duration-200 ${
                organization.id === selectedOrganizationId ? "h-8" : "h-0"
              }`}
            />

            {/* Organization icon */}
            <div className="w-11 h-11 rounded-3xl bg-[#313338] flex items-center justify-center text-white font-semibold text-lg transition-all duration-200 group-hover:rounded-2xl group-hover:bg-[#5865f2]">
              {organization.icon}
            </div>
          </button>
        ))}
      </div>

      {/* Separator */}
      <div className="w-8 h-px bg-[#35363c] my-2" />

      {/* Create organization */}
      <button
        title="Create organization"
        className="w-11 h-11 rounded-full bg-[#313338] flex items-center justify-center text-[#23a559] text-2xl transition-all duration-200 hover:rounded-2xl hover:bg-[#23a559] hover:text-white"
      >
        +
      </button>
    </aside>
  );
}

export default SidebarOne;
