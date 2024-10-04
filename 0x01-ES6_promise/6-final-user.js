import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let userData;
  try {
    const user = await signUpUser(firstName, lastName);
    userData = {
      status: 'fulfilled',
      value: user,
    };
  } catch (error) {
    userData = {
      status: 'rejected',
      value: error.toString(),
    };
  }

  let fileData;
  try {
    const photo = await uploadPhoto(fileName);
    fileData = {
      status: 'fulfilled',
      value: photo,
    };
  } catch (error) {
    fileData = {
      status: 'rejected',
      value: error.toString(),
    };
  }

  return [userData, fileData];
}
