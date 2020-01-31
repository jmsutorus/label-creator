import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import '../../styles/styles.css';
import '../../styles/Resizable.css';
import UpdateDraggable from '../UpdateDraggable';
import Rectangle from '../Rectangle';
import Textbox from '../Textbox';
import WithInspector from '../WithInspector';
import Barcode from '../Barcode/Barcode';

const style = {
  height: '1000px',
  width: '1000px',
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
  const objects = useSelector(state => state.ProductReducer.objects);

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

  const getObject = object => {
    switch (object.type) {
      case 'textBox': {
        return <Textbox textBox={object} />;
      }
      case 'rectangle': {
        return <Rectangle rectangle={object} />;
      }
      case 'barcode': {
        return <Barcode barcode={object} />;
      }
      default: {
        return <Textbox textBox={object} />;
      }
    }
  };

  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      <div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
        {objects &&
          objects.map(object => (
            <UpdateDraggable
              id={object.id}
              x={object.x}
              y={object.y}
              width={object.width}
              height={object.height}
              zIndex={object.zIndex}
              key={object.id}
            >
              <WithInspector object={object}>{getObject(object)}</WithInspector>
            </UpdateDraggable>
          ))}
      </div>
    </div>
  );
}

export default Canvas;
