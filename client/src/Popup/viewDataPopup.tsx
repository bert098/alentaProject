import { FC } from 'react';
import formatDate from '../utils/convertDate'
import './Popup.css'; // Create a CSS file for styling

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: any;
}

const viewModal: FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }
  console.log(children)
  const formattedDate = formatDate(children.dueDate);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h1>
          {children.name}
        </h1>
        <div>
          <div className='infoSpacing'>
            Task Type: {children.type}
          </div>
          <div className='infoSpacing'>
            Status: {children.status}
          </div>
          <div className='infoSpacing'>
            Due Date: {formattedDate}
          </div>
          <div className='infoSpacing'>
            Assignee: {children.assignee}
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewModal;