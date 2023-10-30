import DashboardShell from "@/components/dashboard-shell"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-row bg-background">
      <Sidebar />
      <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />
        <DashboardShell>{children}</DashboardShell>
      </div>
    </div>
  )
}

export default DashboardLayout
