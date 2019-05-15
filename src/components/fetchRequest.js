export default function getLatestNewsData() {
  const url =
      'https://firestore.googleapis.com/v1/projects/peninsula-advice-mobile-db-dev/databases/(default)/documents/ESLatestNews/';
  const options = {
      method: 'GET',
  };

  return fetch(url, options)
      .then(response => response.json())
      .then(feed => feed.documents.map(d => d.fields))
      .catch(error => error);
}
