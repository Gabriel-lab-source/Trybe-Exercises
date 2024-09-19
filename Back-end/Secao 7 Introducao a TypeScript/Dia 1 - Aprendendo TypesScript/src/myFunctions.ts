import { User } from "./types/User";
import users from "./data";

export const getUserNames = (usersList: User[]): string[] => usersList.map((user: User) => user.name);

export const getUsersByRepoQtt = (userList: User[], repositories: number): string[] => userList
.filter((user: User) => user.repositories >= repositories).map((user: User) => user.name);

export const isUserMostActive = (userName: string, userList: User[]): boolean => {
  // const userNumberOfRepos: number | undefined = userList.find((user: User) => user.name === userName)?.repositories;
  // if (userNumberOfRepos) {
  //   const isUserMostActive = userList.every((user: User) => userNumberOfRepos >= user.repositories)
  //   return isUserMostActive;
  // }
  // return false;

  const mostActiveUser = userList
  .reduce((prevUser, currUser) => prevUser.repositories > currUser.repositories ? prevUser : currUser);
  return mostActiveUser.name === userName;
}