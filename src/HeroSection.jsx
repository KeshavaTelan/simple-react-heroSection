// HeroSection.jsx
import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  showSecondaryButton = true,
  imageSrc,
  imageAlt = "Hero image",
  showImageOnMobile = true,
  backgroundColor = "bg-light",
  primaryButtonClass = "btn-primary",
  secondaryButtonClass = "btn-secondary",
  textColor = "text-dark"
}) => {
  return (
    <div className={`hero-section ${backgroundColor} py-5 h-50`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className={`col-12 col-md-6 ${textColor}`}>
            <h2 className="mb-3">{title}</h2>
            <p className="mb-4">{description}</p>
            <div className="d-flex gap-3">
              {primaryButton && (
                <button 
                  className={`btn ${primaryButtonClass}`}
                  onClick={primaryButton.onClick}
                >
                  {primaryButton.text}
                </button>
              )}
              {showSecondaryButton && secondaryButton && (
                <button 
                  className={`btn ${secondaryButtonClass}`}
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </button>
              )}
            </div>
          </div>
          
          {/* Right Column */}
          {imageSrc && (
            <div className={`col-12 col-md-6 ${!showImageOnMobile ? 'd-none d-md-block' : ''} text-center`}>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="img-fluid"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  showSecondaryButton: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  showImageOnMobile: PropTypes.bool,
  backgroundColor: PropTypes.string,
  primaryButtonClass: PropTypes.string,
  secondaryButtonClass: PropTypes.string,
  textColor: PropTypes.string
};

export default HeroSection;