
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarInput,
} from '@/components/ui/sidebar';
import {Icons} from '@/components/icons';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {ProjectDashboard} from '@/components/project-dashboard';

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarTrigger className="md:hidden"/>
          <h2 className="px-2 text-lg font-semibold">InvertFlow</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarInput placeholder="Search..."/>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={true} tooltip="Dashboard">
                  <Icons.home className="mr-2 h-4 w-4"/>
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Projects">
                  <Icons.kanbanSquare className="mr-2 h-4 w-4"/>
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Tasks">
                  <Icons.listChecks className="mr-2 h-4 w-4"/>
                  <span>Tasks</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Users">
                  <Icons.users className="mr-2 h-4 w-4"/>
                  <span>Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Reports">
                  <Icons.fileText className="mr-2 h-4 w-4"/>
                  <span>Reports</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-full rounded-md px-2 text-left text-sm font-medium [&[data-state=open]svg]:rotate-180">
                <Avatar className="mr-2 h-5 w-5">
                  <AvatarImage src="https://picsum.photos/50/50" alt="Avatar"/>
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <span>colin.motherby@example.com</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col p-4">
        <ProjectDashboard />
      </div>
    </div>
  );
}
