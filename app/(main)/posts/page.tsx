import BackButton from '@/components/BackButton'
import PostsPagination from '@/components/posts/PostsPagination'
import { PostsTable } from '@/components/posts/PostsTable'

const PostsPage = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </div>
  )
}

export default PostsPage
