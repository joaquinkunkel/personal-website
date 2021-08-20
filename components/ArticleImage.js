const ArticleImage = ({color, imgSrc}) => (
  <div
    style={{
      textAlign: 'center',
      maxHeight: 400,
      borderRadius: 4,
      position: 'relative',
    }}
  >
    <div
      style={{borderRadius: 4, position: 'absolute', zIndex: -2, top: 0, left: 0, width: '100%', height: 400, background: color}}
    />
    <img
      style={{
        maxHeight: 400,
        height: 'auto',
        maxWidth: '100%',
      }} src={imgSrc}
    />
  </div>
);

export default ArticleImage;
