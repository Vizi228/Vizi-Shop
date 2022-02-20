export default function Dots({ items, currentSlide, onHandleDot }) {
  return (
    <>
      {items.map((obj) => (
        <li
          key={obj}
          onClick={() => onHandleDot(obj)}
          className={currentSlide === obj ? 'slider_dot active' : 'slider_dot'}></li>
      ))}
    </>
  );
}
