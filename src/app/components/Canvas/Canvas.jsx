import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import '../../styles/Resizable.css';
import UpdateDraggable from '../UpdateDraggable';
import Rectangle from '../LabelObjects/Rectangle';
import Textbox from '../LabelObjects/Textbox';
import WithInspector from '../WithInspector';
import Barcode from '../LabelObjects/Barcode';
import SnapGrid from '../SnapGrid';
import './Canvas.scss';

function Canvas() {
  const canvas = useSelector(state => state.CanvasReducer.canvas);

  const style = {
    height: `${canvas.height * 100}px`,
    width: `${canvas.width * 100}px`
  };

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
    <div
      title="canvas"
      style={{ flex: 1, height: '600px', backgroundColor: '#E8E8E8', position: 'relative' }}
    >
      <div ref={drop} style={{ ...style, backgroundColor }} className="canvas">
        <SnapGrid />
        {canvas.textboxes &&
          canvas.textboxes.map(object => (
            <UpdateDraggable
              id={object.id}
              x={object.x * 100}
              y={object.y * 100}
              width={object.width * 100}
              height={object.height * 100}
              zIndex={600}
              type="textboxes"
              key={object.id}
            >
              <WithInspector object={object} type="textbox">
                <Textbox textBox={object} />
              </WithInspector>
            </UpdateDraggable>
          ))}
        {canvas.rectangles &&
          canvas.rectangles.map(object => (
            <UpdateDraggable
              id={object.id}
              x={object.x * 100}
              y={object.y * 100}
              width={object.width * 100}
              height={object.height * 100}
              zIndex={400}
              type="rectangles"
              key={object.id}
            >
              <WithInspector object={object} type="rectangle">
                <Rectangle rectangle={object} />
              </WithInspector>
            </UpdateDraggable>
          ))}
        {canvas.barcodes &&
          canvas.barcodes.map(object => (
            <UpdateDraggable
              id={object.id}
              x={object.x * 100}
              y={object.y * 100}
              width={object.width * 100}
              height={object.height * 100}
              zIndex={500}
              type="barcodes"
              key={object.id}
            >
              <WithInspector object={object} type="barcode">
                <Barcode barcode={object} />
              </WithInspector>
            </UpdateDraggable>
          ))}
      </div>
    </div>
  );
}

export default Canvas;
