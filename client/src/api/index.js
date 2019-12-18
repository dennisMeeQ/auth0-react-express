import { useAuth0 } from '../auth/react-auth0-spa';

const baseUrl = process.env.API_URL || 'http://localhost:3001';

// export const secretsApi = async () => {
//   try {
//     const { getTokenSilently } = useAuth0();
//     const token = await getTokenSilently();

//     const response = await fetch(`${baseUrl}/secrets`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// module.exports = { secretsApi, turtlesApi };
