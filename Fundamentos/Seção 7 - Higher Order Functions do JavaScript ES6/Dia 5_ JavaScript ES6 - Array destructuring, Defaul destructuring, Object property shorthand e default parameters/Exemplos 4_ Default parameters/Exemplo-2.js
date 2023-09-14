const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome pessoa usuária!
