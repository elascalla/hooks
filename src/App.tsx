import React, { useState,
     useEffect, 
     useMemo, 
     useCallback, 
     useRef} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);
  const greeting = useCallback(() => alert(`Hello ${names}`), [names]);

  async function loadData() {
    const response = await fetch('https://api.github.com/users/elascalla');
    const data = await response.json();

    setUsers([data]);
  }

  useEffect(() => {
    loadData();
  }, []);

  inputRef.current?.focus();

  return (
    <>
      <div>
        {/*Optional chaning operator*/}
        {users?.map(user => user.name)} 
      </div>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </>
  );
}

export default App;
