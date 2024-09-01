import { Suspense } from 'react';

import { getUser } from '@api/users';

import Typography from '@components/ui/Typography';

export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: `${id}`,
  }
}

async function UserInfo({ id }) {
  const user = await getUser(id);

  return (
    <div>
      <Suspense fallback="Loading...">
        <Typography type="h2" className='text-gray-700'>
          {user.username}
        </Typography>

        <Typography type="h6" className='text-gray-700'>
          {user.email}
        </Typography>
      </Suspense>
    </div>
  );
}

function User({ params }) {
  const { id } = params;

  return (
    <div className='p-40'>
      <Suspense
        fallback={
          <div className="animate-pulse rounded-md bg-primary/10">
            <p>Loading feed...</p>
          </div>
        }
      >
        <UserInfo id={id} />
      </Suspense>
    </div>
  );
};

export default User;
