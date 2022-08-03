const API_KEY = '../Assets/Music/';


const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${endpoint}`);
  const json = await req.json();
  return json;
}

export default{

  getHomeList: async () => {

    return [
      {
        Name: API_KEY,
        Author: 'Originais da Netflix',
        time: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  }
}