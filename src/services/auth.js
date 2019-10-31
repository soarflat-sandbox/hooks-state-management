const baseUrl = 'http://localhost:8000/api/login';

const login = async params => {
  const response = await fetch(baseUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: params.email,
      password: params.password
    })
  });

  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
};

export default { login };
