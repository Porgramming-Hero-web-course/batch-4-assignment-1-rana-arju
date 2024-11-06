// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
  name: string;
  age: number;
  email: string;
}
function updateProfile(info: Profile, updateInfo: Partial<Profile>) {
  return { ...info, ...updateInfo };
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
const updateMyProfile = updateProfile(myProfile, { age: 27 });
