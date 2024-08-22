import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import posts from '@/data/posts'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Post } from '@/types/posts'

interface PostsTableProps {
  limit?: number
  title?: string
}

export const PostsTable = ({ limit, title }: PostsTableProps) => {
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts

  return (
    <div className="mt-10">
      <h3 className="text-3xl mb-4 font-semibold">{title ? title : 'Posts'}</h3>
      <Table>
        <TableCaption>A list of recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="text-right hidden md:table-cell">
              Date
            </TableHead>
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((p) => {
            return (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.title}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {p.author}
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {p.date}
                </TableCell>
                <TableCell className="">
                  <Link href={`post/edit/${p.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-700 px-5">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
