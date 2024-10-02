import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css'

export default function ImageSlider({url, page, limit}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);    //2
    const [errorMsg, setErrorMsg] = useState(null);         //4A
    const [loading, setLoading] = useState(false);          //4B


    async function fetchImages(getUrl){         //4, 6
        try{
            setLoading(true);

            const response = await fetch(`${getUrl}? page=${page}&limit=${limit}`); //4C, 6
            const data = await response.json();     //4C

            if(data){
                setImages(data);        //4D
                setLoading(false);
            }

        }catch(e){
            setErrorMsg(e.message);                     //4A
            setLoading(false);                          //4B
        }

    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);     //8
      }

    function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);     //10
  }

    useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);                                            //3

  console.log(images);

  if(loading){
    return <div className="heading">Loading Images. Please wait!!!</div>    //5
  }

  if(errorMsg){
    return <div>Error Occured!!! {errorMsg}</div>      //5
  }

    return <div>
        <div className="heading">
      <h1>Image Slider!</h1>
    </div>
        <div className='container container--animated '>
        <BsArrowLeftCircleFill                      //8
        onClick={handlePrevious}
        className="arrow arrow-left arrow--animated"
      />            

{images && images.length                        //9
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill           //10
        onClick={handleNext}
        className="arrow arrow-right arrow--animated"
      />
      

<span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (              //11
              <button
                key={index}
                className={
                    currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                    
                }
                onClick={() => setCurrentSlide(index)}      //12
                
              ></button>
            ))
          : null}
      </span>

    </div>
</div>

}