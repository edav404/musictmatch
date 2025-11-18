import { useState, useEffect } from 'react';
import { users } from '../data/users';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check for a logged in user in sessionStorage on initial load
    const loggedInUser = sessionStorage.getItem('currentUser');
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    }
    return null;
  };

  const register = (username, email, password) => {
    // In a real app, you'd want to check if the user already exists
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password,
      avatar: `https://i.pravatar.cc/150?u=${email}`,
      favoriteGenres: [],
      likedSongs: [],
    };
    // In a real app, you would save this to a database.
    // For this project, we're not persisting new users.
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    setCurrentUser(newUser);
    return newUser;
  };

  const logout = () => {
    sessionStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  return { currentUser, login, register, logout };
};
