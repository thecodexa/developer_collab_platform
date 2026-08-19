type Project = {
  id: string;
  name: string;
};

type Organization = {
  id: string;
  name: string;
  icon: string;
  projects: Project[];
};

type SidebarTwoProps = {
  organization: Organization | undefined;
};

function SidebarTwo({ organization }: SidebarTwoProps) {
  return (
    <aside className="min-w-0 flex-1 h-full bg-[#1e1f22] text-white flex flex-col">
      {/* Organization header */}
      <div className="h-12 px-4 flex items-center border-b border-[#2b2d31] shrink-0">
        <h2 className="font-semibold">{organization?.name}</h2>
      </div>

      {/* Projects */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="px-2 py-2 text-xs font-semibold text-gray-400">
          PROJECTS
        </div>

        <div className="flex flex-col gap-1">
          {organization?.projects.map((project) => (
            <button
              key={project.id}
              className="w-full px-2 py-2 rounded-md flex items-center gap-2 text-left text-gray-300 hover:bg-[#2b2d31] hover:text-white"
            >
              <span className="text-gray-400">#</span>

              <span>{project.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
export default SidebarTwo;
