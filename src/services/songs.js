const baseUrl = 'http://localhost:8000/api/songs';

const getAll = async params => {
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `Bearer ${params.token}`
    }
  });

  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
};

export default { getAll };
