import React from 'react';

const Photo = ({ image, count, onPrev, onNext }) => {

  if (!image) {
    return false;
  }

  return (
    <div className="full-image">
      <img alt="" src={image} />
      {(count > 1) && (
        <React.Fragment>
          <div className="prev" onClick={onPrev}>
            <span className="prev-btn btn-control">
              <svg role="presentation" viewBox="0 0 24 24">
                <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z" />
              </svg>
            </span>
          </div>
          <div className="next" onClick={onNext}>
            <span className="next-btn btn-control">
              <svg role="presentation" viewBox="0 0 24 24">
                <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
              </svg>
            </span>
          </div>
        </React.Fragment>
      )}

    </div >
  );
}

export default Photo;
