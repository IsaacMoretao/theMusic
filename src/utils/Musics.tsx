const API_KEY = '61f27a1bf2mshfb0f043e9f7c322p145e9ajsnf77109910b5d';


const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${endpoint}`);
  const json = await req.json();
  return json;
}

export default{

  getHomeList: async () => {

    return [
      {
        title: API_KEY,
        Author: 'subtitle',
        time: await basicFetch(`url`)
      },
    ]
  }
}