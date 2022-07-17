const baseUrl = "https://techzum-first-default-rtdb.firebaseio.com/";

export async function GetData(url) {
  return await send(`${baseUrl}/${url}`, "GET");
}

export async function put(url, method, body) {
  //if (!url.startsWith("/")) url = "/" + url;

  const response = await fetch(`${baseUrl}/${url}`, {
    method: method,
    //headers: getPrivateHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }

  return await response.json();
}

export async function send(url, method) {
  //if (!url.startsWith("/")) url = "/" + url;
  console.log(url);
  const response = await fetch(`${url}`, {
    method: method,
    //headers: getPrivateHeaders(),
    //body: (request && JSON.stringify(request)) || undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }

  return await response.json();
}
