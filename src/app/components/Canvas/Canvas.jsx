import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import '../../styles/styles.css';
import '../../styles/Resizable.css';
import UpdateDraggable from '../UpdateDraggable';
import Rectangle from '../Rectangle';
import Textbox from '../Textbox';
import WithInspector from '../WithInspector';

const style = {
  height: '1000px',
  width: '1000px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  position: 'relative',
  border: '1px solid grey'
};

function Canvas() {
  const textBoxes = useSelector(state => state.ProductReducer.textBoxes);
  const rectangles = useSelector(state => state.ProductReducer.rectangles);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'dragBox',
    drop: () => ({ name: 'Dustbin' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  let backgroundColor = 'white';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      <div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
        {textBoxes &&
          textBoxes.map(textBox => (
            <UpdateDraggable
              type="textBox"
              id={textBox.id}
              x={textBox.x}
              y={textBox.y}
              width={textBox.width}
              height={textBox.height}
              key={textBox.id}
            >
              <WithInspector type="textBox" textBox={textBox}>
                <Textbox textBox={textBox} />
              </WithInspector>
            </UpdateDraggable>
          ))}
        {rectangles &&
          rectangles.map(rectangle => (
            <UpdateDraggable
              type="rectangle"
              id={rectangle.id}
              x={rectangle.x}
              y={rectangle.y}
              width={rectangle.width}
              height={rectangle.height}
              key={rectangle.id}
            >
              <WithInspector type="rectangle" rectangle={rectangle}>
                <Rectangle rectangle={rectangle} />
              </WithInspector>
            </UpdateDraggable>
          ))}
      </div>
    </div>
  );
}

export default Canvas;
