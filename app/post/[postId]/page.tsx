import { DynamicPage } from '../../types'

interface Props {
  postId: string
}

const PostDetails = ({ params }: DynamicPage<Props>) => (
  <div>Post details {params.postId}</div>
)

export default PostDetails
