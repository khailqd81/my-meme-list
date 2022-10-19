import { useEffect, useState } from 'react';
import Gallery from './Components/Gallery';
import Button from 'react-bootstrap/Button';

function App() {
  const [memeUrlList, setMemeUrlList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      loadMemes()
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading])

  const loadMemes = async () => {
    return await fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        const tempMemeUrlList = data.data.memes.map((meme) => meme.url);
        setMemeUrlList(tempMemeUrlList);
      });
  }

  // Click Get memes button
  const handleClickGetMemeBtn = () => {
    setIsLoading(true);
  }

  return (
    <div>
      <div className="text-center mt-4">
        <Button
          onClick={isLoading ? null : handleClickGetMemeBtn}
          disabled={isLoading}
        >
          Get memes
        </Button>
      </div>
      <Gallery imageUrls={memeUrlList} />
    </div>
  );
}

export default App;
