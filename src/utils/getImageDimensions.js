const getImageDimensions = (image, windowDimensions, isSelected) => {
  const {height, width} = windowDimensions;
  const imageHeight = image.height;
  const imageWidth = image.width;

  if (imageWidth > imageHeight) {
    const renderHeight = Math.min(
      imageHeight * ((width - 40) / imageWidth),
      height - 300,
    );
    return {
      width: width - 40,
      height: isSelected ? renderHeight : renderHeight - 100,
    };
  } else {
    const renderWidth = Math.min(
      imageWidth * ((height - 300) / imageHeight),
      width - 40,
    );
    return {
      width: renderWidth,
      height: isSelected ? height - 300 : height - 400,
    };
  }
};

export default getImageDimensions;
