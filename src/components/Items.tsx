import LazyLoad from "./LazyLoad";

const imageUrls = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNLlNK%2FbtsHv7pqi0Y%2FjsPrlQVgHluhREFxXKa8R0%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8v5a5%2FbtsHvsU6rxV%2FwdkRBBULr4yQC6wEYa3QbK%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAHvGH%2FbtsHvJI6D7I%2FLVnF4vyCVrkZdL4at8zuhk%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHJIV9%2FbtsHudR726B%2FgM3b2zB4GyKWhX68kjcNKk%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGO9FX%2FbtsHuPXnxa7%2FS7kOsKk6HQm2aq3LvGI9xk%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbD8Hyb%2FbtsHwrHMSQt%2Fuplu6wzEPMTKOxF6ZNuv30%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhNyqF%2FbtsHulCtSOh%2Fq0J21YA1MSwf9Eha9rhMo1%2Fimg.jpg",
];

const ImageList = () => {
  return (
    <div>
      {imageUrls.map((src, index) => (
        <LazyLoad
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          type="src"
          loadedClassName={"loaded"}
        />
      ))}
      {imageUrls.map((src, index) => (
        <LazyLoad
          key={index + imageUrls.length}
          src={src}
          alt={`Background Image ${index + 1}`}
          type="background"
          loadedClassName={"loaded"}
        >
          {`Background Image ${index + 1}`}
        </LazyLoad>
      ))}
    </div>
  );
};

export default ImageList;
