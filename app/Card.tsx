import Link from 'next/link';

import { Post } from './types';

type Props = Post & { categoryNames: (string | undefined)[] };

const Card = ({ id, categoryNames }: Props) => {
  return (
    <Link
      href={`/post/${id}`}
      className="rounded-2xl border-2 border-solid border-gray-300 p-4 shadow-[0.2rem_0.2rem_0.8rem_rgba(0,0,0,0.2)] dark:border-gray-400 dark:shadow-cyan-900"
    >
      <div>Post card</div>
      <div>
        {categoryNames.map((name, index) => (
          <span key={index}>{name}</span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
