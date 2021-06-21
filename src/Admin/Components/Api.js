const baseUrl = "https://techzum-first-default-rtdb.firebaseio.com/";

export async function GetData(URL) {
  return await send(`${baseUrl}/${URL}`, "GET");
}

export async function send(url, method) {
  //if (!url.startsWith("/")) url = "/" + url;

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
