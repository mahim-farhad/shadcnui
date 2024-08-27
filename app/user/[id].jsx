import getUser from '@api/fecthUserApi';

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const user = await getUser(`/users/me?populate=*`);

    return { props: { user } };
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return { props: { user: null } };
  }
}

const UserPage = ({ user }) => {
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;
