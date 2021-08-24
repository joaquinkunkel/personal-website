const ArticleImage = ({color, imgSrc}) => (
  <div
    style={{
      textAlign: 'center',
      maxHeight: 360,
      borderRadius: 4,
      position: 'relative',
    }}
  >
    <div
      style={{borderRadius: 4, position: 'absolute', zIndex: -2, top: 0, left: 0, width: '100%', height: 360, background: color}}
    />
    <img
      style={{
        maxHeight: 360,
        height: 'auto',
        maxWidth: '100%',
      }} src={imgSrc}
    />
  </div>
);

export default ArticleImage;
