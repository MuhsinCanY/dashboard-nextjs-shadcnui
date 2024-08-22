import { DashboardCard } from '@/components/dashboard/DashboardCard'
import { PostsTable } from '@/components/posts/PostsTable'
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={
            <Newspaper
              className="text-slate-500 dark:text-slate-200"
              size={72}
            />
          }
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={
            <Folder className="text-slate-500 dark:text-slate-200" size={72} />
          }
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={
            <User className="text-slate-500 dark:text-slate-200" size={72} />
          }
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={
            <MessageCircle
              className="text-slate-500 dark:text-slate-200"
              size={72}
            />
          }
        />
      </div>
      <PostsTable limit={5} title="Latest Posts" />
    </>
  )
}
