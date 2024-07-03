import { useEffect, useState } from 'react';
import DefaultPage from '../config/layout/DefaultPage';

function Fetch() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users/Edsamn')
      .then(res => res.json())
      .then(json => setUser(json));
  }, []);

  return (
    <>
      <DefaultPage>
        {user && (
          <div>
            <h1>Dados do usuário</h1>
            <h2>Nome: {user.name}</h2>
            <img src={user.avatar_url} />
          </div>
        )}
      </DefaultPage>
    </>
  );
}

export default Fetch;
